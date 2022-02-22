Webcam.set({
    height: 300,
    width: 345,
    image_format:'png',
png_quality: 120
})
camera= document.getElementById("cam")
Webcam.attach(camera)
function cap(){
Webcam.snap(function(imgo){
document.getElementById("imge").innerHTML="<img id='myimage' src='"+imgo+"'>"
})
}
classifier= ml5.imageClassifier("https://storage.googleapis.com/tm-model/MNYmfbP-L/model.json", loadmodel)
function loadmodel(){
    console.log("loaded Model!")
}
function rec(){
imggetbyimg= document.getElementById("myimage")
classifier.classify(imggetbyimg, getresult)
}
function getresult(e, r){
    if(e){
        console.log(e)
    }
else{
    console.log(r)
    document.getElementById("myobject").innerHTML= "Object :"+r[0].label
    valuepersentage=Math.floor(r[0].confidence * 100)
    document.getElementById("myvalue").innerHTML= "Accuracy :"+ valuepersentage+"%"
}
}
