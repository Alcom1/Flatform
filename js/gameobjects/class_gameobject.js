//Base game object
var GameObject = function(args)
{
	this.lTrans = new Transform(1, 0, 0, 1, 0, 0);
	this.gTrans = new Transform(1, 0, 0, 1, 0, 0);
	this.zIndex = 0;
    this.parent = args.parent;
	this.parent.pushGO(this);
	this.children = [];

	self = this;
	args.children = args.children || [];
	args.children.forEach(function(o) {
		o.params = o.params || {};
		o.params.parent = self;
		o.params.children = o.children || [];
		callObject(o.class, o.params);
	});
}

//Game object update
GameObject.prototype.update = function(dt, gTrans)
{
	gTrans = this.parent.gTrans;

    this.gTrans = gTrans.getMult(this.lTrans);
}

//Game object draw
GameObject.prototype.draw = function(ctx)
{
	
}

//
GameObject.prototype.stack = function()
{
	arr = [this];
	
	for(var i = 0; i < this.children.length; i++)
	{
		arr = arr.concat(this.children[i].stack());
	}
	return arr;
}

//
GameObject.prototype.pushGO = function(gameObject)
{
	this.parent.pushGO(gameObject);
}

//Game object collision
GameObject.prototype.collide = function(other, pos)
{
	
}

