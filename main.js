 Webcam.set({
width: 367,
height:280,
image_format : "jpeg",
jpeg_quality : 200





 });
 cam= document.getElementById("camera");
Webcam.attach(cam);

function take_pic(){

Webcam.snap(function(data_uri){

    document.getElementById("snapshot").innerHTML='<img id="capimg" src="'+data_uri+'">';
});
}
console.log("THEEEEEEEEE ML555555 IS WORKING",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6dZbs-ABW/model.json",ModelLoaded);
function ModelLoaded(){
    console.log("Model is succesfully LLLLLLLOOOOOOOOOAAAAAAADDDDDDDDEEEEDDDDDDDDDD");
}

function Identify (){
    img= document.getElementById("capimg");
    classifier.classify(img, output);
}

function output(error,results){
if(error){
console.error(error);


}
else{
    console.log(results);
    document.getElementById("SelectedObject").innerHTML=results[0].label;
    document.getElementById("MarkedAccuracy").innerHTML=results[0].confidence.toFixed(3);

}
}