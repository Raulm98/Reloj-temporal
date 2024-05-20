let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let runner = document.getElementById("runner");

function updateClockAndRunner() {
  let currentTime = new Date();
  hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  let secondsPastHour = currentTime.getMinutes() * 60 + currentTime.getSeconds();
  let percentageOfHour = secondsPastHour / 3600;
  let runnerPosition = percentageOfHour * 100;

  runner.style.left = runnerPosition + '%';

  if (currentTime.getMinutes() === 0 && currentTime.getSeconds() === 0) {
    if (runner.style.transform === 'scaleX(1)') {
      runner.style.transform = 'scaleX(-1)';
    } else {
      runner.style.transform = 'scaleX(1)';
    }
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
      });
  }  

}

setInterval(updateClockAndRunner, 1000);
updateClockAndRunner();
