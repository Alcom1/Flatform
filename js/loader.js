//Game object literal
var game = game || {};

//Load
window.onload = function()
{
	console.log("window.onload called");
    
    //Modules.
	game.managerSound.init(0.4);
	game.managerCollision.init();
	game.managerMouse.init();
	
	//Main
	game.main.init();
}