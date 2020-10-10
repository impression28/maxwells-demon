let ctx;
let start;
let px = [150];
let py = [150];
let vx = [1];
let vy = [1.2];
const WIDTH = 300;
const HEIGHT = 300;
const RADIUS = 2;
const BALL_NUMBER = 8112;
function getRandom(max) {
	return Math.random() * max;
};
function init() {
	ctx = document.getElementById('canvas').getContext('2d');
	for (let i = 0; i < BALL_NUMBER; i++) {
		px.push(getRandom(WIDTH));
		py.push(getRandom(HEIGHT));
		vx.push(getRandom(2) - 1);
		vy.push(getRandom(2) - 1);
	}
	ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
	ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
	window.requestAnimationFrame(draw);
};
function draw(timestamp) {
	if (start === undefined) {
		start = timestamp;
	}
	const elapsed = timestamp - start;
	ctx.clearRect(0, 0, 300, 300);

	for (let i = 0; i < BALL_NUMBER; i++) {
		px[i] += vx[i];
		py[i] += vy[i];
		if (px[i] + RADIUS > WIDTH) {
			px[i] = 2*(WIDTH - RADIUS) - px[i];
			vx[i] *= -1;
		} else if (px[i] - RADIUS < 0) {
			px[i] = 2*RADIUS - px[i];
			vx[i] *= -1;
		}
		if (py[i] + RADIUS > HEIGHT) {
			py[i] = 2*(HEIGHT - RADIUS) - py[i];
			vy[i] *= -1;
		} else if (py[i] - RADIUS < 0) {
			py[i] = 2*RADIUS - py[i];
			vy[i] *= -1;
		}
		ctx.fillRect(Math.floor(px[i]-RADIUS/2), Math.floor(py[i]-RADIUS/2), RADIUS, RADIUS);
	}

	window.requestAnimationFrame(draw);
};
