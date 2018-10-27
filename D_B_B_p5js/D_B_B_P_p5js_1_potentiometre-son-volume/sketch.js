//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_A_Potentiometre.ino ou
// A_C_Photocell.ino sur votre carte Arduino

//https://p5js.org/reference/#/libraries/p5.sound

var song;
var serial;
var latestData = "waiting for data";
var mappedData = 0;

function preload() {
  song = loadSound("assets/lucky_dragons_-_power_melody.mp3");
}

function setup() {
  createCanvas(720, 200);
  background(0,0,255);
  song.loop();

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131");
  serial.on('data', gotData);
  serial.on('open', gotOpen);
}

function draw(){

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
  mappedData = map(latestData, 0, 1023, 0, 1.0);
  song.setVolume(mappedData, 0.1);
}


// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is Open");
}
