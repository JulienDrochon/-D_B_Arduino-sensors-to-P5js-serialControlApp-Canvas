//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_A_Potentiometre.ino ou
// A_C_Photocell.ino sur votre carte Arduino

//https://github.com/antiboredom/p5.gif.js/tree/master

var serial;
var latestData = "waiting for data";


var fontRegular, fontItalic, fontBold, fontBlack, fontBlackItalic, fontBoldItalic;

function preload() {
  fontRegular = loadFont("assets/PlayfairDisplay-Regular.ttf");
  fontItalic = loadFont("assets/PlayfairDisplay-Italic.ttf");
  fontBold = loadFont("assets/PlayfairDisplay-Bold.ttf");
  fontBlack = loadFont("assets/PlayfairDisplay-Black.ttf");
  fontBlackItalic = loadFont("assets/PlayfairDisplay-BlackItalic.ttf");
  fontBoldItalic = loadFont("assets/PlayfairDisplay-BoldItalic.ttf");
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


  if (latestData > 0 && latestData <= 170){
    textFont(fontRegular);
  }
  if (latestData > 170 && latestData <= 340){
    textFont(fontItalic);
  }
  if (latestData > 340 && latestData <= 510){
    textFont(fontBold);
  }
  if (latestData > 510 && latestData <= 680){
    textFont(fontBlack);
  }
  if (latestData > 680 && latestData <= 850){
    textFont(fontBlackItalic);
  }
  if (latestData > 850 && latestData <= 1023){
    textFont(fontBoldItalic);
  }
  textSize(20);
  text("My changing font !", 10, height/2);
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
