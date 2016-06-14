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
}

//Scene update
Scene_0.prototype.update = function(dt)
{
    Scene.prototype.update.call(this, dt);
    
    if(myKeys.keydown[myKeys.KEYBOARD.KEY_UP])
    {
        return 1;
    }
    
    return -1;
}