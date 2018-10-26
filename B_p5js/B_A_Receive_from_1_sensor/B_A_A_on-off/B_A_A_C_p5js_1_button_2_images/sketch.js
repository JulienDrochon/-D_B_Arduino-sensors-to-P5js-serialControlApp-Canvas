//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_B_Button.ino
//sur votre carte Arduino

var serial; // déclaration variable pour le port série
var monImagePaysage, monImageGhost;
var latestData;
var afficherPremiereImage = false, afficherDeuxiemeImage = false;

function preload() {
  monImagePaysage = loadImage("assets/everything-david-oreilly.png");
  monImageGhost = loadImage("assets/ghost-david-oreilly.png");
}

function setup() {
  createCanvas(640,480); // création de l'élément canvas, largeur = 400, hauteur = 400

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131"); //changer /dev/cu.usbmodemFD121 par le nom du port série de votre carte Arduino
  serial.on('open', gotOpen); // si le port série de la carte Arduino est ouvert, je lance la fonction gotOpen
  serial.on('data', serialEvent); // si des valeurs arrivent du port série de la carte Arduino, je lance la fonction serialEvent
}

function draw() {
  background(127);
  if(afficherPremiereImage == true){
    image(monImagePaysage, 0, 0, 800, 400);
  }
  if(afficherDeuxiemeImage == true){
    image(monImageGhost, 0, 0, 800, 400);
  }
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
    afficherPremiereImage = true;
    afficherDeuxiemeImage = false;
  }else{
    afficherPremiereImage = false;
    afficherDeuxiemeImage = true;
  }

}
