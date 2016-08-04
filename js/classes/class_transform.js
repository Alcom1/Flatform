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
    this.pos.add(new Vect(x, y));
}

Transform.prototype.getMult = function(transform)
{
    var temp = this.copy();
    temp.mat2.mult(transform.mat2);
    temp.pos.add(this.mat2.getMultVect(transform.pos));

    return temp;

    // return new Transform(
    //     this.mat2.a * transform.mat2.a +
    //     this.mat2.b * transform.mat2.c,
        
    //     this.mat2.a * transform.mat2.b +
    //     this.mat2.b * transform.mat2.d,

    //     this.mat2.c * transform.mat2.a +
    //     this.mat2.d * transform.mat2.c,
        
    //     this.mat2.c * transform.mat2.b +
    //     this.mat2.d * transform.mat2.d,
        
    //     this.mat2.a * transform.pos.x +
    //     this.mat2.b * transform.pos.y +
    //     this.pos.x,
        
    //     this.mat2.c * transform.pos.x +
    //     this.mat2.d * transform.pos.y +
    //     this.pos.y);
}