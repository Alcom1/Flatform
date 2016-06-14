//Game object literal
var game = game || {};

//Module that plays and manages sounds.
game.managerCollision = (function()
{
    var colliders;	//Array of colliders
    
	//Init
	function init()
	{
		colliders = [];
	}
	
	//Update
	function update()
	{
		console.log(colliders.length);
		for(var j = 0; j < colliders.length; j++)
		{
			colliders[j].update();
			
			for(i = 0; i < j; i++)
			{
				colliders[j].checkCollision(colliders[i]);
			}
		}
	}
	
	//Draw
	function draw(ctx)
	{
		for(i = 0; i < colliders.length; i++)
		{
			colliders[i].draw(ctx);
		}
	}
	
	//
	function collisionPointRect(point, rect)
	{
		var inverseMat2 = rect.transform.mat2.getInverse();
		var pointRel = inverseMat2.getMultVect(point.transform.pos.getSub(rect.transform.pos));
		
		if(
			Math.abs(pointRel.x) < rect.size.x &&
			Math.abs(pointRel.y) < rect.size.y)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	//
	function add(collider)
	{
		colliders.push(collider);
	}
	
	//
	function remove(target)
	{
		for(i = 0; i < colliders.length; i++)
		{
			if(colliders[i] == target)
			{
				colliders.splice(i, 1);
				break;
			}
		}
	}
    
	//
	function clear()
	{
		colliders = [];
	}
	
	//Return
	return {
		init : init,
		update : update,
		draw : draw,
		collisionPointRect : collisionPointRect,
		add : add,
		remove : remove,
		clear : clear
	}
}());