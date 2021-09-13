function preload() {
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
}

function take_snapshot() {
    save("lipsFilter_image.png");
}

function modelLoaded(){
    console.log("poseNet Intialised");
}

function gotPoses() {

    if (results.length > 0) {
        console.log(results);

        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
    }
}