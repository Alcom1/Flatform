//Test rect object
var MouseCircle = function(parent, radius)
{
    GameObject.call(this, parent);
    
    this.radius = radius;
    this.color = "#FB0"
    this.zIndex = 10;
    this.collider = new ColliderCircle(
        this,
        this.gTrans,
        1,
        this.radius);
}

MouseCircle.prototype = Object.create(GameObject.prototype);

//Game object update
MouseCircle.prototype.update = function(dt, gTrans)
{
    this.lTrans.pos = game.managerMouse.getPos();
    
    this.color = "#FB0";
    
    GameObject.prototype.update.call(this, dt, gTrans);
}

//Game object draw
MouseCircle.prototype.draw = function(ctx)
{
    ctx.save();
        ctx.setTransformG(this.gTrans);
        
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
    
    GameObject.prototype.draw.call(this, ctx);
}

//Game object collision
MouseCircle.prototype.collide = function(other, pos)
{
    this.color = "#FFF";
}