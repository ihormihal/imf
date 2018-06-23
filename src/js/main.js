var cssTransitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

//all images loaded
$(window).on('load', function(){
	//parallax
	if($().imfParallax) $('.parallax').imfParallax();
});

$('body').on(cssTransitionEnd, function(){
	$(window).trigger('resize');
	$('.slider').trigger('refresh.owl.carousel');
});



// var Wow = new WOW({
// 	boxClass: 'wow',
// 	animateClass: 'animated',
// 	offset: 0,
// 	mobile: true,
// 	live: true
// });

$(function() {

	//Google MAPS
	if($().imfGmapSingle) $('.gmap.single').imfGmapSingle();
	if($().imfGmapMultiple){
		//multipe points gmap
		var ajaxMap = $('#ajax-map').imfGmapMultiple({
			animation: true
		});
		//gmap filter
		$('#map-filter').on('click', '.filter', function(event){
			event.preventDefault();
			$('#map-filter').find('.filter').removeClass('active');
			$(this).addClass('active');
			ajaxMap.loadPoints($(this).attr('href'), $(this).data());
		});
	}

	//OWL Carousel
	if($().imfOwlCarousel){
		$('.carousel').imfOwlCarousel({type: 'carousel'});
		$('.slider').imfOwlCarousel({type: 'slider'});
	}
	//Select autocomplete
	if($().imfSelect) $('select.imf-select').imfSelect();

});