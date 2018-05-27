//ff
var ff = ff || {};

//Module that plays and manages sounds.
ff.managerMouse = (function() {

    var mousePos; //Mouse position.
	
	//Init
	function init()
	{
        mousePos = new Vect(0, 0);
	}
    
    //Update the mouse module.
    function update(e)
    {
        mousePos = getMouse(e);
    }
    
    //Returns the mouse position
    function getPos()
    {
        return mousePos;
    }
	
	//Return
	return {
		init : init,
        update : update,
        getPos : getPos,
    }
    
}());