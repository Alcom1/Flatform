//Test rect object
var BasicCircle = function(pos, radius)
{
    GameObject.call(this, null);
    
    this.transform.pos = pos;
    this.radius = radius;
    this.color = "#0BF"
    this.collider = new ColliderCircle(
        this.transform,
        this,
        this.radius);
}

BasicCircle.prototype = Object.create(GameObject.prototype);

//Game object update
BasicCircle.prototype.update = function(dt)
{
    GameObject.prototype.update.call(this);
    
    this.color = "#0BF";
}

//Game object draw
BasicCircle.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
        this.transform.setTransform(ctx);
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            0,
            0,
            this.radius,
            0,
            2 * Math.PI, true);
        ctx.fill();
    ctx.restore();
}

//Game object collision
BasicCircle.prototype.collide = function(other, pos)
{
    this.color = "#FFF";
}