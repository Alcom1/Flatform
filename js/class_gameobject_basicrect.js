//Test rect object
var BasicRect = function(pos)
{
    GameObject.call(this, null);
    
    this.transform.pos = pos;
}

BasicRect.prototype = Object.create(GameObject.prototype);

//Establish colliders for this object.
BasicRect.prototype.setColliders = function()
{
    this.collider = new ColliderPoint(
        this.transform,
        this);
}

//Game object update
BasicRect.prototype.update = function(dt)
{
    GameObject.prototype.update.call(this);
}

//Game object draw
BasicRect.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
        ctx.translate(this.transform.pos.x, this.transform.pos.y);
        
        ctx.fillStyle = "#0BF";
        ctx.fillRect(
            -20,
            -15,
            40,
            30);
    ctx.restore();
}

//Establish colliders for this object.
BasicRect.prototype.setColliders = function()
{
    this.collider = new ColliderPoint(
        this.transform,
        this);
}

//Remove colliders from the collision manager
BasicRect.prototype.removeColliders = function()
{
    this.collider.remove();
}