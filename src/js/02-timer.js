import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
let usersTime;


startBtn.disabled = true;
setTime('#datetime-picker', { 
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()){
          Notiflix.Notify.failure('Please choose a date in the future');
        } else {
          startBtn.disabled = false;
          Notiflix.Notify.success();
     }
  },
});


    const convertMs = () => {
      const currentTime = new Date();
      usersTime = new Date(dateTime.value).getTime();
      const result = usersTime - currentTime;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(result / (1000 * 60 * 60 * 24));
      // Remaining hours
      const hours = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60 * 60));
      // Remaining minutes
      const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
      // Remaining seconds
      const seconds = Math.floor((result % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };
