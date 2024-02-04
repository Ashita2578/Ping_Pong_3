function setup(){
    canvas= createCanvas(800,600);
    canvas.parent('canvas');
    video= createCapture(VIDEO);
    video.size(800,600);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()  {
    console.log('PoseNet has been Initialized');
}
function gotPoses() {
    if (results.length>0){
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX="+ noseX+ "noseY" + noseY);
    }
}