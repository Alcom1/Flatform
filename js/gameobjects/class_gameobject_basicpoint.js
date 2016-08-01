//Test rect object
var BasicPoint = function(parent, pos)
{
    GameObject.call(this, parent);
    
    this.lTrans.pos = pos;
    this.color = "#FF0";
    this.collider = new ColliderPoint(
        this,
        this.gTrans,
        2);
}

BasicPoint.prototype = Object.create(GameObject.prototype);

//Game object update
BasicPoint.prototype.update = function(dt, gTrans)
{
    GameObject.prototype.update.call(this, dt, gTrans);
}

//Game object draw
BasicPoint.prototype.draw = function(ctx)
{
    ctx.save();
        ctx.setTransformG(this.gTrans);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 10;
        ctx.point(0, 0);
    ctx.restore();
    
    GameObject.prototype.draw.call(this, ctx);
}