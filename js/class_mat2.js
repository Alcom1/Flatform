var mat2 = function(a, b, c, d)
{
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

mat2.prototype.mult = function(mat2)
{
    var a = this.a * other.a + this.b * other.c;
    var b = this.a * other.b + this.b * other.d;
    var c = this.c * other.a + this.d * other.c;
    var d = this.c * other.b + this.d * other.d;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

mat2.prototype.getMult = function(mat2)
{
    return mat2(
        this.a * other.a + this.b * other.c,
        this.a * other.b + this.b * other.d,
        this.c * other.a + this.d * other.c,
        this.c * other.b + this.d * other.d);
}

mat2.prototype.getMultVect = function(vect)
{
    return vect(
        this.a * vect.x + this.b * vect.y,
        this.c * vect.x + this.d * vect.y);
}

mat2.prototype.scale = function(vect)
{
    var temp = mat2(
        vect.x,
        0,
        0,
        vect.y);
    this.mult(temp);
}

mat2.prototype.rotate = function(angle)
{
    var temp = mat2(
        cos(angle),
       -sin(angle),
        sin(angle),
        cos(angle));
    this.mult(temp);
}