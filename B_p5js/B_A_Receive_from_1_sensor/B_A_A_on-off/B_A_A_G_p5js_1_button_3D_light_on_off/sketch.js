//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

//Téléverser préalablement le code A_B_Button.ino
//sur votre carte Arduino

var teapot;

var serial;
var colorLight;

var flag=false;

function setup(){
  createCanvas(800, 800, WEBGL);

  teapot = loadModel('assets/teapot.obj');

  serial = new p5.SerialPort();

  serial.open("/dev/cu.usbmodemFA131");
  serial.on('data', serialEvent);
  serial.on('open', gotOpen);
  colorLight = color(255,255,0);
}

function draw(){
  background(50);


  ambientMaterial(250);

  directionalLight( colorLight,  -width*4, 1, 0);
  scale(2);
  model(teapot);
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
        colorLight = color(0);
      }, 500);

    }else{
      setTimeout(function(){
        flag = false;
        colorLight = color(255);
      }, 500);
    }
  }
  console.log(inString);
}
