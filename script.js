let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStopBtn').textContent = 'Stop';
    }
    running = !running;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    document.getElementById('display').textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}

function reset() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
    document.getElementById('startStopBtn').textContent = 'Start';
}