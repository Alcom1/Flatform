//Scene
var Scene_0 = function()
{
	Scene.call(this);
}

Scene_0.prototype = Object.create(Scene.prototype);

//Init
Scene_0.prototype.init = function()
{
    this.gameObjects.push(new AnimatedRect());
    this.gameObjects.push(new BasicPoint(new Vect(420, 280, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(260, 220, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(360, 320, 0)));
    
    for(var i = 0; i < this.gameObjects.length; i++)
	{
		this.gameObjects[i].setColliders();
	}
}

//Deinit
Scene_0.prototype.deinit = function()
{
    for(var i = 0; i < this.gameObjects.length; i++)
	{
		this.gameObjects[i].removeColliders();
	}
    
    this.clear();
}
