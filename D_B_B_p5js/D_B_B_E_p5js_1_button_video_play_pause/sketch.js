//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_B_Button.ino
//sur votre carte Arduino

//https://p5js.org/examples/dom-video-canvas.html

var serial; // déclaration variable pour le port série
var flag=false;

var mavideo; // déclaration de la variable mavideo
function preload() {
  // les différents formats de fichiers videos
  //pour un fonctionnement dans les différents navigateurs
  mavideo = createVideo(['assets/julian_glander_street_demon.mp4', 'assets/julian_glander_street_demon.webm']);
}

function setup() {
  createCanvas(660, 380); // dimensions du canvas
  mavideo.hide(); // hack pour afficher la video dans le canvas
  mavideo.pause(); // je lance la lecture de la video en boucle

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131"); //changer /dev/cu.usbmodemFD121 par le nom du port série de votre carte Arduino
  serial.on('open', gotOpen); // si le port série de la carte Arduino est ouvert, je lance la fonction gotOpen
  serial.on('data', serialEvent); // si des valeurs arrivent du port série de la carte Arduino, je lance la fonction serialEvent
}

function draw() {
  background(0);

  image(mavideo,0,0, 640, 360); // afficher la video nommée mavideo à la position x = 0 et y = 0 et de dimension largeur = 640 et hauteur = 360

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

  if( inString == 1){
    console.log("1");
    if(flag == false){
      setTimeout(function(){
        flag = true;
        mavideo.play();
      }, 500);

    }else{
      setTimeout(function(){
        flag = false;
        mavideo.pause();
        console.log("false");
      }, 500);
    }
  }
  console.log(inString);
}
