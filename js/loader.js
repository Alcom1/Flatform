//Game object literal
var game = game || {};

//Load
window.onload = function()
{
	console.log("window.onload called");
    
    //Modules.
	game.managerSound.init(0.4);
	
	//Scenes
	game.scene_0 = new Scene_0();
	
	//Main
	game.main.init();
}