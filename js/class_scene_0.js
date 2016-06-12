//Scene
var Scene_0 = function()
{
	Scene.call(this);
    
    this.gameObjects.push(new BasicRect(new Vect(160, 120, 0)));
    this.gameObjects.push(new BasicRect(new Vect(160, 220, 0)));
    this.gameObjects.push(new BasicRect(new Vect(260, 120, 0)));
    this.gameObjects.push(new BasicRect(new Vect(260, 220, 0)));
    this.gameObjects.push(new AnimatedRect(new Vect(320, 240, 0)));
}

Scene_0.prototype = Object.create(Scene.prototype);