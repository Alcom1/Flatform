//Test rect object
var BasicRect = function(pos)
{
    GameObject.call(this, null);
    
    this.transform.pos = pos;
}

BasicRect.prototype = Object.create(GameObject.prototype);

//Game object draw
BasicRect.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
        ctx.fillStyle="#FFF";
        ctx.fillRect(
            this.transform.pos.x,
            this.transform.pos.y,
            40,
            30);
    ctx.restore();
}