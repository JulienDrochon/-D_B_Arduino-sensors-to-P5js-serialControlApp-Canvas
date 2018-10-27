//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_A_Potentiometre.ino ou
// A_C_Photocell.ino sur votre carte Arduino

var serial; // déclaration variable pour le port série
var filtreIndex;
var monImage;
var inString;

function preload() {
  monImage = loadImage("assets/julien_vallee.jpg");
}

function setup() {
  createCanvas(400,400); // création de l'élément canvas, largeur = 400, hauteur = 400
  filterIndex = "THRESHOLD";
  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131"); //changer /dev/cu.usbmodemFD121 par le nom du port série de votre carte Arduino
  serial.on('open', gotOpen); // si le port série de la carte Arduino est ouvert, je lance la fonction gotOpen
  serial.on('data', serialEvent); // si des valeurs arrivent du port série de la carte Arduino, je lance la fonction serialEvent

}

function draw() {
  background(127); // arrière-plan de couleur gris moyen
  image(monImage, 0, 0);

  console.log(filterIndex);
  filter(filterIndex);
}

// ---------------------------------------------------------- //
// Fonctions pour récupérer les données envoyées par Arduino //
// ---------------------------------------------------------- //
// Fonction appelé à l'ouverture du port série dans le navigateur
function gotOpen() {
  console.log("Serial Port is Open"); // imprimer Serial Port is Open dans la console du navigateur
}

function serialEvent() {
  //Lire les valeurs provenant du port Série
  inString = serial.readLine();


  trim(inString);  // on nettoie les données venant d'arduino
  if (!inString) return; // on nettoie les données venant d'arduino

  console.log(inString);
  if(inString > 0 && inString <= 170 ){
    filterIndex = "THRESHOLD";
  }
  if(inString > 170 && inString <= 340 ){
    filterIndex = "GRAY";
  }
  if(inString > 340 && inString <= 510 ){
    filterIndex = "OPAQUE";
  }
  if(inString > 510 && inString <= 680 ){
    filterIndex = "INVERT";
  }
  if(inString > 680 && inString <= 850 ){
    filterIndex = "DILATE";
  }
  if(inString > 850 && inString <= 1023 ){
    filterIndex = "ERODE";
  }

}
