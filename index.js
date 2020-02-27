// Prevent form from submitting

// Get submit button
let submit = document.getElementById('submit');

// Add eventlistener to prevent post on click
submit.addEventListener("click", function(stuff) {
	stuff.preventDefault();
});


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