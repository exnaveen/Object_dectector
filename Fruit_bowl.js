img = "";
status1 = "";

function preload()
{
    img = loadImage('Fruit_bowl.jpeg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Obejects are detected";
}

function modelLoaded()
{
    console.log("CocoSSD is Initialised");
    status1 = true;
   objectDetector.detect(img,gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
        console.log(results);
}

