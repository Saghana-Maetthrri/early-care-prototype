# EarlyCare Technical Design Document

## 1. System Goal
EarlyCare is designed to help caregivers notice unusual activity patterns in elderly people who live independently.

## 2. High-Level Architecture

```text
+---------------------------+
| Motion / Fall / Routine   |
| Sensors or Wearable Data  |
+-------------+-------------+
              |
              v
+---------------------------+
| ESP32 / Raspberry Pi      |
| Data Collection Gateway   |
+-------------+-------------+
              |
        Wi-Fi / Internet
              |
              v
+---------------------------+
| Secure Cloud Backend      |
| Authentication + Storage  |
+-------------+-------------+
              |
              v
+---------------------------+
| Preprocessing             |
| Cleaning + Features       |
+-------------+-------------+
              |
              v
+---------------------------+
| AI / ML Anomaly Detection |
| Activity Pattern Analysis |
+-------------+-------------+
              |
              v
+---------------------------+
| Risk Assessment Engine    |
| Low / Attention / Urgent  |
+--------+------------------+
         |
     +---+---+
     |       |
     v       v
Dashboard  Notifications
     |       |
     +---+---+
         |
         v
     Caregiver
```

## 3. Current Prototype Architecture

The current hackathon implementation is intentionally lightweight:

```text
index.html
    |
    +---- style.css
    |
    +---- script.js
              |
              +--> Simulated activity event
              +--> Risk state update
              +--> Caregiver alert
              +--> Resolve/reset workflow
```

No external server or database is required.

## 4. Data Flow
1. A real implementation collects movement, routine, or fall-related signals.
2. The gateway timestamps and forwards the data.
3. The backend validates and stores permitted data.
4. Preprocessing converts raw signals into useful features such as inactivity duration and movement frequency.
5. An ML/anomaly model identifies unusual patterns.
6. A risk engine assigns an appropriate status.
7. The caregiver dashboard and notification service present the result.

## 5. Example Features
- inactivity duration
- movement frequency
- time since last detected movement
- routine completion status
- unusual deviation from an individual's normal pattern

## 6. AI/ML Approach
A production system could combine:
- supervised fall detection where labelled data is available
- anomaly detection for deviations from an individual's normal routine
- rule-based safety thresholds for simple, explainable alerts

The hackathon prototype simulates this decision layer rather than claiming a clinically validated model.

## 7. Security and Privacy
A real deployment should include:
- authenticated caregiver accounts
- encrypted communication
- access control
- consent and data-minimisation policies
- secure storage
- audit logging
- protected API credentials
- no secrets committed to source control

## 8. Reliability and Risk Controls
Potential false alerts should be reduced using personalized thresholds, sensor fusion, confirmation windows, and caregiver acknowledgement. Critical workflows should have safe fallback and escalation mechanisms.

## 9. Scalability
The architecture can scale from one elderly user to multiple households by separating device ingestion, backend services, model inference, notification delivery, and dashboard access.

## 10. Prototype-to-Production Path
```text
Browser Simulator
      ↓
ESP32 / Raspberry Pi
      ↓
Secure API
      ↓
Cloud Database
      ↓
Validated ML Model
      ↓
Real-time Caregiver App
```
