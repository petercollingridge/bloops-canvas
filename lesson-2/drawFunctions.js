var TAU = 2 * Math.PI;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
ctx.fillStyle = 'steelblue';

function drawBloop(bloop) {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(bloop.x, bloop.y, bloop.r, 0, TAU, true);
    ctx.fill();
}
