var myButton;

var backButton;

var img;

function preload() {
    img = loadImage("map2.png");
}

function setup() {
    //bg = loadImage("map.jpg");
    createCanvas(1500, 1500); //??? do i need to create a canvas in this case?
    image(img, 0, 0, 1000, 700);


    // image(img,0,0,1800,1800,0,1000);
    myButton = createButton('');
    myButton.style("border-radius", "50%");
    myButton.style("background-color", "blue");
    myButton.style("border", "none");
    myButton.position(285, 390);
    myButton.size(10, 10);
    myButton.mousePressed(myButtonPressed);


    backButton = createButton('Back');
    backButton.mousePressed(backButtonPressed);
    backButton.position(100, 100);
    backButton.style("visibility", "hidden");



    // zoom.position(img,0,0,1800,1800,0,1000);

}

function draw() {

}

function myButtonPressed() {
  console.log('my button pressed');
    background(255);
    document.getElementById("canvas").style.display = "block";
    image(img, 0, 0, 1800, 1800, 0, 1000);
    myButton.style("visibility", "hidden");
    backButton.style("visibility", "visible");
    backButton.style("z-index", "9999");
    // magazine("visible");
    console.log(backButton);
}

function backButtonPressed() {
    background(255);
    document.getElementById("canvas").style.display = "none";
    // image(img, 0, 0, 800, 800);
    // image(img, 0, 0, 1800, 1800, 0, 1000);
    image(img, 0, 0, 1000, 700);
    backButton.style("visibility", "hidden");
    myButton.style("visibility", "visible");
    // magazine("hidden");
}



//button click and increase variable bg height and width
