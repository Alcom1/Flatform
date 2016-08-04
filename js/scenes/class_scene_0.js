//Scene
var Scene_0 = function()
{
	Scene.call(this);
}

Scene_0.prototype = Object.create(Scene.prototype);

//Init
Scene_0.prototype.init = function()
{
    this.preloader["anim"] = loadJson("assets/animation_sample_2.json");
    this.preloader["anim2"] = loadJson("assets/animation_sample_3.json");

    new MouseCircle(this, 25);
    this.gameObjects[0].children.push(
        new AnimatedRect(
            this.gameObjects[0],
            new Vect(20, 20),
            "#0FF",
            this.preloader["anim"]));
    this.gameObjects[0].children.push(
        new AnimatedRect(
            this.gameObjects[0],
            new Vect(20, 20),
            "#0FF",
            this.preloader["anim2"]));
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