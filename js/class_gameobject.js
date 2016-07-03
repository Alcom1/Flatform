//Base game object
var GameObject = function(parent)
{
	this.lTrans = new Transform(1, 0, 0, 1, 0, 0);
	this.gTrans = new Transform(1, 0, 0, 1, 0, 0); 
    this.parent = parent;
    this.children = [];
}

//Game object update
GameObject.prototype.update = function(dt, gTrans)
{
    this.gTrans = gTrans.getMult(this.lTrans);
	
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].update(dt, this.gTrans);
	}	
}

//Game object draw
GameObject.prototype.draw = function(ctx)
{
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].draw(ctx);
	}	
}

//Game object collision
GameObject.prototype.collide = function(other, pos)
{
	
}