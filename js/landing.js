$(document).ready ( function(){
	
	// customize selectbox
	$('select').styler();

	/*$('.header').sticky({ topSpacing: 0, responsiveWidth: true });*/
	
	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		
		if ( $(this).scrollTop() > 20 ) {
			$('.header').addClass('topNavCollapse');
		} else {
			$('.header').removeClass('topNavCollapse');
		}
		
		if ( $(this).scrollTop() > 100 ) {
			$('.link-totop').fadeIn();
		}
		else {
			$('.link-totop').fadeOut();
		}
	});

	// jQuery for page scrolling feature
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 77 }, 500, 'linear');
			event.preventDefault();
		});
	});
	
	$('.link-totop, .header .logo').click ( function(){
		$('html, body').stop().animate({ scrollTop: 0 }, 300, 'linear');
	});

	
	$('.mobileBtn').click( function() {
		$('.header .menu').slideToggle();
	});
	
	$('.videoPlayer .play').click( function(){
		$(this).closest('.videoCap').fadeOut();
	});
	
});
