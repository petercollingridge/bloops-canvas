var TAU = 2 * Math.PI;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(40, 170, 10)';

function drawBloop(bloop) {
    ctx.beginPath();
    ctx.arc(bloop.x, bloop.y, bloop.r, 0, TAU, true);
    ctx.fill();
}
