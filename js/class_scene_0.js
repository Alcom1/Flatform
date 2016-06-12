//Scene
var Scene_0 = function()
{
	Scene.call(this);
    
    this.gameObjects.push(new BasicRect(new Vect(160, 100, 0)));
    this.gameObjects.push(new BasicRect(new Vect(160, 200, 0)));
    this.gameObjects.push(new BasicRect(new Vect(260, 100, 0)));
    this.gameObjects.push(new BasicRect(new Vect(260, 200, 0)));
    this.gameObjects.push(new AnimatedRect(new Vect(320, 240, 0)));
}

Scene_0.prototype = Object.create(Scene.prototype);