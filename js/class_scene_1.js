//Scene
var Scene_1 = function()
{
	Scene.call(this);
}

Scene_1.prototype = Object.create(Scene.prototype);

//Init
Scene_1.prototype.init = function()
{
    this.gameObjects.push(new MouseCircle(25));
    this.gameObjects.push(new BasicCircle(new Vect(260, 280, 0), 20));
    this.gameObjects.push(new BasicCircle(new Vect(360, 220, 0), 20));
    this.gameObjects.push(new BasicCircle(new Vect(420, 320, 0), 20));
    this.gameObjects.push(new BasicPoint(new Vect(220, 120, 0)));
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