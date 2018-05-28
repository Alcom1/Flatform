# Flatform

A Framework for developing games using HTML5 Canvas

## Completed Features

Ineritance and loading of Scenes

Ineritance and loading of Game Objects

Game Object updating and drawing

Vector, Matrix, and Transform libraries

Animation library using keyframes

Circle-Circle and Point-Rectangle collision detection

Mouse and Keyboard Input handling

## Completed & Untested Features

Sound playback

## Incomplete Features

Advanced collision detection

## Planned Features

Collision Resolution

Rigid Body Physics

# Use

### Game Object Boilerplate

```javascript
var NewGameObject = function(args) {

    GameObject.call(this, args);
}

NewGameObject.prototype = Object.create(GameObject.prototype);
```

### Creating a moving square

```javascript
var MovingSquare = function(args) {

    GameObject.call(this, args);

    this.lTrans.pos = new Vect(args.position.x, args.position.y);
    this.size = args.size;
    this.speed = args.speed;
}

MovingSquare.prototype = Object.create(GameObject.prototype);

MovingSquare.prototype.update = function(dt, gTrans) {

    this.lTrans.pos.x += this.speed * dt;
    
    GameObject.prototype.update.call(this, dt, gTrans);
}

MovingSquare.prototype.draw = function(ctx) {

    ctx.save();
        ctx.setTransformG(this.gTrans);
        
        ctx.fillStyle = "white";
        ctx.fillRect(
            -this.size,
            -this.size,
            this.size * 2,
            this.size * 2);
    ctx.restore();

    GameObject.prototype.draw.call(this, ctx);
}
```

### Creating a scene with multiple white squares

```json
{
    "gameObjects" : [
        {
            "name" : "MovingSquare",
            "params" : 
            {
                "position" : { "x" : 40, "y" : 30 },
                "size" : 20,
                "speed" : 50
            }
        },
        {
            "name" : "MovingSquare",
            "params" : 
            {
                "position" : { "x" : 100, "y" : 120 },
                "size" : 60,
                "speed" : 25
            }
        },
        {
            "name" : "MovingSquare",
            "params" : 
            {
                "position" : { "x" : 200, "y" : 320 },
                "size" : 120,
                "speed" : 10
            }
        }
    ]
}
```

### Loading a scene

#### Starting the game with a scene and canvas element

```javascript
ff.main.init(
    document.querySelector('canvas'),
    "assets/scene_1.json");
```

#### loading a scene from a game object

```javascript
NewGameObject.prototype.update = function(dt, gTrans) {

    if(keys.isReleased(keys.KEYBOARD.UP)) {
        
        this.parent.loadScene("assets/scene_2.json");
    }

    GameObject.prototype.update.call(this, dt, gTrans);
}
```