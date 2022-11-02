img = "";
objects = [];
estatus = "";

function preload(){
  img = loadImage('bottle.jpg');
}


function setup() {
  canvas = createCanvas(630, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estatus: detectando objetos";
}

function modelLoaded() {
  console.log("¡Modelo cargado!")
  estatus = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0, 630, 420);

      if(estatus != "")
      {
        for (i = 0; i < objects.length; i++) {
           percent = floor(objects[i].confidence * 100);
          document.getElementById("status").innerHTML = "Estatus: objeto detectado" ;
    
          fill("#FF0000");
         
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}