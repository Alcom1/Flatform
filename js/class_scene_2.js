//Scene
var Scene_2 = function()
{
	Scene.call(this);
}

Scene_2.prototype = Object.create(Scene.prototype);

//Init
Scene_2.prototype.init = function()
{
    this.gameObjects.push(new MouseCircle(25));
}

//Scene update
Scene_2.prototype.update = function(dt)
{
    Scene.prototype.update.call(this, dt);
    
    if(keys.isReleased(keys.KEYBOARD.DOWN))
    {
        return 1;
    }
    
    return -1;
}