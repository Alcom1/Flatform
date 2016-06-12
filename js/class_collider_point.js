var ColliderPoint = function(transform, parent)
{
    Collider.call(this, transform, TYPE_COLL.POINT, parent);
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