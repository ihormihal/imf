/*
 * Select autocomplete plugin
 * v0.1.1 - 2017-05-20
 * https://github.com/ihormihal/IM-Framework
 * http://mycode.in.ua
 * Copyright 2017 Ihor Mykhalchenko
 */

(function($) {
	$.fn.imfSelect = function(options){
		var settings = $.extend({

		}, options);

		//plain JS code
		var app = {
			//get options array from select
			getItems: function(el){
				var items = [];
				el.querySelectorAll('option').forEach(function(option, index){
					items.push({
						index: index,
						value: option.getAttribute('value'),
						text: option.textContent, //or innerHTML
						selected: option.selected ? true : false
					});
				});
				return items;
			},
			createComponent: function(items, placeholder, searchPlaceholder, inputClassName, isMultiple){
				const element = document.createElement('DIV');
				element.className = "imf-select dropdown";

				//make collection
				var collectionContent = '';
				items.forEach(function(item){
					var className = item.selected ? 'active' : '';
					collectionContent += '<li data-index="'+item.index+'" data-value="'+item.value+'" class="'+className+'">'+item.text+'</li>';
				});

				//make popup content
				var popupContent = '<div class="popup full">'+
					'<div class="search-wrapper">'+
						'<div class="input-icon">'+
							'<input class="search mtr full" type="text" placeholder="'+searchPlaceholder+'">'+
							'<i class="icon light fa fa-search"></i>'+
						'</div>'+
					'</div>'+
					'<ul class="collection">'+ collectionContent +'</ul>' +
				'</div>';

				//make template
				var template = '';
				if(isMultiple){
					template = '<div class="select selection">'+placeholder+'</div>'+popupContent;
				}else{
					template = '<input class="control '+inputClassName+'" type="text" readonly placeholder="'+placeholder+'">'+popupContent;
				}

				element.innerHTML = template;

				return element;
			}
		}


		//init for each
		//jQuery code
		this.each(function(){
			const options = {
				placeholder: 'Placeholder',
				searchPlaceholder: 'Seasrch items'
			};
			const select = this;
			const items = app.getItems(select); //initial state
			const component = app.createComponent(items, options.placeholder, options.searchPlaceholder, 'mtr full', select.multiple);

			const collection = component.querySelector('.collection');
			const input = component.querySelector('input.control');
			const searchInput = component.querySelector('input.search');
			const selection = component.querySelector('.selection'); //for multiple

			//mount component html
			$(select).hide().after(component);

			// EVENTS

			//on select focus
			$(input).on('focus', function(){
				$(component).addClass('active'); //show popup
			});

			//for multiple
			$(selection).on('click', function(event){
				event.stopPropagation();
				$(component).addClass('active'); //show popup
			});

			function selectionMeltiple(){
				var selectionContent = '';
				for(var i = 0; i < items.length; i++){
					if(items[i].selected){
						selectionContent += '<div data-index="'+items[i].index+'" data-value="'+items[i].value+'">'+items[i].text+' <i class="x"></i></div>';
					}
				}
				if(selectionContent){
					selection.innerHTML = selectionContent;
				}else{
					selection.innerHTML = options.placeholder;
				}
			}

			//on item selected
			$(collection).on('click', 'li', function(){
				var index = $(this).data('index');

				if(select.multiple){
					items[index].selected = true;
					selectionMeltiple();
				}else{
					//model
					for(var i = 0; i < items.length; i++){
						items[i].selected = false;
					}
					items[index].selected = true;
					//view
					$(collection).find('li').removeClass('active');
					select.value = items[index].value;
					input.value = items[index].text;
				}

				$(this).addClass('active');

				$(component).removeClass('active'); //hide popup
			});

			$(selection).on('click', '.remove', function(){
				$(this).parent().remove();
				selectionRemoveItem();
			});

			//on search input
			$(searchInput).on('keyup change', function() {
				var value = this.value;
				if (value.length > 0) {
					$(collection).find('li').show().filter(function() {
						return $(this).text().toLowerCase().indexOf(value.toLowerCase()) == -1;
					}).hide();
				} else {
					$(collection).find('li').show();
				}
			});

		});

	};
})(jQuery);