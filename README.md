# EarlyCare – AI-Based Elderly Care Prototype

## Project Title
**AI-Based Early Detection and Personalized Assistance System for Elderly People Living Independently**

## Problem Statement
Elderly people living alone may experience falls, prolonged inactivity, missed routines, or sudden health changes without anyone noticing immediately. Families and caregivers cannot continuously monitor them, creating a gap between an emergency and timely assistance.

## Proposed Solution
EarlyCare is an AI-assisted elderly-care prototype that monitors everyday activity signals, identifies unusual patterns, and provides a caregiver alert when attention may be needed.

## Prototype Features
- Elderly-care monitoring dashboard
- Activity score and risk status
- Simulated unusual-inactivity detection
- Caregiver alert and resolution workflow
- Daily routine checklist
- Responsive desktop/mobile interface
- Demo-data and prototype limitations clearly identified

## Setup / Run Instructions
This repository is a browser-based prototype and does not require Node.js, Python, a database, or external packages.

### Option 1: Run directly
1. Download or clone the repository.
2. Keep these files in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Double-click `index.html`.
4. Open it in Chrome, Edge, or another modern browser.

### Option 2: VS Code
1. Open the repository folder in VS Code.
2. Open `index.html`.
3. Run it with Live Server if installed, or open the file directly in a browser.

### Environment Variables
**None required for the current prototype.**

For a production implementation, environment variables would be used for secure backend/API configuration and would never be committed to GitHub.

## Demo Workflow
1. Start with the dashboard showing **Low** risk.
2. Click **Simulate event**.
3. The prototype changes the activity score, changes the risk status to **Needs attention**, and creates a caregiver alert.
4. Click **Mark alert as resolved**.
5. The dashboard returns to the normal state.

## Technical Architecture

```text
IoT / Wearable Sensors
        |
        v
Data Collection Gateway
(ESP32 / Raspberry Pi)
        |
        v
Secure Cloud Backend
        |
        v
Preprocessing + Feature Extraction
        |
        v
AI / ML Anomaly Detection
        |
        v
Risk Assessment
        |
        +--------------------+
        |                    |
        v                    v
Caregiver Dashboard     Alert / Notification
```

The current browser prototype simulates the sensor and AI stages so the complete user workflow can be demonstrated without hardware.

See **ARCHITECTURE.md** for the detailed technical design.

## Technologies
- HTML5 – structure
- CSS3 – responsive UI
- Vanilla JavaScript – prototype interaction
- Planned real system: ESP32/Raspberry Pi, secure cloud backend and validated ML model

## Sample Data and Test Cases
Sample activity data is provided in `sample-data.json`.

Manual test cases are documented in `TEST_CASES.md`.

## Important Prototype Limitation
This hackathon version uses simulated sensor events and sample data. It does **not** provide medical diagnosis and does not claim to be a production healthcare system.

In a real implementation, the simulator would be replaced by approved sensors, a secure backend, and a validated anomaly/fall-detection model. Privacy, consent, authentication, encryption, and clinical validation would also be required.

## Future Improvements
- Real-time IoT integration
- Fall detection using sensor fusion
- Personalized anomaly detection
- Multilingual voice assistance
- Medication reminders
- Emergency contact escalation
- Caregiver mobile application
- Secure health-data storage and analytics

## Repository Structure
```text
earlycare-prototype/
├── index.html
├── style.css
├── script.js
├── README.md
├── ARCHITECTURE.md
├── sample-data.json
├── TEST_CASES.md
└── LICENSE
```

## Hackathon Demo Statement
> “Our prototype demonstrates the complete early-warning workflow. The current sensor event and AI decision are simulated in the browser so judges can see the interaction immediately. In the real implementation, sensors, secure cloud processing and a validated AI/ML model would replace the simulator.”

## License
This project is released under the MIT License. See `LICENSE`.
