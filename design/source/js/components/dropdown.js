/*** DROPDOWN ***/
$(document).on('click', '.popup', function(event){
	event.preventDefault();
});
$(document).on('click', function(event){
	var current = $(event.target).parents('.dropdown')[0];
	$('.dropdown.active').each(function(){
		if(this !== current){
			$(this).removeClass('active');
		}
	});
});
$(document).on('click', '.dropdown .toggle', function(){
	var dropdown = $(this).parents('.dropdown');
	if(!dropdown.hasClass('onhover')){
		dropdown.toggleClass('active');
	}
});
/*** END DROPDOWN ***/