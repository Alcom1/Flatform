//Scene
var Scene_0 = function()
{
	Scene.call(this);
}

Scene_0.prototype = Object.create(Scene.prototype);

//Init
Scene_0.prototype.init = function()
{
    new MouseCircle(this, 25);
    this.gameObjectsAll[0].children.push(
        new AnimatedRect(
            this.gameObjectsAll[0],
            new Vect(15, 20, 0),
            "assets/animation_sample_2.json"));
}

//Scene update
Scene_0.prototype.update = function(dt)
{
    Scene.prototype.update.call(this, dt);
    
    if(keys.isReleased(keys.KEYBOARD.UP))
    {
        return 1;
    }
    
    return -1;
}