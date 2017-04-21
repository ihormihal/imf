var cssTransitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';
var cssAnimationEnd = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';

var Menu = {
	/* NAV TO ARRAY */
	navToArray: function(ul) {
		var array = [];
		if(ul && ul.children){
			for (var i = 0; i < ul.children.length; i++) {
				var a = ul.children[i].children[0];
				var innerUl = ul.children[i].children[1];
				array.push({
					a: {
						href: a.href,
						text: a.innerHTML.trim()
					},
					children: Menu.navToArray(innerUl)
				});
			}
		}
		return array;
	},

	/* MOBILE MENU CONSTRUCTOR */
	generate: function(ul){

		if(ul === null) return false;
		var memuArray = Menu.navToArray(ul);

		/* MOBILE MUNU */

		var mobileMenuHTML = '';
		for (var i = 0; i < memuArray.length; i++) {

			var lev2 = memuArray[i].children;
			var attributes = lev2.length ? 'class="parent"' : '';
			mobileMenuHTML += '<li '+attributes+'>';
			mobileMenuHTML += '<a class="ripple" href="'+memuArray[i].a.href+'">'+memuArray[i].a.text+'</a>';
			if(lev2.length){
				mobileMenuHTML += '<span class="toggle"></span>';
			}

			//level 2
			if(lev2.length){
				mobileMenuHTML += '<ul>';
				for (var j = 0; j < lev2.length; j++) {

					var lev3 = lev2[j].children;
					var attributes = lev3.length ? 'class="parent"' : '';
					mobileMenuHTML += '<li '+attributes+'>';
					mobileMenuHTML += '<a class="ripple" href="'+lev2[j].a.href+'">'+lev2[j].a.text+'</a>';
					if(lev3.length){
						mobileMenuHTML += '<span class="toggle"></span>';
					}

					//level 3
					if(lev3.length){
						mobileMenuHTML += '<ul>';
						for (var k = 0; k < lev3.length; k++) {
							mobileMenuHTML += '<li><a class="ripple" href="'+lev3[k].a.href+'">'+lev3[k].a.text+'</a></li>';
						}
						mobileMenuHTML += '</ul>';
					}
					mobileMenuHTML += '</li>';
				}
				mobileMenuHTML += '</ul>';
			}
			mobileMenuHTML += '</li>';
		}

		var mobileMunu = document.createElement('div');
		mobileMunu.innerHTML = '<div id="menu-drawer" class="menu-drawer dark-bg"><nav class="nav-side"><ul class="nav nav-col">'+mobileMenuHTML+'</ul></nav></div>';

		$('body').addClass('has-menu-drawer');
		document.body.appendChild(mobileMunu);
	}
};


/*** you can use window.initial() after ajax ***/
window.initial = function(){
	/*** Floating LABEL ***/
	$('.floating-label').each(function(){
		if($(this).find('input, textarea').val() !== ''){
			$(this).addClass('focus');
		}
	});
	/*** END Floating LABEL ***/

	/*** TABS ***/
	$('.tab-control').each(function(){
		var control = $(this);
		var target = $(this).data('target');
		$(this).on('click','li',function(){
			control.find('.active').removeClass('active');
			$(this).addClass('active');
			var activeTab = $(target+' .tab:eq('+$(this).index()+')');
			var runAnimation = function(){
				activeTab.addClass('in');
			}
			$(target+' .tab.active.in').removeClass('active in');
			activeTab.addClass('active');
			setTimeout(runAnimation, 50);
		});
	});
	/*** END TABS ***/
};


/*** GENERAL COMPONENTS ***/
$(function(){

	/*** DROPDOWN ***/
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


	/*** Input-icon fix ***/
	$(document).on('click', '.input-icon i', function(event) {
		event.stopPropagation();
		$(this).parent().find('input').focus();
	});

	/*** Floating Label ***/
	$(document).on('focusin', '.floating-label input, .floating-label textarea', function(){
		$(this).parents('.floating-label').addClass('focus');
	});
	$(document).on('focusout', '.floating-label input, .floating-label textarea', function(){
		if($(this).val() == ''){
			$(this).parents('.floating-label').removeClass('focus');
		}
	});


	/*** Ripple effect ***/
	$(document).on('mousedown', '.ripple, .btn-mt', function(event){
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


	/**** MOBILE NAVBAR DRAWER ***/
	$(document).on('click', '#menu-drawer-toggle', function(event){
		event.preventDefault();
		$('body').toggleClass('menu-drawer-opened');
	});
	$(document).on('click', function(event){
		console.log(event.target);
		if($(event.target).hasClass('menu-drawer-opened')){
			$('body').removeClass('menu-drawer-opened');
		}
	});


});
/*** END GENERAL COMPONENTS ***/

/*** WINDOW RESIZE ***/
$(window).on('resize', function(){
	if($().imParallax){
		$('.parallax').imParallax();
	}
});

/*** All IMAGES LOADED ***/
$(window).on('load', function(){
	if($().imParallax){
		$('.parallax').imParallax();
	}
});

/*** DOCUMENT READY ***/
$(function() {

	window.initial();

	Menu.generate(document.getElementById('desktop-menu'));

	//single gmap
	$('.gmap.single').imGmapSingle();

	if($().imOwlCarousel){
		$('.carousel').imOwlCarousel({type: 'carousel'});
		$('.slider').imOwlCarousel({type: 'slider'});
	}

	//Select autocomplete
	if($().imSelect) {
		$('select.multiselect').imSelect();
	}


});
/*** DOCUMENT READY END ***/