var ColliderRect = function(transform, parent, size)
{
    Collider.call(this, transform, TYPE_COLL.RECT, parent);
    this.size = size;
}

ColliderRect.prototype.draw = function(ctx)
{
    ctx.point(this.transform.pos.x, this.transform.pos.y);
}

//Collision check
ColliderRect.prototype.checkCollision = function(other)
{
    switch(other.type)
    {
        case TYPE_COLL.POINT:
            if(true)
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

