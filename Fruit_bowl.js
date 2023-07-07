img = "";
status1 = "";
objects = [];

function preload()
{
    img = loadImage('Fruit_bowl.jpeg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    image(img, 0, 0, 640, 420);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}

function modelLoaded()
{
    console.log("CocoSSD is Initialised");
    status1 = true;
   objectDetector.detect(img,gotResults);
}



function draw()
{
    if(status1 != "")
    {
        for(a = 0; a < objects.length; a++)
        {
            document.getElementById("status").innerHTML = "Status - Objects are detected";
            percent = floor(objects[a].confidence * 100);
            fill("red");
            text(objects[a].label + " " + percent + "%", objects[a].x + 15, objects[a].y + 15);
            noFill();
            stroke("red");
            rect(objects[a].x, objects[a].y, objects[a].width, objects[a].height);
        }
    }
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
        console.log(results);
        objects = results;
}



