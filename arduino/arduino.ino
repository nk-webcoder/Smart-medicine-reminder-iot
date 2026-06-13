int led1 = 8;
int led2 = 9;
int led3 = 10;

void setup() {

  Serial.begin(9600);

  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);

}

void loop() {

  if (Serial.available()) {

    String data = Serial.readStringUntil('\n');
    data.trim();

    Serial.println("Received: " + data);

    if (data == "MORNING_ON") {
      digitalWrite(8, HIGH);
    }

    else if (data == "AFTERNOON_ON") {
      digitalWrite(9, HIGH);
    }

    else if (data == "NIGHT_ON") {
      digitalWrite(10, HIGH);
    }

    else if (data == "MORNING_OFF") {
      digitalWrite(8, LOW);
    }

    else if (data == "AFTERNOON_OFF") {
      digitalWrite(9, LOW);
    }

    else if (data == "NIGHT_OFF") {
      digitalWrite(10, LOW);
    }

  }

}