//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

// Déclaration des variables
int pinButton01 = 2;     // le numéro de broche (2) sur la carte arduino où est branché le bouton n°1
int buttonState01 = 0;   // variable pour lire l'état du bouton n°1 : actif ou inactif
int pinButton02 = 3;     // le numéro de broche (3) sur la carte arduino où est branché le bouton n°2
int buttonState02 = 0;   // variable pour lire l'état du bouton n°2 : actif ou inactif

void setup() {
  //initialisation du port série
  Serial.begin(9600);
  // initialisation de la broche 2 comme entrée
  pinMode(pinButton01, INPUT);
  // initialisation de la broche 3 comme entrée
  pinMode(pinButton02, INPUT);
}

void loop() {

  // stocke l'état du bouton n°1 dans la variable buttonState01
  buttonState01 = digitalRead(pinButton01);
  //on envoie la valeur buttonState01 au navigateur via le port série
  Serial.print(buttonState01);
  Serial.print(",");

  // stocke l'état du bouton n°1 dans la variable buttonState01
  buttonState02 = digitalRead(pinButton02);
  //on envoie la valeur buttonState02 au navigateur via le port série
  //comme c'est la dernière valeur que nous envoyons, nous utilisons
  //println
  Serial.println(buttonState02);

  delay(10);        // Delai de 10 milliseconde pour stabiliser le transfert des valeurs
}
