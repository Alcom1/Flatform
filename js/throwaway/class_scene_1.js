//Scene
var Scene_1 = function() {

	Scene.call(this);
}

Scene_1.prototype = Object.create(Scene.prototype);

//Init
Scene_1.prototype.init = function() {

    new MouseCircle(this, 25);
    new BasicCircle(this, new Vect(260, 280), 20);
    new BasicCircle(this, new Vect(360, 220), 20);
    new BasicCircle(this, new Vect(420, 320), 20);
    new BasicPoint(this, new Vect(220, 120));
}

//Scene update
Scene_1.prototype.update = function(dt) {

    Scene.prototype.update.call(this, dt);
    
    if(keys.isReleased(keys.KEYBOARD.DOWN)) {

        return 0;
    }
    
    else if(keys.isReleased(keys.KEYBOARD.UP)) {
        
        return 2;
    }
    
    return -1;
}