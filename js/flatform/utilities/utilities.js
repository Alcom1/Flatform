// returns mouse position in local coordinate system of element
function getMouse(e) {

	var mouse = new Vect(
		e.pageX - e.target.offsetLeft,
		e.pageY - e.target.offsetTop,
		0);
	return mouse;
}

//XMLHttpRequest methods
function loadJson(fileName) {

    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', fileName, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

//Instantiate object by name and args.
function callObject(name, args) {

    var what = new window[name](args);
}