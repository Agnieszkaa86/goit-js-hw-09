const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;
let isEnabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener('click', () => {
    if (isEnabled === true) {
        timerId = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    } else {
        isEnabled === false;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
     isEnabled === true;
  
});
