//Test rect object
var BasicPoint = function(pos)
{
    GameObject.call(this, null);
    
    this.transform.pos = pos;
    this.color = "#FF0";
}

BasicPoint.prototype = Object.create(GameObject.prototype);

//Game object update
BasicPoint.prototype.update = function(dt)
{
    GameObject.prototype.update.call(this);
}

//Game object draw
BasicPoint.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
        ctx.translate(this.transform.pos.x, this.transform.pos.y);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 10;
        ctx.point(0, 0);
    ctx.restore();
}

//Establish colliders for this object.
BasicPoint.prototype.setColliders = function()
{
    this.collider = new ColliderPoint(
        this.transform,
        this);
}

//Remove colliders from the collision manager
BasicPoint.prototype.removeColliders = function()
{
    this.collider.remove();
}