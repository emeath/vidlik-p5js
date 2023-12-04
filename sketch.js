let j_increment = 10

function setup() {
  createCanvas(400,400,WEBGL)
  angleMode(DEGREES)

  let button = createButton('start animation');
  button.position(150, 500);
  button.mousePressed(() => {
    setInterval(ae, 250 + 423 + 384 + 1041)
  });
}

function ae() {
  waitThenChangeAnimation(0) 
  waitThenChangeAnimation(250) 
  waitThenChangeAnimation(250 + 423) 
  waitThenChangeAnimation(250 + 423 + 384) 
}

function waitThenChangeAnimation(esperar) {
  setTimeout(changeAnimationForm, esperar)
}

function draw() {
  program_animation_logic()
}

function changeAnimationForm(){  
  j_increment = random(10, 100)
 }

 function program_animation_logic() {
  background(30)

  rotateY(135)
  rotateX(10)
  stroke(255)

  noFill()

  for (let index = 0; index < 60; index++) {
    beginShape()
    for (j = 0; j < 360; j += j_increment) {
      let rad = index * 10
      let x = rad * cos(j)
      let y = rad * sin(j)
      let z = sin(frameCount * 2 + index * 10) * 60

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
 }