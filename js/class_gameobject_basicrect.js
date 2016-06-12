//Test rect object
var BasicRect = function(pos)
{
    GameObject.call(this, null);
    
    this.transform.pos = pos;
    this.collider = new ColliderPoint(
        this.transform,
        this);
}

BasicRect.prototype = Object.create(GameObject.prototype);

//Game object draw
BasicRect.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
        ctx.fillStyle="#0FF";
        ctx.fillRect(
            this.transform.pos.x,
            this.transform.pos.y,
            40,
            30);
    ctx.restore();
}