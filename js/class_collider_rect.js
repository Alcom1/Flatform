var ColliderRect = function(transform, parent, size)
{
    Collider.call(this, transform, TYPE_COLL.RECT, parent);
    this.size = size;
}

ColliderRect.prototype = Object.create(Collider.prototype);

ColliderRect.prototype.draw = function(ctx)
{
    ctx.save();
        this.transform.setTransform(ctx);
        
        ctx.strokeStyle="#FFFF00";
        ctx.lineWidth = 5;
        ctx.strokeRect(
            -this.size.x,
            -this.size.y,
            this.size.x * 2,
            this.size.y * 2);
    ctx.restore();
}

//Collision check
ColliderRect.prototype.checkCollision = function(other)
{
    switch(other.type)
    {
        case TYPE_COLL.POINT:
            if(game.managerCollision.collisionPointRect(other, this))
            {
                this.parent.collide(other, new Vect(0, 0, 0));
                other.parent.collide(this, new Vect(0, 0, 0));
            }
            break;
        case TYPE_COLL.RECT:
            if(false)
            {
                this.parent.collide(other, new Vect(0, 0, 0));
                other.parent.collide(this, new Vect(0, 0, 0));
            }
            break;
        case TYPE_COLL.CIRCLE:
            if(false)
            {
                this.parent.collide(other, new Vect(0, 0, 0));
                other.parent.collide(this, new Vect(0, 0, 0));
            }
            break;
        case TYPE_COLL.TRI:
            if(false)
            {
                this.parent.collide(other, new Vect(0, 0, 0));
                other.parent.collide(this, new Vect(0, 0, 0));
            }
            break;
    }    
}

