function preload(){
    
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw(){
    image(video,0,0,300,300);
    fill('GoldenRod');
    stroke('DarkGoldenRod');
    strokeWeight(10)
    
    rect(10,10,280,15);
    rect(10,10,15,280);
    rect(290,290,-15,-280);
    rect(290,290,-280,-15);
    circle(10,10,120);
    circle(10,290,120);
    circle(290,10,120);
    circle(290,290,120);
}

function take_snapshot(){
    save("myFilterImage.png");
    
}

