(function($) {

	$.fn.imHeader = function(options) {
		var that = $(this);
		var settings = $.extend({
			fixedClass: 'mini',
			breakpoint: 300,
			mobileWidth: 992
		}, options);

		var header_fixed = 0;
		var header_fixed_pre = 0;

		var main = function(){
			header_fixed = window.pageYOffset > 300 ? 1 : 0;
			if(header_fixed_pre !== header_fixed){
				//parameter has changed
				if(header_fixed){
					that.addClass(settings.fixedClass);
				}else{
					that.removeClass(settings.fixedClass);
				}
			}
			header_fixed_pre = header_fixed;
		}

		if($(window).width() > settings.mobileWidth){
			main();
			window.onscroll = function(){
				main();
			}
		}
	}

})(jQuery);