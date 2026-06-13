
# Smart Medicine Reminder and Tracking System

An end-to-end IoT-based healthcare solution engineered to bridge the gap between physical medical adherence and cloud-based digital tracking. This system features a physical hardware prototype that alerts users when it is time to take specific medications while concurrently synchronizing device states with a secure cloud infrastructure for real-time remote monitoring via a full-stack web dashboard.

---

## 🚀 Key Features

* **Real-Time Edge-to-Cloud Sync:** Instant hardware-state updates pushed to a cloud architecture with near-zero latency.
* **Automated Physical Alerts:** Configured hardware interrupt routines to trigger multi-colored LED visual alerts and status prompts for scheduled intervals.
* **Interactive Web Dashboard:** A minimalistic, responsive user interface built for patient scheduling, compliance tracking, and automated adherence logging.
* **Hardware-Agnostic Core Logic:** Designed with modular, structured code ensuring the central system logic can seamlessly adapt to scaling microcontrollers.

---

## 🛠️ Tech Stack & Components

### Software & Cloud Architecture
* **Frontend:** HTML5, CSS3 (Modern, high-whitespace aesthetic), JavaScript (ES6+)
* **Backend Integration:** Cloud-native database connection architecture
* **Database:** Firebase Realtime Database (NoSQL JSON structural mapping)
* **Core Logic Languages:** Python / C++

### Hardware Configuration
* **Microcontroller/Single Board Computer:** Raspberry Pi 5 / Arduino Uno 
* **Peripherals:** Logic-driven LEDs (Alert Indicators), Tactile Buttons (Acknowledge/Reset Inputs), Jumper Wires, and Breadboard.

---

## 📐 System Architecture

1. **Scheduling:** The user or caretaker sets medication frequencies and dosages via the interactive Web Dashboard.
2. **Cloud Synchronization:** Data changes are instantly recorded in the cloud database, which handles security policies and active data streaming.
3. **Edge Listening:** The hardware controller constantly listens for database changes over a network layer.
4. **Physical Trigger:** When a scheduled timestamp matches the system clock, the script triggers an alert loop, illuminating the physical LEDs.
5. **User Feedback:** The patient presses a tactile button upon taking the medicine, resetting the hardware state and writing an "Adherence Logged" confirmation back to the Web Dashboard.

---

## 📂 Project Structure

```text
smart-medicine-reminder-IoT/
│
├── hardware/
│   └── main_controller.py      # Core script managing peripheral loops & cloud syncing
│
├── web-dashboard/
│   ├── index.html              # Main frontend tracking and scheduling interface
│   ├── style.css               # Minimalistic style layouts and modern typography
│   └── app.js                  # Database connection handling and real-time DOM hooks
│
└── README.md                   # Project documentation portfolios

⚙️ Setup and Installation
1. Hardware Assembly
Connect the visual alert indicator (LED) to the specified digital/GPIO output pin with an appropriate current-limiting resistor.

Wire the tactile feedback button between an input pin and ground, utilizing internal pull-up configurations.

2. Database Integration
Establish a database instance via your cloud console.

Export your configuration object and apply the generated project credentials directly into the app.js file.

3. Execution
Deploy the frontend application locally or via a static hosting provider.

🎯 Project Outcomes & Impact
Developed a robust understanding of hardware-to-software system integration.

Eliminated server-side maintenance overhead by deploying a serverless data synchronization layer.

Designed an intuitive healthcare utility aimed at empowering elderly care networks and boosting therapeutic transparency.
=======
# Smart-medicine-reminder-iot
An Iot based health tech solution system
c87ba8c95d72d516a2dafe60acd50fa8f9a94d56
