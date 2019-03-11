var Bloop = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
};

Bloop.prototype.move = function() {
    this.x += Math.random() - 0.5;
    this.y += Math.random() - 0.5;
}

var bloop1 = new Bloop(100, 100, 8);
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