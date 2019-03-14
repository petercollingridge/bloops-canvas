var TAU = 2 * Math.PI;

var canvas = document.getElementById('bloop-world');
var ctx = canvas.getContext('2d');

function drawBloop(bloop) {
    ctx.fillStyle = 'rgb(40, 170, 10)';
    ctx.beginPath();
    ctx.arc(bloop.x, bloop.y, bloop.r, 0, TAU, true);
    ctx.fill();
}
