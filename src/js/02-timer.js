import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix, { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const dateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


let timer = null;
btnStart.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      btnStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Please press "START" to proceed');
    }
       btnStart.disabled = false;
  },
};
flatpickr(dateTime, options);

  function appUpdate() {
   timer = setInterval(() => {
    btnStart.disabled = true;
    const currentTime = new Date().getTime();
    let usersTime = new Date(dateTime.value).getTime();
     const result = usersTime - currentTime;
     
     // Remaining days
    const days = Math.floor(result / (1000 * 60 * 60 * 24));
    // Remaining hours
    const hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Remaining minutes
    const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
    // Remaining seconds
    const seconds = Math.floor((result % (1000 * 60)) / 1000);

    dataDays.innerHTML = days < 10 ? '0' + days : days;
    dataHours.innerHTML = hours < 10 ? '0' + hours : hours;
    dataMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    dataSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    
    if (result < 0) {
      clearInterval(timer);
      dataDays.innerHTML = '00';
      dataHours.innerHTML = '00';
      dataMinutes.innerHTML = '00';
      dataSeconds.innerHTML = '00';
      Notiflix.Notify.info ('Countdown stop!')
    }
  }, 1000);
};
btnStart.addEventListener('click', appUpdate);
  




