var transform = function(a, b, c, d, x, y)
{
    this.mat2 = new mat2(a, b, c, d);
    this.trans = new vect(x, y);
}