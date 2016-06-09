//Key press object.

"use strict";

var myKeys = {};

myKeys.KEYBOARD = Object.freeze
({
	"KEY_LEFT": 37, 
	"KEY_UP": 38, 
	"KEY_RIGHT": 39, 
	"KEY_DOWN": 40,
	"KEY_Z": 90,
	"KEY_X": 88,
	"KEY_C": 67,
});

// Array of boolean states for down keys.
myKeys.keydown = [];

// event listeners
window.addEventListener(
	"keydown",
	function(e)
	{
		//console.log("keydown=" + e.keyCode);
		myKeys.keydown[e.keyCode] = true;
	});
	
window.addEventListener(
	"keyup",
	function(e)
	{
		//console.log("keyup=" + e.keyCode);
		myKeys.keydown[e.keyCode] = false;
	});