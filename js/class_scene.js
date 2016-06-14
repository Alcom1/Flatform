//Scene
var Scene = function()
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
	
	return -1;
}

//Scene draw
Scene.prototype.draw = function(ctx)
{
	for(var i = 0; i < this.gameObjects.length; i++)
	{
		this.gameObjects[i].draw(ctx);
	}	
}