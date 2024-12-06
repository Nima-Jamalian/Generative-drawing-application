let seedsSlider;
let dimensionSlider;
let rotationSlider;
let color_R_slider;
let color_G_slider;
let color_B_slider;
let color_A_slider;

function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  drawUIInputSliders();
}

function draw(){
  background(200);
  push();
  translate(width/2, height/2);
  for(let i=0; i<seedsSlider.value(); i++){
    push();
    fill(color_R_slider.value(),color_G_slider.value(),color_B_slider.value(),color_A_slider.value());
    rotate(i * rotationSlider.value());
    circle(i, i*distanceSlider.value(), dimensionSlider.value());
    pop();
  }
  pop();
  drawUIText();
}

function drawUIText(){
  text("Seeds", 10, 25);
  text("Dimension", 10, 45);
  text("Distance", 10, 65);
  text("Rotation", 10, 85);
  text("Color R", 10, 105);
  text("Color G", 10, 125);
  text("Color B", 10, 145);
  text("Color A", 10, 165);
}

function drawUIInputSliders(){
  //Create a slider and place it at the top of the canvas.
  seedsSlider = createSlider(0, 1000, 500);
  seedsSlider.position(50, 12);
  seedsSlider.size(120);

  //Create a slider and place it at the top of the canvas.
  dimensionSlider = createSlider(0, 100, 50);
  dimensionSlider.position(70, 32);
  dimensionSlider.size(100);

  //Create a slider and place it at the top of the canvas.
  distanceSlider = createSlider(0, 30, 1);
  distanceSlider.position(70, 52);
  distanceSlider.size(100);

  //Create a slider and place it at the top of the canvas.
  rotationSlider = createSlider(0, 180, 175);
  rotationSlider.position(70, 72);
  rotationSlider.size(100);

  //Create a slider and place it at the top of the canvas.
  color_R_slider = createSlider(0, 255, 50);
  color_R_slider.position(70, 92);
  color_R_slider.size(100);

  //Create a slider and place it at the top of the canvas.
  color_G_slider = createSlider(0, 255, 50);
  color_G_slider.position(70, 112);
  color_G_slider.size(100);

  //Create a slider and place it at the top of the canvas.
  color_B_slider = createSlider(0, 255, 200);
  color_B_slider.position(70, 132);
  color_B_slider.size(100);

  //Create a slider and place it at the top of the canvas.
  color_A_slider = createSlider(0, 255, 100);
  color_A_slider.position(70, 152);
  color_A_slider.size(100);  
}



