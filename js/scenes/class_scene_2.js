//Scene
var Scene_2 = function() {

	Scene.call(this);
}

Scene_2.prototype = Object.create(Scene.prototype);

//Init
Scene_2.prototype.init = function() {

    this.preloader["anim"] = loadJson("assets/animation_sample.json");

    new AnimatedRect(
        this,
        new Vect(15, 20),
        "#888",
        this.preloader["anim"]);
    new BasicPoint(this, new Vect(420, 280));
    new BasicPoint(this, new Vect(260, 220));
    new BasicPoint(this, new Vect(360, 320));
}

//Scene update
Scene_2.prototype.update = function(dt) {

    Scene.prototype.update.call(this, dt);
    
    Scene.prototype.update.call(this, dt);
    
    if(keys.isReleased(keys.KEYBOARD.DOWN)) {

        return 1;
    }
    
    else if(keys.isReleased(keys.KEYBOARD.UP)) {
        
        return 3;
    }
    
    return -1;
}