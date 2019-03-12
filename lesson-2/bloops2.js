var Bloop = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.angle = Math.random() * TAU;
    console.log(this.angle);
    this.speed = 1;
};

Bloop.prototype.move = function() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);

    if (Math.random() < 0.05) {
        this.angle += (Math.random() - 0.5) * 0.1 * TAU;
    }
}

var bloop1 = new Bloop(200, 200, 8);
var running = false;

function updateWorld() {
    bloop1.move();
    drawBloop(bloop1);

    running = setTimeout(updateWorld, 20);
}

function toggleRunning() {
    if (!running) {
        this.innerHTML = 'Pause';
        updateWorld();
    } else {
        this.innerHTML = 'Run';
        clearTimeout(running);
        running = false;
    }
}

document.getElementById('run-button').addEventListener('click', toggleRunning);