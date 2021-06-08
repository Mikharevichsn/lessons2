const secondsSpan = document.querySelector('.seconds');
const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');


let seconds = 0;
let intervalID = null;

btnStart.addEventListener('click', () => {
    // if (intervalID === null) {
    if (!intervalID) {
        intervalID = setInterval(() => {
            seconds += 1;
            secondsSpan.textContent = seconds;
        }, 1000)
    }
})

btnPause.addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = null;
})

btnStop.addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = null;
    seconds = 0;
    secondsSpan.textContent = seconds;
})