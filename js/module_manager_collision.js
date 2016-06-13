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
		var smek = point.transform.pos.getSub(rect.transform.pos);
		var inverseMat2 = rect.transform.mat2.getInverse();
		var pointRel = inverseMat2.getMultVect(smek);
		
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
		clear : clear
	}
}());