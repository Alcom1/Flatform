//Global functions and enumerations

// returns mouse position in local coordinate system of element
function getMouse(e)
{
	var mouse = new Vect(
		e.pageX - e.target.offsetLeft,
		e.pageY - e.target.offsetTop,
		0);
	return mouse;
}

//constrained between min and max (inclusive)
function clamp(val, min, max)
{
	return Math.max(min, Math.min(max, val));
}

//Modified mod for negative numbers.
Number.prototype.mod = function(n)
{
	return ((this % n) + n) % n;
}

//Maps x within range a-b to range c-d
function map(x, a, b, c, d)
{
    return (x - a) / (b - a) * (d - c) + c;
}

//Canvas rounded rectangle.
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r, d)
{
    if (w < 2 * r)
        r = w / 2;
    if (h < 2 * r)
        r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y,     x + w, y + h, r);
    this.arcTo(x + w, y + h,     x, y + h, r);
    this.arcTo(x,     y + h,     x, y,     r);
    this.lineTo(x, y + 10 + d);
    this.lineTo(x - 12, y + 5 + d);
    this.lineTo(x, y + d);
    this.arcTo(x,   y,   x+w, y,   r);
    this.closePath();
    return this;
}

//Canvas point
CanvasRenderingContext2D.prototype.point = function (x, y)
{
    this.save();
    this.fillStyle = this.strokeStyle;
    this.beginPath();
    this.arc(
        x,
        y,
        this.lineWidth / 2,
        0,
        2 * Math.PI, true);
    this.fill();
    this.restore();
}

//Collisions (Point, Rect, Circle, Tri)
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

function collisionPointCircle(point, circle)
{
    return false;
}

function collisionPointTri(point, tri)
{
    return false;
}

function collisionRectRect(rectA, rectB)
{
    return false;
}

function collisionRectCircle(rect, circle)
{
    return false;
}

function collisionRectTri(rect, tri)
{
    return false;
}

function collisionCircleCircle(circleA, circleB)
{
    return false;
}

function collisionCircleTri(circle, tri)
{
    return false;
}

function collisionTriTri(triA, triB)
{
    return false;
}

//Enums
TYPE_ANIM = Object.freeze({
    TRANSLATE: 0,
    SCALE: 1,
    ROTATE: 2});

TYPE_COLL = Object.freeze({
    POINT: 0,
    RECT: 1,
    CIRCLE: 2,
    TRI: 3});