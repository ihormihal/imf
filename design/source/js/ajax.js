'use strict';

$(document).on('click', '.ajax-link', function(e){
	e.preventDefault();

	var el = $(this);
	var url = el.attr('href');
	var data = el.data();

	el.addClass('load');
	$.ajax({
		url: url,
		data: data
	}).done(function(res){
		el.removeClass('load');
		if(toastr){
			if(res.status == 'success'){
				toastr.success(res.message);
			}else if(res.status == 'warning'){
				toastr.warning(res.message);
			}else if(res.status == 'error'){
				toastr.error(res.message);
			}
		}else{
			alert(res.message);
		}
	}).fail(function(error){
		el.removeClass('load');
		console.log(error);
	});
});

$(document).on('click', '.ajax-nav a', function(e){
	e.preventDefault();

	var el = $(this);
	var target = el.parents('.ajax-nav').data('target');
	
	el.parents('ul').find('li').removeClass('active');
	el.parents('li').addClass('active');
	el.addClass('load');
	$(target).addClass('load');

	$.ajax({
		url: el.attr('href'),
		data: el.data()
	}).done(function(res){
		el.removeClass('load');
		$(target).removeClass('load');
		$(target).html(res);
	}).fail(function(error){
		el.removeClass('load');
		$(target).removeClass('load');
		console.log(error);
	});
});

$(function() {
	$('.ajax-nav li.active a').click();
});


//AJAX EMAIL
//$(document).on('submit', '.ajax-nav a', function(e){