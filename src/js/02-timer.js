import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
timerId = 0;
const dateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
let usersTime;
btnStart.disabled = true;

flatpickr(dateTime, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      Notiflix.Notify.success(
        'Please press "start" to proceed'
      );
    }
  },
});


function convertMs() {
  const currentTime = new Date();
  usersTime = new Date(dateTime.value).getTime();
  const result = usersTime - currentTime;

  // Remaining days
  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  // Remaining hours
  const hours = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60 * 60));
  // Remaining minutes
  const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
  // Remaining seconds
  const seconds = Math.floor((result % (1000 * 60)) / 1000);

  document.querySelector('[data-days]').innerHTML =
    days < 10 ? '0' + days : days;
  document.querySelector('[data-hours]').innerHTML =
    hours < 10 ? '0' + hours : hours;
  document.querySelector('[data-minutes]').innerHTML =
    minutes < 10 ? '0' + minutes : minutes;
  document.querySelector('[data-seconds]').innerHTML =
    seconds < 10 ? '0' + seconds : seconds;

  if (result < 0) {
    clearInterval(timerId);
    document.querySelector('[data-days]').innerHTML = '00';
    document.querySelector('[data-hours]').innerHTML = '00';
    document.querySelector('[data-minutes]').innerHTML = '00';
    document.querySelector('[data-seconds]').innerHTML = '00';
  }
}
btnStart.addEventListener('click', flatpickr)

flatpickr()
setInterval(currentTime,1000);

