var lines;
var drawing = false;

function setup(){
  createCanvas(400,400);
  lines = [];
}
function draw(){
  background(240);
  for(var i = 1; i < lines.length; i++){
    line(lines[i - 1][0], lines[i - 1][1], lines[i][0], lines[i][1]);
  }

  if(mouseWentDown("leftButton")){
    drawing = true;
  }
  else if(mouseWentUp("leftButton")){
    drawing = false;
  }

  if(drawing === true){
    update();
  }
}

function update(){
  lines.push([mouseX, mouseY]);
}