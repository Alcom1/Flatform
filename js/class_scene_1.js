//Scene
var Scene_1 = function()
{
	Scene.call(this);
}

Scene_1.prototype = Object.create(Scene.prototype);

//Init
Scene_1.prototype.init = function()
{
    this.gameObjects.push(new AnimatedRect(new Vect(15, 20, 0)));
    this.gameObjects.push(new BasicCircle(new Vect(260, 280, 0), 20));
    this.gameObjects.push(new BasicCircle(new Vect(360, 220, 0), 20));
    this.gameObjects.push(new BasicCircle(new Vect(420, 320, 0), 20));
}

//Scene update
Scene_1.prototype.update = function(dt)
{
    Scene.prototype.update.call(this, dt);
    
    if(myKeys.keydown[myKeys.KEYBOARD.KEY_DOWN])
    {
        return 0;
    }
    
    return -1;
}