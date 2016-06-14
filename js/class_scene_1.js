//Scene
var Scene_1 = function()
{
	Scene.call(this);
}

Scene_1.prototype = Object.create(Scene.prototype);

//Init
Scene_1.prototype.init = function()
{
    this.gameObjects.push(new AnimatedRect());
    this.gameObjects.push(new BasicPoint(new Vect(260, 280, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(360, 220, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(420, 320, 0)));
    
    for(var i = 0; i < this.gameObjects.length; i++)
	{
		this.gameObjects[i].setColliders();
	}
}