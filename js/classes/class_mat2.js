var Mat2 = function(a, b, c, d)
{
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Mat2.prototype.mult = function(Mat2)
{
    var a = this.a * Mat2.a + this.b * Mat2.c;
    var b = this.a * Mat2.b + this.b * Mat2.d;
    var c = this.c * Mat2.a + this.d * Mat2.c;
    var d = this.c * Mat2.b + this.d * Mat2.d;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Mat2.prototype.getMult = function(mat2)
{
    return new Mat2(
        this.a * mat2.a + this.b * mat2.c,
        this.a * mat2.b + this.b * mat2.d,
        this.c * mat2.a + this.d * mat2.c,
        this.c * mat2.b + this.d * mat2.d);
}

Mat2.prototype.getMultVect = function(vect)
{
    return new Vect(
        this.a * vect.x + this.b * vect.y,
        this.c * vect.x + this.d * vect.y,
        0);
}

Mat2.prototype.getInverse = function()
{
    var invdet = 1 / (this.a * this.d - this.b * this.c);
    return new Mat2(
        invdet *  this.d,
        invdet * -this.b,
        invdet * -this.c,
        invdet *  this.a);
}

Mat2.prototype.scale = function(x, y)
{
    var temp = new Mat2(
        x,
        0,
        0,
        y);
    this.mult(temp);
    return temp;
}

Mat2.prototype.rotate = function(angle)
{
    var temp = new Mat2(
        Math.cos(angle),
       -Math.sin(angle),
        Math.sin(angle),
        Math.cos(angle));
    this.mult(temp);
    return temp;
}