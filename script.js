camera = document.getElementById("Webcam")
Webcam.set({
    width: 350,
    height: 270,
    image_format: 'jpeg',
    jpeg_quality: 100
});
Webcam.attach(camera);

function Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Image").innerHTML = '<img id="SnapP" src= "'+ data_uri + '"/>';
    });
}

console.log('ml5version',ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z1m0X-HrN/model.json", modelLoaded)

function modelLoaded(){
    console.log('Model Loaded');
}

function check(){
    img = document.getElementById("SnapP");
    classifier.classify(img, gotResult)
}

function gotResult(error,result){ 
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("Object").innerHTML = result[0].label
        document.getElementById("Accuracy").innerHTML = result[0].confidence
    }
}