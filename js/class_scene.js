//Scene
var Scene = function()
{
	this.gameObjects = [];
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
		this.gameObjects[i].update(dt);
	}
}

//Scene draw
Scene.prototype.draw = function(ctx)
{
	for(var i = 0; i < this.gameObjects.length; i++)
	{
		this.gameObjects[i].draw(ctx);
	}	
}