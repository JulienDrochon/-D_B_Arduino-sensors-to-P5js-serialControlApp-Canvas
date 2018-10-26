# Level2_Arduino-sensors-to-P5js-Canvas
Code examples for using sensors plugged into an Arduino Board interacting with P5js in web browser.


# Operating principle

<img class="aligncenter wp-image-2502 size-full" src="http://www.online-courses.julien-drochon.net/wp-content/uploads/2018/05/arduino-sensor-to-p5js-01.png" alt=""/>

# Software Install

 - P5 Serial Control

Downlaod and install p5 serial control first : https://github.com/vanevery/p5.serialcontrol/releases

 - MAMP
Downlaod and install MAMP first : https://www.mamp.info/en/downloads/

# Folders detail 


**A_Arduino_Sensors**
Code examples for uploading to Arduino Board. Used sensors : 1 potentiometer, 1 switch button, 1 distance sensor (HCSR04), 1 photocell, 2 potentiometers, 2 switch buttons, 2 photocells. Wiring schematics inside folders.

**B_p5js**
Codes receiving data from 1 sensor into the web browser. Edit the *sketch.js* file for customizing.
 - B_A_Receive_from_1_sensor : 
Codes receiving data from 1 sensor into the web browser.
<br>B_A_A_on-off : 
Codes for switch button or on/off sensor.
<br> B_A_B_values : 
Codes for potentiometer, photocell or sensor sending several numbered values.
 - B_B_Receive_from_2_sensors : 
Codes receiving data from 2 sensors into the web browser.
<br>B_B_A_on-off : 
Codes for 2 switch buttons or on/off sensors.
<br>B_B_B_values : 
Codes for 2 potentiometers, 2 photocells or 2 sensors sending several numbered values.
 - B_C_Canvas_presentation : 
 Extra examples for presenting your sketches (fullscreen, web page centered, …).
 
**C_Mes_Projets**
Folder where to duplicate examples for customizing or creating new sketches.
