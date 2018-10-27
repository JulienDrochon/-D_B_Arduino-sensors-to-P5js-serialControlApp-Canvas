//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_F_2_Buttons.ino
// sur votre carte Arduino

var teapot;

var serial;

var lightColor;

function setup(){
  createCanvas(800, 800, WEBGL);

  teapot = loadModel('assets/teapot.obj');

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131");
  serial.on('data', serialEvent);
  serial.on('open', gotOpen);

  lightColor=color(255);
}

function draw(){
  background(50);


  ambientMaterial(250);
  //
  // var mappedData = map(latestData, 0, 1023, -width, width);
  directionalLight( lightColor,  -(width)*4, 1, 0);
  scale(2);
  model(teapot);
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

  if(sensors[0]==0 && sensors[1]==0){
    lightColor=color(255,0,0);
  }
  if(sensors[0]==1 && sensors[1]==0){
    lightColor=color(127,255,0);
  }
  if(sensors[0]==0 && sensors[1]==1){
    lightColor=color(255,127,0);
  }
  if(sensors[0]==1 && sensors[1]==1){
    lightColor=color(255,0,127);
  }
}
