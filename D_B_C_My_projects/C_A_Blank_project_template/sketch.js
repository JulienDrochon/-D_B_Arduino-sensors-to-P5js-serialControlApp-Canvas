var serial;
var latestData = "waiting for data";  // you'll use this to write incoming data to the canvas

function setup() {
  createCanvas(400,400);


  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFD121");
  serial.on('data', gotData);
  serial.on('open', gotOpen);
}

function draw() {
  background(127);

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
