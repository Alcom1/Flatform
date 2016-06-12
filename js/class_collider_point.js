var ColliderPoint = function(transform, parent)
{
    Collider.call(this, transform, TYPE_COLL.POINT, parent);
}

ColliderPoint.prototype = Object.create(Collider.prototype);

ColliderPoint.prototype.draw = function(ctx)
{
    ctx.save();
        ctx.translate(this.transform.pos.x, this.transform.pos.y);
        
        ctx.strokeStyle="#FFFF00";
        ctx.lineWidth = 10;
        ctx.point(0, 0);
    ctx.restore();
}

//Collision check
ColliderPoint.prototype.checkCollision = function(other)
{
    switch(other.type)
    {
        case TYPE_COLL.POINT:
            if(false)
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