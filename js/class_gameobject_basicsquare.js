//Test cube object
var BasicSquare = function(pos)
{
    GameObject.call(this, pos, null);
}

BasicSquare.prototype = Object.create(GameObject.prototype);

//Game object draw
BasicSquare.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
    ctx.fillStyle="#FFF";
	ctx.fillRect(
        this.pos.x,
        this.pos.y,
        40,
        30);
    ctx.restore();
}