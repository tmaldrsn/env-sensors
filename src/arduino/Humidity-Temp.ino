#include <LiquidCrystal.h>
#include <dht.h>
#include <stdio.h>
#include <string.h>

#define DHT11_PIN A0

LiquidCrystal lcd(1, 2, 4, 5, 6, 7);
dht DHT;

void setup() 
{
  lcd.begin(16, 2);
}

void loop() 
{
  displayData();
  getData(3000);
  sendData();
}

void getData(int interval) {
  int chk = DHT.read11(DHT11_PIN);
  delay(interval);
}

void sendData() {
  Serial.begin(9600);
  Serial.println(String(DHT.temperature) + " " + String(DHT.humidity));
  Serial.end();
}

void displayData() {
  lcd.setCursor(0,0);
  lcd.print("Temp");
  lcd.setCursor(0,1);
  lcd.print(String(DHT.temperature));
  
  lcd.setCursor(7,0);
  lcd.print("Humidity");
  lcd.setCursor(7,1);
  lcd.print(String(DHT.humidity));
}


