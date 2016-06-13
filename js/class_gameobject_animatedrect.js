//Test animated rect object
var AnimatedRect = function()
{
    GameObject.call(this, null);
    this.size = new Vect(15, 60, 0);
    this.animation = new Animation();
    this.collider = new ColliderRect(
        this.transform,
        this,
        this.size);
    this.color = "#888";
}

AnimatedRect.prototype = Object.create(GameObject.prototype);

//Game object update
AnimatedRect.prototype.update = function(dt)
{
    GameObject.prototype.update.call(this);
    
    this.transform = this.animation.transform();
    this.animation.update(dt);
    this.color = "#888";
}

//Game object draw
AnimatedRect.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    //Rect
    ctx.save();
        this.transform.setTransform(ctx);
        
        //Draw rect
        ctx.fillStyle = this.color;
        ctx.fillRect(
            -this.size.x,
            -this.size.y,
             this.size.x * 2,
             this.size.y * 2);
    ctx.restore();
}

//Game object collision
GameObject.prototype.collide = function(other, pos)
{
    this.color = "#F00";
}