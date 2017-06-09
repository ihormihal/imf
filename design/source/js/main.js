var cssTransitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

//all images loaded
$(window).on('load', function(){
	//parallax
	if($().imParallax) $('.parallax').imParallax();
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
	if($().imGmapSingle) $('.gmap.single').imGmapSingle();
	if($().imGmapMultiple){
		//multipe points gmap
		var ajaxMap = $('#ajax-map').imGmapMultiple({
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
	if($().imOwlCarousel){
		$('.carousel').imOwlCarousel({type: 'carousel'});
		$('.slider').imOwlCarousel({type: 'slider'});
	}
	//Select autocomplete
	if($().imfSelect) $('select.imf-select').imfSelect();

});