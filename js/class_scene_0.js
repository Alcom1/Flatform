//Scene
var Scene_0 = function()
{
	Scene.call(this);
    
    this.gameObjects.push(new AnimatedRect());
    this.gameObjects.push(new BasicPoint(new Vect(420, 280, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(260, 220, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(360, 320, 0)));
}

Scene_0.prototype = Object.create(Scene.prototype);