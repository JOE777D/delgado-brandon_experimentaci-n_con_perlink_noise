let noiseTime = 0;
let noiseTam = 10;
let noiseCol = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(255);
  let posX1 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  let posX2 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY2 = map(noise(noiseTime + 300), 0, 1, 0, windowHeight);

  let R1 = map(noise(noiseCol), 0, 1, 255, 60);
  let G1 = map(noise(noiseCol + 100), 0, 1, 255, 90);
  let B1 = map(noise(noiseCol + 50), 0, 1, 255, 80);

  let R2 = map(noise(noiseCol), 0, 1, 255, 100);
  let G2 = map(noise(noiseCol + 100), 0, 1, 255, 30);
  let B2 = map(noise(noiseCol + 50), 0, 1, 255, 200);

  let tam1 = map(noise(noiseTam), 0, 1, 80, 5);

  let tam2 = map(noise(noiseTam), 0, 1, 100, 5);

  let colur1 = color(R1, G1, B1);

  let colur2 = color(R2, G2, B2);

  noiseTime += 0.01;
  noiseTam += 0.06;
  noiseCol += 0.04;

  fill(colur1);
  // stroke(0, 50);
  // strokeWeight(4);
  noStroke();
  circle(posX1, posY1, tam1);

  fill(colur2);
  // stroke(0, 50);
  // strokeWeight(4);
  noStroke();
  circle(posX2, posY2, tam2);
}
