//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_A_Potentiometre.ino ou
// A_C_Photocell.ino sur votre carte Arduino

var serial; // déclaration variable pour le port série
var monImagePaysage, monImageGhost;
var latestData;

function preload() {
  monImagePaysage = loadImage("assets/everything-david-oreilly.png");
  monImageGhost = loadImage("assets/ghost-david-oreilly.png");
}

function setup() {
  createCanvas(800,400); // création de l'élément canvas, largeur = 400, hauteur = 400

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131"); //changer /dev/cu.usbmodemFD121 par le nom du port série de votre carte Arduino
  serial.on('open', gotOpen); // si le port série de la carte Arduino est ouvert, je lance la fonction gotOpen
  serial.on('data', serialEvent); // si des valeurs arrivent du port série de la carte Arduino, je lance la fonction serialEvent
}

function draw() {
  let mappedData = map(latestData, 0, 1023, 0, 255);

  image(monImagePaysage, 0, 0, 800, 400);
  push();
  tint(255, int(mappedData));
  image(monImageGhost, 0, 0, 800, 400);
  pop();
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

  latestData = inString;

  console.log("valeur capteur 1 :" + latestData) ;
}
