//code by Julien Drochon
//www.julien-drochon.net
//for Soft Machine Lesson at ESA Pyrenees : www.esapyrenees.fr
// License Creative Commons BY-NC

// Déclaration de variables
int sensorValue01; // pour les données de la photocell n°1
int pin01 = A0; // pour déterminer quelle entrée (A0) est utilisé par la photocell n°1 sur la carte Arduino

int sensorValue02; // pour les données de la photocell n°2
int pin02 = A1; // pour déterminer quelle entrée (A1) est utilisé par la photocell n°2 sur la carte Arduino

// Initialisation de la carte
void setup() {
  // initialisation du port série à un débit de 9600 par seconde
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) { // Si le port série est disponible…
    // On attribue à la variable sensorValue les données analogiques reçu sur la broche
    // A0 de l'ordinateur. La fonction analogRead() permet de faire cela.
    sensorValue01 = analogRead(pin01);
    //on envoie la valeur sensorValue01 au navigateur via le port série
    Serial.print(sensorValue01);
    Serial.print(",");

    // On attribue à la variable sensorValue les données analogiques reçu sur la broche
    // A1 de l'ordinateur. La fonction analogRead() permet de faire cela.
    sensorValue02 = analogRead(pin02);
    //on envoie la valeur sensorValue02 au navigateur via le port série
    //comme c'est la dernière valeur que nous envoyons, nous utilisons
    //println
    Serial.println(sensorValue02);
  }
  delay(10);        // Delai de 10 milliseconde pour stabiliser le transfert des valeurs
}



