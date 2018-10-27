//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

// Déclaration des variables
int pinButton = 2;     // le numéro de broche sur la carrte arduino où est branché le bouton
int buttonState = 0;   // variable pour lire l'état du bouton : actif ou inactif

void setup() {
  //initialisation du port série
  Serial.begin(9600);
  // initialisation de la broche 2 comme entrée
  pinMode(pinButton, INPUT);
}

void loop() {
  // stocke l'état du bouton dans la variable buttonState
  buttonState = digitalRead(pinButton);
  // Affichage de la valeur du bouton dans le Serial Monitor
  Serial.println(buttonState);
}
