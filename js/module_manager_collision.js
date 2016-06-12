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
			for(i = 0; i < j; i++)
			{
				colliders[j].checkCollision(colliders[i]);
			}
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
		add : add,
		clear : clear
	}
}());