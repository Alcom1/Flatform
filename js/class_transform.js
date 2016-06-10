var Transform = function(a, b, c, d, x, y)
{
    this.mat2 = new Mat2(a, b, c, d);
    this.trans = new Vect(x, y, 0);
}

Transform.prototype.setTransform = function(ctx)
{
    ctx.transform(
        this.mat2.a,
        this.mat2.b,
        this.mat2.c,
        this.mat2.d,
        this.trans.x,
        this.trans.y);
}

Transform.prototype.scale = function(x, y)
{
    var temp = this.mat2.scale(x, y);
    this.trans = temp.getMultVect(this.trans);
}

Transform.prototype.rotate = function(angle)
{
    var temp = this.mat2.rotate(angle);
    this.trans = temp.getMultVect(this.trans);
    this.trans.x *= -1;
}

Transform.prototype.translate = function(x, y)
{
    this.trans.add(new Vect(x, y, 0));
}