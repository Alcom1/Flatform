//Scene
var Scene = function()
{
	this.gameObjects = [];
	this.transform = new Transform(1, 0, 0, 1, 0, 0);
}

//Init
Scene.prototype.init = function()
{

}

//Deinit
Scene.prototype.deinit = function()
{
	this.clear();
}

//Clear
Scene.prototype.clear = function()
{
	this.gameObjects = [];	
}

//Scene update
Scene.prototype.update = function(dt)
{
	for(var i = 0; i < this.gameObjects.length; i++)
	{
		this.gameObjects[i].update(dt, this.transform);
	}
}

//Scene draw
Scene.prototype.draw = function(ctx)
{
	var arr = [];
	
	for(var i = 0; i < this.gameObjects.length; i++)
	{
		arr = arr.concat(this.gameObjects[i].stack());
	}
	
	arr.sort(
		function(a, b)
		{
			if(a.zIndex == b.zIndex)
				return 0;
			
			return a.zIndex > b.zIndex;
		});
	
	for(var i = 0; i < arr.length; i++)
	{
		arr[i].draw(ctx);
	}
}