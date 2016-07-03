//Test rect object
var BasicPoint = function(pos)
{
    GameObject.call(this, null);
    
    this.transform.pos = pos;
    this.color = "#FF0";
    this.collider = new ColliderPoint(
        this,
        this.transform,
        2);
}

BasicPoint.prototype = Object.create(GameObject.prototype);

//Game object update
BasicPoint.prototype.update = function(dt, gTrans)
{
    GameObject.prototype.update.call(this, dt);
}

//Game object draw
BasicPoint.prototype.draw = function(ctx)
{
    ctx.save();
        this.transform.setTransform(ctx);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 10;
        ctx.point(0, 0);
    ctx.restore();
    
    GameObject.prototype.draw.call(this, ctx);
}