//Test animated rect object
var AnimatedRect = function(size, filename)
{
    GameObject.call(this, null);
    
    this.animation = new Animation(filename);
    this.size = size;
    this.color = "#888";
    this.collider = new ColliderRect(
        this,
        this.gTrans,
        2,
        this.size);
}

AnimatedRect.prototype = Object.create(GameObject.prototype);

//Game object update
AnimatedRect.prototype.update = function(dt, gTrans)
{
    this.lTrans = this.animation.transform();
    this.gTrans = gTrans.getMult(this.lTrans);
    this.animation.update(dt);
    this.color = "#888";
    
    GameObject.prototype.update.call(this, dt);
}

//Game object draw
AnimatedRect.prototype.draw = function(ctx)
{
    
    //Rect
    ctx.save();
        ctx.setTransformG(this.gTrans);
        
        //Draw rect
        ctx.fillStyle = this.color;
        ctx.fillRect(
            -this.size.x,
            -this.size.y,
             this.size.x * 2,
             this.size.y * 2);
    ctx.restore();
    
    GameObject.prototype.draw.call(this, ctx);
}

//Game object collision
AnimatedRect.prototype.collide = function(other, pos)
{
    this.color = "#F00";
}