import firebase_admin
from firebase_admin import credentials, db
import serial
import time
from datetime import datetime

# 🔌 CONNECT TO ARDUINO (CHANGE COM PORT)
arduino = serial.Serial('COM3', 9600)
time.sleep(2)

# 🔥 FIREBASE SETUP
cred = credentials.Certificate("serviceAccountKey.json")

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://medicine-reminder-3e630-default-rtdb.firebaseio.com'
})

ref = db.reference('medicine_schedule')

print("System Started...\n")

# 🧠 STORE TRIGGERED MEDICINES (TO AVOID REPEATING)
triggered = set()

def check_medicine():

    current_time = datetime.now().strftime("%H:%M")
    print("Checking at:", current_time)

    data = ref.get()

    if not data:
        print("No data found\n")
        return

    print("Firebase data:", data)

    for key in data:
        med = data[key]

        # SAFE VALUE EXTRACTION
        med_time = med.get('time', "")
        slot = med.get('slot', "").upper()
        status = med.get('status', "pending")

        # 🟢 TURN ON LED (ONLY ONCE)
        if med_time <= current_time and status == "pending" and key not in triggered:
            print("Turning ON:", slot)
            arduino.write((slot + "_ON\n").encode())
            triggered.add(key)

        # 🔴 TURN OFF LED WHEN TAKEN
        if status == "taken":
            print("Turning OFF:", slot)
            arduino.write((slot + "_OFF\n").encode())

            # REMOVE FROM TRIGGERED (RESET)
            if key in triggered:
                triggered.remove(key)

    print("\n")


# 🔁 CONTINUOUS LOOP
while True:
    check_medicine()
    time.sleep(30)