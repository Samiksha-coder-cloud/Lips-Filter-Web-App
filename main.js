var noseX = 0;
var noseY = 0;

function preload() {

    lips_image = loadImage("https://i.postimg.cc/J7f1CwN7/filter-Image-Project.png");
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
 
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);

    image(lips_image, noseX, noseY, 60, 50);
}

function take_snapshot() {
    save("lipsFilter_image.png");
}

function modelLoaded(){
    console.log("poseNet Intialised");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x + 25;
        noseY = results[0].pose.nose.y + 80;

        console.log("nose X = " + noseX);
        console.log("nose Y = " + noseY);
    }
}