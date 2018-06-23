/**** ACCORDION MENU ****/
$(document).on('click', '.accordion-item .title', function(event) {
	event.stopPropagation();
	var row = $(this).closest('.accordion-item');
	var container = row.closest('.accordion');
	
	if(row.hasClass('active')){
		row.removeClass('active');
	}else{
		container.find('> .active').removeClass('active');
		row.addClass('active');
	}
});
/**** END ACCORDION MENU ***/