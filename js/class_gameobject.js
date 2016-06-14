//Base game object
var GameObject = function(parent)
{
	this.transform = new Transform(1, 0, 0, 1, 0, 0);
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

//Establish colliders
GameObject.prototype.setColliders = function()
{
	
}

//Remove colliders from the collision manager
GameObject.prototype.removeColliders = function()
{
	
}

//Game object collision
GameObject.prototype.collide = function(other, pos)
{
	
}