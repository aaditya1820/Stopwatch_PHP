let startTime, interval;
let running = false;

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function start() {
  if (!running) {
    startTime = Date.now() - (startTime || 0);
    interval = setInterval(() => {
      document.getElementById("timer").innerText = formatTime(Date.now() - startTime);
    }, 1000);
    running = true;
  }
}

function pause() {
  clearInterval(interval);
  running = false;
}

function reset() {
  pause();
  startTime = 0;
  document.getElementById("timer").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    const time = formatTime(Date.now() - startTime);
    const li = document.createElement("li");
    li.innerText = "Lap: " + time;
    document.getElementById("laps").appendChild(li);

    fetch('save_lap.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `time=${encodeURIComponent(time)}`
    });
  }
}
