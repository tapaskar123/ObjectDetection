img="";
status="";
function preload()
{
    img= loadImage('dog_cat.jpg');
}

function setup()
{
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog", 55, 65);
    noFill();
    stroke("#FF0000");
    rect(30, 50, 420, 250);

    fill("#0000FF");
    text("Cat", 320, 110);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 320, 316);
}