//Test rect object
var MouseCircle = function(radius)
{
    GameObject.call(this, null);
    
    this.radius = radius;
    this.color = "#FB0"
    this.collider = new ColliderPoint(
        this.transform,
        this);
}

MouseCircle.prototype = Object.create(GameObject.prototype);

//Game object update
MouseCircle.prototype.update = function(dt)
{
    GameObject.prototype.update.call(this);
    this.transform.pos = game.managerMouse.getPos();
}

//Game object draw
MouseCircle.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
        this.transform.setTransform(ctx);
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            0,
            0,
            this.radius,
            0,
            2 * Math.PI, true);
        ctx.fill();
    ctx.restore();
}