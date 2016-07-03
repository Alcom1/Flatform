//Scene
var Scene_2 = function()
{
	Scene.call(this);
}

Scene_2.prototype = Object.create(Scene.prototype);

//Init
Scene_2.prototype.init = function()
{
    this.gameObjects.push(
        new AnimatedRect(
            new Vect(15, 20, 0),
            "assets/animation_sample.json"));
    this.gameObjects.push(new BasicPoint(new Vect(420, 280, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(260, 220, 0)));
    this.gameObjects.push(new BasicPoint(new Vect(360, 320, 0)));
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