//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_B_Button.ino
//sur votre carte Arduino

//https://github.com/antiboredom/p5.gif.js/tree/master

var serial;
var latestData = "waiting for data";


var fontRegular, fontItalic;
var switchFont;

function preload() {
  fontRegular = loadFont("assets/PlayfairDisplay-Regular.ttf");
  fontItalic = loadFont("assets/PlayfairDisplay-Italic.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131");
  serial.on('data', serialEvent);
  serial.on('open', gotOpen);
}

function draw() {
  background(127);

  if(switchFont==1){
    textFont(fontRegular);
  }
  if(switchFont==2){
    textFont(fontItalic);
  }
  textSize(20);
  fill(0);
  text("My changing font !", 10, height/2);
}

// ---------------------------------------------------------- //
// Fonctions pour récupérer les données envoyées par Arduino //
// ---------------------------------------------------------- //
// Fonction appelée à l'ouverture du port série dans le navigateur
function gotOpen() {
  console.log("Serial Port is Open"); // imprimer Serial Port is Open dans la console du navigateur
}

function serialEvent() {
  //Lire les valeurs provenant du port Série
  var inString = serial.readLine();

  trim(inString);  // on nettoie les données venant d'arduino
  if (!inString) return; // on nettoie les données venant d'arduino

  console.log("valeur capteur 1 :" + inString) ;
  if(inString==0){
    switchFont=1;
  }else{
    switchFont=2;
  }
}
