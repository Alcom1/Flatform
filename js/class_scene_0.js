//Scene
var Scene_0 = function()
{
	Scene.call(this);
    
    this.gameObjects.push(new BasicRect(new Vect(100, 100, 0)));
    this.gameObjects.push(new BasicRect(new Vect(100, 200, 0)));
    this.gameObjects.push(new BasicRect(new Vect(200, 100, 0)));
    this.gameObjects.push(new BasicRect(new Vect(200, 200, 0)));
    this.gameObjects.push(new AnimatedRect(new Vect(320, 240, 0)));
}

Scene_0.prototype = Object.create(Scene.prototype);