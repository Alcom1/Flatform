var Transform = function(a, b, c, d, x, y)
{
    this.mat2 = new Mat2(a, b, c, d);
    this.pos = new Vect(x, y, 0);
}

Transform.prototype.copy = function()
{
    return new Transform(
        this.mat2.a,
        this.mat2.b,
        this.mat2.c,
        this.mat2.d,
        this.pos.x,
        this.pos.y);
}

Transform.prototype.scale = function(x, y)
{
    var temp = this.mat2.scale(x, y);
    this.pos = temp.getMultVect(this.pos);
}

Transform.prototype.rotate = function(angle)
{
    var temp = this.mat2.rotate(angle);
    this.pos = temp.getMultVect(this.pos);
}

Transform.prototype.translate = function(x, y)
{
    this.pos.add(new Vect(x, y, 0));
}

Transform.prototype.getMult = function(transform)
{
    var temp = this.copy();
    temp.mat2.mult(transform.mat2);
    temp.pos.add(transform.pos);
    return temp;
}