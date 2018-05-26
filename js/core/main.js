//ff
var ff = ff || {};

//Main object literal
ff.main = (function() {
	var WIDTH = 640, 				// Canvas width
		HEIGHT = 480,				// Canvas height
		canvas = undefined,			// Canvas
		ctx = undefined,			// Canvas context
		lastTime = 0, 				// used by calculateDeltaTime() 
		debug = true,				// debug
		showCol = false,			// show collisions
		animationID = 0,			// ID index of the current frame.
		scene = new Scene(),		// Current scene
		indexS = -1;				// Index of the current scene
		
	//Initialization
	function init()
	{
		//Init log
		console.log("app.main.init() called");
		
		// init canvas
		canvas = document.querySelector('canvas');
		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		ctx = canvas.getContext('2d');
		
		// canvas actions
		canvas.onmousemove = doMousemove.bind(this);

		loadScene();
		
		// start the game loop
		frame();
	};
		
	//Core update
	function frame()
	{
		//LOOP
			animationID = requestAnimationFrame(frame.bind(this));
			
		//Calculate Delta Time of frame
		var dt = calculateDeltaTime();
		
		//Clear
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
		
		//Update
		update(dt);
		
		//Draw
		draw(ctx);

		// draw dt in bottom right corner
		fillText(
			"Use up & down arrow keys to cycle scenes.",
			2,
			HEIGHT - 4,
			"16pt Consolas",
			"white",
			false);
		
		//Draw debug info
		if (debug)
		{
			// draw dt in bottom right corner
			fillText(
				"fps: " + (1 / dt).toFixed(1),
				2,
				16,
				"16pt Consolas",
				"white",
				false);
		}

		//KEYS
		keys.refresh();
	};
		
	//Update logic
	function update(dt)
	{
		scene.update(dt);
		
		ff.managerCollision.update();
		ff.managerSound.update(dt);
	};
		
	//Draw the main scene
	function draw(ctx)
	{
		scene.draw(ctx);
		
		if(showCol)
			ff.managerCollision.draw(ctx);
	};
		
	//Load a scene
	function loadScene()
	{
		scene.deinit();

		var newScene = loadJson("assets/scene_sample_0.json");
		
		scene.init();

		newScene.gameObjects.forEach(function(o) {
			o.params = o.params || {};
			o.params.parent = scene;	//Set scene to be passed in params as parent.
			o.params.children = o.children || [];
			callObject(o.class, o.params);
		});
	};
		
	//Mouse move tracking
	function doMousemove(e)
	{
		ff.managerMouse.update(e);
	};
		
	//Draw filled text
	function fillText(string, x, y, css, color, centered)
	{
		ctx.save();
		if(centered)
		{
			ctx.textAlign = "center";
			ctx.textBaseline="middle"; 
		}
		ctx.font = css;
		ctx.fillStyle = color; 
		ctx.fillText(string, x, y);
		ctx.restore();
	};
		
	//Calculate delta-time
	function calculateDeltaTime()
	{
		var now, fps;
		now = (+new Date); 
		fps = 1000 / (now - lastTime);
		fps = clamp(fps, 12, 60);
		lastTime = now; 
		return 1/fps;
	};

	return {
		init : init
	}
}());

