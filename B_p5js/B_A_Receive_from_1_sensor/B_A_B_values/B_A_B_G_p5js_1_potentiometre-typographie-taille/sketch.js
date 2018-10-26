//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_A_Potentiometre.ino ou
// A_C_Photocell.ino sur votre carte Arduino

//https://github.com/antiboredom/p5.gif.js/tree/master

var serial;
var latestData = "waiting for data";
var mappedData;

var fontBlack;

function preload() {
  fontBlack = loadFont("assets/PlayfairDisplay-Black.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131");
  serial.on('data', gotData);
  serial.on('open', gotOpen);
}

function draw() {
  background(255);
  mappedData = map(latestData, 0, 1023, 0, 80);
  textSize(mappedData);
  text("My growing font !", 10, height/2);
}

// ---------------------------------------------------------- //
// Fonctions pour récupérer les données envoyées par Arduino //
// ---------------------------------------------------------- //

// There is data available to work with from the serial port

function gotData() {
  var currentString = serial.readLine();  // read the incoming string
  trim(currentString);                    // remove any trailing whitespace
  if (!currentString) return;             // if the string is empty, do no more
  console.log(currentString);             // println the string
  latestData = currentString;            // save it for the draw method
}


// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is Open");
}
