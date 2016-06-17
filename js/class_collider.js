var Collider = function(parent, transform, type, mask)
{
    this.transform = transform;
    this.type = type;
    this.mask = mask;
    this.parent = parent;
    game.managerCollision.add(this);
}

Collider.prototype.update = function()
{
    this.transform = this.parent.transform;
}

Collider.prototype.draw = function(ctx)
{
    ctx.point(this.transform.pos.x, this.transform.pos.y);
}

//Collision check
Collider.prototype.checkCollision = function(other)
{

}

//Remove
Collider.prototype.remove = function()
{
    game.managerCollision.remove(this);
}
