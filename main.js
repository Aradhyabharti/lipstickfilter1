function preload(){

}

function setup(){
    canvas=createCanvas(640,480)
    canvas.position(450,250)
    video=createCapture(VIDEO)
    video.hide()
    tint_color=""
}


function draw(){
    image(video,0,0,640,480)
    tint(tint_color)
    fill(200, 157, 200);
  stroke(100,23, 255);
  circle(10, 10, 45);
  circle(630, 10, 45);
  circle(10, 470, 45);
  circle(630, 470, 45);

  fill(200, 157, 200);
  stroke(100,23, 255);
  rect(0, 0, 640, 10);
  rect(0, 470, 640, 10);
  rect(0, 0, 10, 480);
  rect(630, 0, 10, 480);

}



function take_snapshot(){
    save("filterimage.png")
}



