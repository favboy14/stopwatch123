// Get elements
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

// Timer variables
let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

// Format time as HH:MM:SS
function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Update the display
function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
}

// Start button
startBtn.addEventListener('click', () => {
    if (intervalId === null) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateDisplay, 1000);
    }
});

// Stop button
stopBtn.addEventListener('click', () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        elapsedTime = Date.now() - startTime;
    }
});

// Reset button
resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0;
    startTime = 0;
    timeDisplay.textContent = '00:00:00';
});