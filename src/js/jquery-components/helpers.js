/**** INPUT ICON HELPER ****/
$(document).on('click', '.input-icon i', function(event) {
	event.stopPropagation();
	$(this).parent().find('input').focus().trigger('click');
});
/**** END INPUT ICON HELPER ***/

/**** FILEINPUT HELPER ****/
$(document).on('change', '.fileinput input[type=file], .fileinput-btn input[type=file]', function(){
	var str = $(this).val();
	if (str.lastIndexOf('\\')){
		var i = str.lastIndexOf('\\')+1;
	}else{
		var i = str.lastIndexOf('/')+1;
	}
	var filename = str.slice(i);
	$(this).closest('.fileinput, .fileinput-btn').find('input[type=text]').val(filename);
});
/**** END FILEINPUT HELPER ***/

/**** Floating label HELPER ***/
$(function() {

	$('.floating-label').each(function(){
		if($(this).find('input, textarea').val() !== ''){
			$(this).addClass('focus');
		}
	});

});

$(document).on('focusin', '.floating-label input, .floating-label textarea', function(){
	$(this).closest('.floating-label').addClass('focus');
});
$(document).on('focusout', '.floating-label input, .floating-label textarea', function(){
	if($(this).val() == ''){
		$(this).closest('.floating-label').removeClass('focus');
	}
});
/**** END Floating label HELPER ***/