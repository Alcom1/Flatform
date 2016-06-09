//Base game object
var GameObject = function(pos, parent)
{
    this.pos = pos;
    this.parent = parent;
    this.children = [];
}

//Game object update
GameObject.prototype.update = function(dt)
{
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].update(dt);
	}	
}

//Game object draw
GameObject.prototype.draw = function(ctx)
{
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].update(ctx);
	}	
}

//Game object collision
GameObject.prototype.collisionResolve = function(ctx)
{
	
}