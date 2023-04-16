// Select the input element and save button
const input = document.querySelector('#hours');
const saveButton = document.querySelector('#save-button');


// Get a reference to the button and output div elements
const button = document.getElementById('my-button');
const output = document.getElementById('output');


// Listen for button press and save to local storage
saveButton.addEventListener('click', function() {
	localStorage.setItem('hours', input.value);
  	location.reload();
	console.log("we made it");
});

// When the page loads, check if there's a saved value and display it
window.addEventListener('load', function() {
	const savedHours = localStorage.getItem('hours');
	if (savedHours) {
		input.value = savedHours;
	}
});







