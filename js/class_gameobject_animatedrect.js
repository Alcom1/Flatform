//Test animated rect object
var AnimatedRect = function(pos)
{
    GameObject.call(this, null);
    this.animation = new Animation();
    this.collider = new ColliderRect(
        this.transform,
        this,
        new Vect(40, 30, 0));
}

AnimatedRect.prototype = Object.create(GameObject.prototype);

//Game object update
AnimatedRect.prototype.update = function(dt)
{
    GameObject.prototype.update.call(this);
    
    this.transform = this.animation.transform();
    this.animation.update(dt);
}

//Game object draw
AnimatedRect.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    //Rect
    ctx.save();
        this.transform.setTransform(ctx);
        
        //Draw rect
        ctx.fillStyle="#FFF";
        ctx.fillRect(
            -20,
            -15,
            40,
            30);
    ctx.restore();
        
    //Dot
    ctx.save();
        ctx.translate(this.transform.pos.x, this.transform.pos.y);
        
        ctx.strokeStyle="#FF0000";
        ctx.lineWidth = 10;
        ctx.point(0, 0);
    ctx.restore();
}

//Game object collision
GameObject.prototype.collide = function(other, pos)
{

}