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
	reset : true,
	animationID : 0,			//ID index of the current frame.
	
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
		this.ctx.mozImageSmoothingEnabled = false;
		this.ctx.msImageSmoothingEnabled = false;
		this.ctx.imageSmoothingEnabled = false;
		
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
		game.scene_0.update(dt);
		game.managerCollision.update();
	},
	
	//Draw the main scene
	draw : function(ctx)
	{
		game.scene_0.draw(ctx);
		//game.managerCollision.draw(ctx);
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