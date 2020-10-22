$(document).ready(function(){
	// Prevent form from submitting
	// Get submit button
	let submit = document.getElementById('submit');
	// Add eventlistener to prevent post on click
	submit.addEventListener("click", function(stuff) {
		stuff.preventDefault();
	});
 //---------------------------------------------------------------//
	// Scroll to top button functionality
	//Get the button:
	let mybutton = document.getElementById("myBtn");

	// Show button when user scrolls down 50px, otherwise hide
	function scrollFunction () {
		if (document.body.scrollTop > 50) {
			mybutton.style.display = "block";
			mybutton.style.position = "fixed";
		}
		else {
			mybutton.style.display = "none";
		}
	}

	// Set function to activate when user scrolls
	document.body.addEventListener("scroll", scrollFunction);

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0; // For Safari
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	// Add click functionality to button
	mybutton.addEventListener("click", topFunction);

//---------------------------------------------------------------------//
	// Function for animatecss library
	// Usage: animateCSS('#element', 'bounce');
	// animateCSS('#element', 'bounce', function() {something after animation});
	function animateCSS(element, animationName, callback) {
	    const node = document.querySelector(element)
	    node.classList.add('animated', animationName)

	    function handleAnimationEnd() {
	        node.classList.remove('animated', animationName)
	        node.removeEventListener('animationend', handleAnimationEnd)

	        if (typeof callback === 'function') callback()
	    }

	    node.addEventListener('animationend', handleAnimationEnd)
	}

	// Pulse on hover for signup button, only on desktops!
	// Create media query
	const mq = window.matchMedia( "(min-width: 768px)" ); 
	// Get button
	let signupButton = document.getElementById('signup');
	let submitButton = document.getElementById('submit');
	if (mq) {
		signupButton.addEventListener('mouseenter', makePulse);
		signupButton.addEventListener('mouseleave', stopPulse);
		submitButton.addEventListener('mouseenter', makePulse);
		submitButton.addEventListener('mouseleave', stopPulse);
	} else {
		console.log("not showing pulse");
	}

	// Giving buttons pulsing animation
	function makePulse() {
		signupButton.classList.add('animated');
		signupButton.classList.add('pulse');
		signupButton.classList.add('infinite');
		submitButton.classList.add('animated');
		submitButton.classList.add('pulse');
		submitButton.classList.add('infinite');	
	}
	// Making pulse stop
	function stopPulse() {
		signupButton.classList.remove('animated');
		signupButton.classList.remove('pulse');
		signupButton.classList.remove('infinite');	
		submitButton.classList.remove('animated');
		submitButton.classList.remove('pulse');
		submitButton.classList.remove('infinite');
	}
	// Doing things based on scroll position
	$(document.body).scroll(function() {
	   var hT = $('#form-section').offset().top,
	       hH = $('#form-section').outerHeight(),
	       wH = $(window).height(),
	       wS = $(this).scrollTop();
	   if (wS > (hT+hH-wH)){
	       $('#signup-header').addClass('animated fadeInLeftBig');
	       $('#email-form').addClass(' animated fadeInRightBig slower')
	   }
	});
});



