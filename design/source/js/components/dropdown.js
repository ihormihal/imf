/*** DROPDOWN ***/
// $(document).on('click', '.popup', function(event){
// 	console.log('popup1');
// });

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

