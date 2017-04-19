/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	function init() {
		[].slice.call(document.querySelectorAll('.nav')).forEach(function(nav) {
			var navItems = [].slice.call(nav.querySelectorAll('.nav__item')),
				itemsTotal = navItems.length,
				setCurrent = function(item) {
					// return if already current
					if( item.classList.contains('nav__item--current') ) {
						return false;
					}
					// remove current
					var currentItem = nav.querySelector('.nav__item--current');
					currentItem.classList.remove('nav__item--current');
					$("#mockup-slider_id img").hide();
					
					//$("#mockup-slider_id img").removeClass("opaque").addClass("ImageTransparent");
					$("#mockup-slider_id img").attr("src", "img/" + item.id + ".jpg");
					$("#mockup-slider_id img").show("fast");
					//$("#mockup-slider_id img").removeClass("ImageTransparent");
					//$("#mockup-slider_id img").addClass("opaque");
					
					// set current
					item.classList.add('nav__item--current');
				};
			
			navItems.forEach(function(item) {
				item.addEventListener('click', function() { setCurrent(item); });
			});
		});

		[].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
			link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
			new Clipboard(link);
			link.addEventListener('click', function() {
				link.classList.add('link-copy--animate');
				setTimeout(function() {
					link.classList.remove('link-copy--animate');
				}, 300);
			});
		});
		$('#btn-Introduction').on('click',function(){
    		if($('#self-introduction').css('display')=='none'){
    			$('#self-introduction').show().siblings('div').hide();
			};
		});
		$('#btn-Skill').on('click',function(){
    		if($('#skill').css('display')=='none'){
    			$('#skill').show().siblings('div').hide();
			};
		});
		$('#arrow').on('click',function(){
			var scroll_offset = $("#content-main").offset(); 
			$("body,html").animate({
				scrollTop:scroll_offset.top 
			},1000);
		});
	}

	init();

})(window);