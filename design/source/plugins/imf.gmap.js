(function($) {

	$.fn.imGmapSingle = function(options) {

		var that = this;
		var settings = $.extend({
			point: false, //for single ("50.4503,30.5235")
			zoom: 5,
			scroll: false,
			type: 'ROADMAP',
			marker: 'design/img/pin.svg',
			animation: false
		}, options);

		$(that).each(function(index, container){
			var gmap = {};

			gmap.settings = {};

			//extend settings
			var thatData = $(container).data();
			for(var i in settings){
				if(thatData.hasOwnProperty(i)){
					gmap.settings[i] = thatData[i];
				}else{
					gmap.settings[i] = settings[i];
				}
			}

			var location = gmap.settings.point.split(',');
			gmap.latlng = new google.maps.LatLng(parseFloat(location[0].trim()), parseFloat(location[1].trim()));

			gmap.mapOptions = {
				center: gmap.latlng,
				zoom: parseInt(gmap.settings.zoom),
				zoomControl: true,
				mapTypeControl: false,
				streetViewControl: false,
				scrollwheel: gmap.settings.scroll,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			gmap.map = new google.maps.Map(container, gmap.mapOptions);

			gmap.marker = new google.maps.Marker({
				position: gmap.latlng,
				map: gmap.map,
				icon: gmap.settings.marker
			});


		});

	};

	$.fn.imGmapMultiple = function(options) {
		if(this.length == 0) return false;
		var that = this[0];
		var settings = $.extend({
			zoom: 5,
			scroll: false,
			type: 'ROADMAP',
			marker: 'design/img/pin.svg',
			animation: false,
			pointsUrl: false,
			windowUrl: false
		}, options);


		var gmap = {};

		gmap.points = [];
		gmap.markers = [];
		gmap.settings = {};

		//extend settings
		var thatData = $(that).data();
		for(var i in settings){
			if(thatData.hasOwnProperty(i)){
				gmap.settings[i] = thatData[i];
			}else{
				gmap.settings[i] = settings[i];
			}
		}

		gmap.mapOptions = {
			zoom: parseInt(gmap.settings.zoom),
			zoomControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			scrollwheel: gmap.settings.scroll,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};


		if(gmap.settings.type == 'SATELLITE'){
			gmap.mapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE;
		}else if(gmap.settings.type == 'HYBRID'){
			gmap.mapOptions.mapTypeId = google.maps.MapTypeId.HYBRID;
		}else if(gmap.settings.type == 'TERRAIN'){
			gmap.mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN;
		}

		gmap.markerOptions = {
			position: null,
			map: null,
			icon: gmap.settings.marker,
			animation: (gmap.settings.animation ? google.maps.Animation.DROP : false)
		};
		
		gmap.loadPoints = function(url, data){
			$.ajax({
				url: url,
				data: data
			}).done(function(res){
				if(res.status == 'success'){
					gmap.points = res.data;
					gmap.placePoints();
				}
			});
		};

		//initial points
		if(gmap.settings.pointsUrl){
			gmap.loadPoints(gmap.settings.pointsUrl);
		}else if(gmap.settings.point){
			gmap.points = $.parseJSON($(that).html().trim());
		}

		gmap.map = new google.maps.Map(that, gmap.mapOptions);
		gmap.infowindow = new google.maps.InfoWindow();


		gmap.placePoints = function(){
			gmap.bounds = new google.maps.LatLngBounds();
			for(var i = 0; i < gmap.markers.length; i++){
				gmap.markers[i].setMap(null);
			}
			gmap.markers = [];
			for (var i = 0; i < gmap.points.length; i++) {
				if(gmap.points[i]){

					var options = gmap.markerOptions;
					options.position = new google.maps.LatLng(parseFloat(gmap.points[i].lat), parseFloat(gmap.points[i].lng));
					options.map = gmap.map;
					options.id = gmap.points[i].id;

					var marker = new google.maps.Marker(options);

					gmap.markers.push(marker);
					if(gmap.settings.windowUrl){
						google.maps.event.addListener(marker,'click',function(){
							loadInfoWindow(that);
						});
					}
					gmap.bounds.extend(marker.position);
				}
			}
			gmap.map.fitBounds(this.bounds);

			if(gmap.markers.length == 0){
				gmap.map.setZoom(1);
			}
			if(gmap.markers.length == 1){
				gmap.map.setZoom(gmap.mapOptions.zoom);
			}
		}

		gmap.placePoints();
		
		function loadInfoWindow(marker){
			$.ajax({
				url: gmap.settings.windowUrl,
				data: {id: marker.id}
			}).done(function(data){
				gmap.infowindow.close();
				gmap.infowindow.setContent(data);
				gmap.infowindow.open(gmap.map,marker);
			});
		}

		return gmap;


	};

})(jQuery);
