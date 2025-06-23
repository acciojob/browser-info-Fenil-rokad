//your JS code here. If required.
window.addEventListener("DOMContentLoaded", function () {
  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;

  const infoDiv = document.getElementById("browser-info");
  infoDiv.innerText = "You are using " + browserName + " version " + browserVersion;
});
