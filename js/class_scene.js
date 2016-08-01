//Scene
var Scene = function()
{
	this.gameObjects = [];
	this.transform = new Transform(1, 0, 0, 1, 0, 0);
	this.gameObjectsAll = []
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

//
Scene.prototype.pushGO = function(gameObject)
{
	this.gameObjectsAll.push(gameObject);
	
	this.gameObjectsAll.sort(
		function(a, b)
		{
			if(a.zIndex == b.zIndex)
				return 0;
			
			return a.zIndex > b.zIndex;
		});
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
	for(var i = 0; i < this.gameObjectsAll.length; i++)
	{
		this.gameObjectsAll[i].draw(ctx);
	}
}