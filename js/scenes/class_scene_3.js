//Scene
var Scene_3 = function()
{
	Scene.call(this);
}

Scene_3.prototype = Object.create(Scene.prototype);

//Init
Scene_3.prototype.init = function()
{
    new MouseCircle(this, 5);
    new StretchRect(this, new Vect(320, 240));
    
}

//Scene update
Scene_3.prototype.update = function(dt)
{
    Scene.prototype.update.call(this, dt);
    
    if(keys.isReleased(keys.KEYBOARD.DOWN))
    {
        return 2;
    }
    
    return -1;
}