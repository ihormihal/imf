var cssTransitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';
var cssAnimationEnd = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
var selector = '.ripple, .btn-mt';

(function($) {

	$(document).on('click', selector, function(event){
		var that, ink, d, x, y;
		that = $(this);
		if(that.find('.ink').length == 0){
			that.prepend('<span class="ink"></span>');
		}
		ink = that.find('.ink');
		ink.removeClass('animate');
		if(!ink.height() && !ink.width())
		{
			d = Math.max(that.outerWidth(), that.outerHeight());
			ink.css({height: d, width: d});
		}
		x = event.pageX - that.offset().left - ink.width()/2;
		y = event.pageY - that.offset().top - ink.height()/2;
		ink.css({top: y+'px', left: x+'px'}).addClass('animate');
		that.on(cssAnimationEnd, '.ink', function(){
			$(this).remove();
		});
	});

})(jQuery);