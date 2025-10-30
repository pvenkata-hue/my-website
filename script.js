document.addEventListener("DOMContentLoaded", () => {
  const alerts = [
    "⚠️ Moderate flooding expected near River Godavari.",
    "🚨 Heavy rainfall alert for Hyderabad region.",
    "✅ No current alerts for Bengaluru."
  ];
  const alertBox = document.getElementById("alerts");
  if (alertBox) {
    alertBox.innerHTML = alerts.map(a => `<p>${a}</p>`).join("");
  }
});
