//Scene
var Scene_0 = function()
{
	Scene.call(this);
    
    this.gameObjects.push(new BasicRect(new Vect(200, 120, 0)));
    this.gameObjects.push(new BasicRect(new Vect(250, 220, 0)));
    this.gameObjects.push(new BasicRect(new Vect(350, 120, 0)));
    this.gameObjects.push(new AnimatedRect());
}

Scene_0.prototype = Object.create(Scene.prototype);