const simulateBtn = document.getElementById("simulateBtn");
const alertBox = document.getElementById("alertBox");
const resolveBtn = document.getElementById("resolveBtn");
const alertCount = document.getElementById("alertCount");
const riskLevel = document.getElementById("riskLevel");
const careStatus = document.getElementById("careStatus");
const activityScore = document.getElementById("activityScore");
const lastMovement = document.getElementById("lastMovement");
const timeline = document.getElementById("timeline");

let activeAlert = false;

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function showAlert() {
  activeAlert = true;
  alertCount.textContent = "1";
  riskLevel.textContent = "Needs attention";
  riskLevel.className = "";
  riskLevel.style.color = "#c54d3b";
  careStatus.textContent = "Unusual inactivity detected";
  activityScore.textContent = "54%";
  lastMovement.textContent = "18 min ago";

  alertBox.className = "alert-active";
  alertBox.innerHTML = `
    <div class="big-check">!</div>
    <strong>Unusual inactivity detected</strong>
    <p>No movement signal was detected beyond the demo threshold. Caregiver attention is recommended.</p>
    <small>Detected at ${timeNow()} · Simulated sensor event</small>
  `;
  resolveBtn.classList.remove("hidden");

  const event = document.createElement("div");
  event.className = "event warning simulated-event";
  event.innerHTML = `
    <span class="event-dot"></span>
    <div><strong>Unusual inactivity detected</strong><small>Bedroom · just now</small></div>
    <b>Alert</b>
  `;
  timeline.prepend(event);
}

function resolveAlert() {
  activeAlert = false;
  alertCount.textContent = "0";
  riskLevel.textContent = "Low";
  riskLevel.className = "green";
  riskLevel.style.color = "";
  careStatus.textContent = "All monitored signals normal";
  activityScore.textContent = "82%";
  lastMovement.textContent = "2 min ago";

  document.querySelectorAll(".simulated-event").forEach((event) => event.remove());

  alertBox.className = "empty-alert";
  alertBox.innerHTML = `
    <div class="big-check">✓</div>
    <strong>No active alerts</strong>
    <p>The demo alert has been resolved. In the real system, the caregiver response would be logged securely.</p>
  `;
  resolveBtn.classList.add("hidden");
  simulateBtn.textContent = "Simulate event";
}

simulateBtn.addEventListener("click", () => {
  if (activeAlert) {
    resolveAlert();
  } else {
    showAlert();
    simulateBtn.textContent = "Reset demo";
  }
});

resolveBtn.addEventListener("click", resolveAlert);
