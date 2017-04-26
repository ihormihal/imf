(function($) {

	$.fn.imfSelect = function(options){
		var settings = $.extend({

		}, options);

		var that = this;

		$(document).on('click', '.imf-select-single li', function(){
			var li = $(this);
			
			var dropdown = li.parents('.imf-select');
			var select = dropdown.prev();
			var collection = dropdown.find('.collection');
			collection.find('li.active').removeClass('active');
			li.addClass('active');

			var data = {
				value: li.data('value'),
				label: li.text()
			};
			select.val(data.value);
			dropdown.find('.imfs-value').val(data.value);
			dropdown.find('.imfs-label').val(data.label);
		});


		//searching
		$(document).on('keyup change', '.imfs-search', function(){
			var searchInput = $(this);
			var imfSelect = searchInput.parents('.imf-select');
			var collection = imfSelect.find('.collection');

			var value = searchInput.val();

			if (value.length > 0) {
				collection.find('li').show().filter(function() {
					return $(this).text().toLowerCase().indexOf(value.toLowerCase()) == -1;
				}).hide();
			} else {
				collection.find('li').show();
			}
		});

		$(this).each(function(){

			var node = this;
			var el = $(this);

			var options = {
				multiple : node.getAttribute('multiple') !== null ? true : false,
				name : node.getAttribute('name') || '',
				placeholder : node.getAttribute('placeholder') || '',
				searchPlaceholder : node.getAttribute('data-search-placeholder') || 'Search...',
				classes : node.className,
				value: el.val()
			};

			//console.log(options.multiple);

			
			var collection = '';
			el.find('option').each(function(option){
				collection += '<li data-value="'+$(this).attr('value')+'">'+$(this).text()+'</li>';
			});

			var dropdownSingle = '<div class="dropdown imf-select imf-select-single">'+
				'<input class="imfs-value" type="hidden" value="default">'+
				'<input class="imfs-label toggle full select" type="text" value="default">'+
				'<div class="popup full">'+
					'<div class="input-search input-icon">'+
						'<input class="imfs-search full" type="text" placeholder="Search...">'+
						'<i class="icon fa fa-search"></i>'+
					'</div>'+
					'<ul class="collection">'+collection+'</ul>'+
				'</div>'+
			'</div>';

			var dropdownMultiple = '<div class="dropdown imf-select imf-select-single">'+
				'<input class="imfs-value" type="hidden" value="default">'+
				'<input class="imfs-label toggle full select" type="text" value="default">'+
				'<div class="popup full">'+
					'<div class="input-search input-icon">'+
						'<input class="imfs-search full" type="text" placeholder="Search...">'+
						'<i class="icon fa fa-search"></i>'+
					'</div>'+
					'<ul class="collection">'+collection+'</ul>'+
				'</div>'+
			'</div>';


			el.hide();
			el.after(options.multiple ? dropdownMultiple : dropdownSingle);
		});

	}

})(jQuery);

$(function(){
	$('select.imf-select').imfSelect();
});