//Scene
var Scene_1 = function()
{
	Scene.call(this);
    
    this.gameObjects.push(new AnimatedRect());
    this.gameObjects.push(new BasicPoint(new Vect(260, 280, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(360, 220, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(420, 320, 0)));
}

Scene_1.prototype = Object.create(Scene.prototype);