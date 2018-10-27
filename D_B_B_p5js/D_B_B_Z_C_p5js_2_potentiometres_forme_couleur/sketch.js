//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_E_2_Potentiometres.ino ou
// A_G_2_Photocells.ino sur votre carte Arduino


var serial; // déclaration variable pour le port série
var valeurHue, valeurSaturation;

function setup() {
  createCanvas(400,400); // création de l'élément canvas, largeur = 400, hauteur = 400

  serial = new p5.SerialPort();

  colorMode(HSB, 100);//on change de mode colorimétrique : Hue, Saturation, Brightness seront compris entre 0 et 100

  serial.open("/dev/cu.usbmodemFD121"); //changer /dev/cu.usbmodemFD121 par le nom du port série de votre carte Arduino
  serial.on('open', gotOpen); // si le port série de la carte Arduino est ouvert, je lance la fonction gotOpen
  serial.on('data', serialEvent); // si des valeurs arrivent du port série de la carte Arduino, je lance la fonction serialEvent
}

function draw() {
  background(127); // arrière-plan de couleur gris moyen
  noStroke();
  fill(valeurHue, valeurSaturation, 100); // je change la couleur sur ses parametre de saturation et de luminosité avec les variables valeurSaturation et valeurBrightness
  ellipse(width/2, height/2, 100, 100 ); //je déplace mon à mi-largeur et à mi-hauteur, taille de hauteur et de largeur : 100
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
    var inString = serial.readLine();

    trim(inString);  // on nettoie les données venant d'arduino
    if (!inString) return; // on nettoie les données venant d'arduino

    var sensors = split(inString, ','); // sépare les différentes

    console.log("valeur capteur 1 :" + sensors[0]) ; //imprime les valeurs du capteur 1 dans la console du navigateur
    console.log("valeur capteur 2 :" + sensors[1]) ; //imprime les valeurs du capteur 2 dans la console du navigateur
    valeurHue = map(sensors[0], 0, 1023, 0, 100); // je stocke la valeur de mon capteur 1 dans la variable valeurSaturation et je transforme sa plage de valeur de 0 à 1023 en de 0 à 100
    valeurSaturation = map(sensors[1], 0,1023, 0, 100); // je stocke la valeur de mon capteur 2 dans la variable largeurCercle et je transforme sa plage de valeur de 0 à 1023 en de 0 à demi-hauteur du canvas
}
