/*
 * OWL-Carousel 2 wrapper
 * v0.1.1 - 2017-02-20
 * https://github.com/ihormihal/IM-Framework
 * http://mycode.in.ua
 * Copyright 2017 Ihor Mykhalchenko
 */

(function($) {

	$.fn.imfOwlCarousel = function(options){

		var settings = $.extend({
			type: 'carousel'
		}, options);


		$(this).each(function(){
			var el = $(this);
			var params = {
				loop: el.data('loop') == true ? true : false,
				nav : el.data('nav') == true ? true : false,
				dots: el.data('pag') == true ? true : false,
				autoplay: el.data('auto') == true ? true : false,
				slideBy: el.data('page') == true ? 'page' : 1,
				margin: el.data('margin') ? parseInt(el.data('margin')) : 0,
				autoplayTimeout: el.data('speed') ? parseInt(el.data('speed')) : 5000,
				navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
			};
			if(settings.type == 'carousel'){
				params.responsive = {
					0: { items: parseInt(el.data('xs')) || 1 },
					361: { items: parseInt(el.data('sm')) || 2 },
					769: { items: parseInt(el.data('md')) || 3 },
					1008: { items: parseInt(el.data('lg')) || 4 },
					1265: { items: parseInt(el.data('xl')) || 5 },
					1904: { items: parseInt(el.data('xxl')) || 5 }
				};
			}else if(settings.type == 'slider'){
				params.items = 1;
				el.on('translate.owl.carousel', function(event) {
					var currentIndex = event.item.index;
					var slides = el.find('.owl-item');
					slides.each(function(index){
						if(index !== event.item.index){
							$(this).find('.animated').each(function(){
								$(this).removeClass($(this).data('animated'));
							});
						}
					});
					slides.eq(currentIndex).find('.animated').each(function(){
						$(this).addClass($(this).data('animated'));
					});
				});
			}
			el.owlCarousel(params);
		});

		//OWL Carousel custom nav
		$('.owl-custom-nav').on('click', '.owl-prev, .owl-next', function(event){
			event.preventDefault();
			var target = $(this).parent('.owl-custom-nav').data('target');
			var owl = $(target);
			if($(this).hasClass('owl-prev')){
				owl.trigger('prev.owl.carousel');
			}else if($(this).hasClass('owl-next')){
				owl.trigger('next.owl.carousel');
			}
		});

	};

})(jQuery);