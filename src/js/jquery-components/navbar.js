/*** MENU MAKER ***/
var Menu = {};

Menu.navToArray = function(ul) {
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
};

Menu.makeMenu = function(ul) {
	if(ul === null) return false;
	var memuArray = Menu.navToArray(ul);

	/* MOBILE MUNU */

	var mobileMenuHTML = '';
	for (var i = 0; i < memuArray.length; i++) {
		var lev2 = memuArray[i].children;
		var attributes = lev2.length ? 'class="parent"' : '';
		var toggle = lev2.length ? '<span class="toggle"></span>' : '';
		mobileMenuHTML += '<li '+attributes+'><a class="ripple" href="'+memuArray[i].a.href+'">'+memuArray[i].a.text+'</a>'+toggle;

		//level 2
		if(lev2.length){
			mobileMenuHTML += '<ul>';
			for (var j = 0; j < lev2.length; j++) {
				var lev3 = lev2[j].children;
				var attributes = lev3.length ? 'class="parent"' : '';
				var toggle = lev3.length ? '<span class="toggle"></span>' : '';
				mobileMenuHTML += '<li '+attributes+'><a class="ripple" href="'+lev2[j].a.href+'">'+lev2[j].a.text+'</a>'+toggle;

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
	mobileMunu.id = 'menu-drawer-container';
	mobileMunu.innerHTML = '<div id="menu-drawer" class="menu-drawer dark-bg"><nav class="nav-side"><ul class="nav nav-col">'+mobileMenuHTML+'</ul></nav></div>';
	return mobileMunu;
};
/*** END MENU MAKER ***/
$(document).on('click', '#menu-drawer-toggle', function(event){
	event.preventDefault();
	if(!Menu.isVisible) return;
	$('body').toggleClass('menu-drawer-opened');
});
$(document).on('click', function(event){
	if(event.target.className.indexOf('menu-drawer-opened') !== -1){
		$('body').removeClass('menu-drawer-opened');
	}
});

//FOR INSIDE ACCORDEON
$(document).on('click', '.menu-slide .toggle', function(event) {
	event.stopPropagation();
	$(this).parent().toggleClass('active');
});
/**** END SIDE NAVIGATION MENU ****/


//initiate
Menu.initiate = function() {
	Menu.isVisible = false
	Menu.desctop = document.getElementById('desktop-menu');
	Menu.container = Menu.desctop.parentElement;
	Menu.mobile = Menu.makeMenu(Menu.desctop);
}

Menu.showMobile = function () {
	if(Menu.isVisible) return;

	Menu.isVisible = true
	console.log('showMobile')
	Menu.container.innerHTML = '';
	document.body.appendChild(Menu.mobile);
	$('body').addClass('has-menu-drawer');
}

Menu.hideMobile = function () {
	if(!Menu.isVisible) return;
	
	Menu.isVisible = false
	console.log('hideMobile')
	$('#menu-drawer-container').remove();
	Menu.container.appendChild(Menu.desctop);
	$('body').removeClass('has-menu-drawer');
}

$(function(){
	Menu.initiate();
	$(window).width() < 992 ? Menu.showMobile() : Menu.hideMobile();
});
$(window).on('resize', function(event) {
	$(window).width() < 992 ? Menu.showMobile() : Menu.hideMobile();
});