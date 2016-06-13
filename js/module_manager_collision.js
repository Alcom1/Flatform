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
		var ctx = game.main.ctx;
		
		var inverseMat2 = rect.transform.mat2.getInverse();
		var pointRel = inverseMat2.getMultVect(point.transform.pos.getSub(rect.transform.pos));
		
		var kek = rect.transform.mat2.getMultVect(pointRel);
		
		console.log(rect.size.y);
		
		var ctx = game.main.ctx;
		
		ctx.save();
			ctx.translate(rect.transform.pos.x, rect.transform.pos.y);
			ctx.strokeStyle = "#00F";
			ctx.lineWidth = 5;
			
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(kek.x, 0);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(0, kek.y);
			ctx.stroke();
		ctx.restore();
		
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