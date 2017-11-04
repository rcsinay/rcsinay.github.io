$(document).ready(function(){
	$('.right.menu.open .item.menu').click(function(e){
        e.preventDefault();
		$('.ui.vertical.menu').transition('slide down');
	});

	$('.ui.vertical.navbar.menu .item').click(function(){
		$('.ui.vertical.menu').transition('slide down');
	})
    
	$('.ui.dropdown').dropdown();

	$('#story .row').visibility({
		onTopVisible: function(){
			$(this).find('.image').transition({
				animation: 'fade in',
				duration: '1.5s'
			});

			$(this).find('p').transition({
				animation: 'fade in',
				duration: '2.5s'
			}
		);

		$(this).find('.ui.divider').transition({
			animation: 'fade in',
			duration: '2.5s'
		}
	);
		}
	})
	particlesJS.load('particles-js', 'assets/javascripts/particlesjs-config.json', function() {
		console.log('callback - particles.js config loaded');
	  });

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
		) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			scrollTop: target.offset().top - 80
			}, 500, function() {
			// Callback after animation
			// Must change focus!
			//   var $target = $(target);
			//   $target.focus();
			//   if ($target.is(":focus")) { // Checking if the target was focused
			//     return false;
			//   } else {
			//     $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			//     $target.focus(); // Set focus again
			//   };
			});
		}
		}
	});
});