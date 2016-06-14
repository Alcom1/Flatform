// main.js
"use strict";

//Game object literal
var game = game || {};

//Main object literal
game.main =
{
    WIDTH : 640, 				// Canvas width
    HEIGHT : 480,				// Canvas height
    canvas : undefined,			// Canvas
    ctx : undefined,			// Canvas context
   	lastTime : 0, 				// used by calculateDeltaTime() 
    debug : true,				// debug
	showCol : false,			// show collisions
	animationID : 0,			// ID index of the current frame.
	scenes : [],				// Array of scenes
	scene : undefined,			// Current scene
	indexS : -1,				// Index of the current scene
	
    //Initialization
	init : function()
	{
		//Init log
		console.log("app.main.init() called");
		
		// init canvas
		this.canvas = document.querySelector('canvas');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT;
		this.ctx = this.canvas.getContext('2d');
		
		//Scenes
		this.scenes.push(new Scene_0());
		this.scenes.push(new Scene_1());
		this.loadScene(0);
		
		// start the game loop
		this.frame();
	},
	
	//Core update
	frame : function()
	{
		//LOOP
	 	this.animationID = requestAnimationFrame(this.frame.bind(this));
	 	
	 	//Calculate Delta Time of frame
	 	var dt = this.calculateDeltaTime() / 2;
		
		//Clear
		this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
		
		//Update
		this.update(dt);
		
		//Draw
		this.draw(this.ctx);
		
		//Draw debug info
		if (this.debug)
		{
			// draw dt in bottom right corner
			this.fillText(
				"dt: " + (1 / dt).toFixed(1),
				2,
				16,
				"16pt Consolas",
				"white",
				false);
		}
	},
	
	//Update logic
	update : function(dt)
	{
		game.managerSound.update(dt);
		this.scenes[this.indexS].update(dt);
		game.managerCollision.update();
	},
	
	//Draw the main scene
	draw : function(ctx)
	{
		this.scenes[this.indexS].draw(ctx);
		
		if(this.showCol)
			game.managerCollision.draw(ctx);
	},
	
	//Load a scene
	loadScene : function(index)
	{
		if(this.indexS != -1)
			this.scenes[this.indexS].deinit();
		
		this.indexS = index;
		game.managerCollision.clear();
		this.scenes[this.indexS].init();
	},
	
	//Draw filled text
	fillText : function(string, x, y, css, color, centered)
	{
		this.ctx.save();
		if(centered)
		{
			this.ctx.textAlign = "center";
			this.ctx.textBaseline="middle"; 
		}
		this.ctx.font = css;
		this.ctx.fillStyle = color; 
		this.ctx.fillText(string, x, y);
		this.ctx.restore();
	},
	
	//Calculate delta-time
	calculateDeltaTime : function()
	{
		var now, fps;
		now = (+new Date); 
		fps = 1000 / (now - this.lastTime);
		fps = clamp(fps, 12, 60);
		this.lastTime = now; 
		return 1/fps;
	},
};