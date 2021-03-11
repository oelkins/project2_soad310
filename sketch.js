var c;
var input;
var words = ["goth adjacent", "quirky", "musical", "easily excitable", "cute", "nerd"];
var other = ["weird", "harsh", "lazy", "short", "passive aggressive", "insomniac"];
var others = ["unmotivated", "insecure", "chubby", "annoying", "no self worth", "impatient", "self critical"]
var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false;
let button;
let buttons = [];

function setup() {
  createCanvas(600, 600);
  c = color(0);
  background(255);
  textFont("Arial", 36);
  for (let i = 0; i < 1; ++i) {
    buttons[i] = createButton('Next');
  }
}

function draw() {
  buttons[0].mousePressed(next);
  noStroke();
  fill(200);
  rect(0, 0, width, 25);
  fill(255);

  if (scene2 == true) {
    noLoop();
    fill(255, 0, 0);
    var randomword = random(words);
    var randomother = random(other);
    var randomothers = random(others);
    text(randomword, random(width / 2), random(height));
    text(randomother, random(width / 2), random(height));
    text(randomothers, random(width / 2), random(height));
    input = createInput();
    fill(0);
    input.position(200, 725);
    button = createButton("what's my name?");
    button.position(350, 725);
    button.mousePressed(drawName);
  }
}

function next() {
  if (scene1 == true) {
    scene2 = true;
    scene1 = false;
  } else if (scene2 == true) {
    scene3 = true;
    scene2 = false;
    saveCanvas('your_version_of_me', 'png');
  } else if (scene3 == true) {
    scene4 == true;
    scene3 == false
  }
}

function mouseDragged() {
  if (scene1 == true) {
    strokeWeight(10);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function drawName() {
  fill(0);
  textSize(50);
  var name = input.value();
  for (var i = 0; i < 30; i++) {
    fill(random(255), random(255), random(255));
    text(name, 400, 75);
  }
}