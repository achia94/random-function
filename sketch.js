var spot = {
 x: 20,
 y: 50

};

var col = {
r: 20,
g: 50,
b: 75

};

function setup() {
createCanvas (600, 400);
background (0);

}

function draw() {

//ellipse
spot.x = random(0, width);
spot.y = random(0, height);
col.r = random( 100, 255);
col.g = 0;
col.b = random( 100, 190);
noStroke();
fill(col.r, col.g, col.b, 100);
ellipse(spot.x, spot.y, 50, 50)
}
