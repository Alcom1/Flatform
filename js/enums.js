//Game object literal
var game = game || {};

game.TYPE_ANIM = Object.freeze({
    TRANSLATE: 0,
    SCALE: 1,
    ROTATE: 2});
    
game.TYPE_COLL = Object.freeze({
    POINT: 0,
    RECT: 1,
    CIRCLE: 2,
    TRI: 3});