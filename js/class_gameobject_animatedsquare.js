//Test animated square object
var AnimatedSquare = function(pos)
{
    GameObject.call(this, pos, null);
    this.animation = new Animation();
}

AnimatedSquare.prototype = Object.create(GameObject.prototype);

//Game object update
AnimatedSquare.prototype.update = function(dt)
{
    GameObject.prototype.update.call(this);
    
    this.animation.update(dt);
}

//Game object draw
AnimatedSquare.prototype.draw = function(ctx)
{
    GameObject.prototype.draw.call(this);
    
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    this.animation.transform(ctx);
    
    ctx.fillStyle="#FFF";
	ctx.fillRect(
        0,
        0,
        40,
        30);
    ctx.restore();
    
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    
    ctx.fillStyle="#F00";
	ctx.fillRect(
        -4,
        -4,
        8,
        8);
    ctx.restore();
}