const time = document.querySelector('.time-to');

const getDifference = function () {
  let chosenDate = new Date(time.value);

  const updateTimer = function () {
    let timeNow = new Date();

    let distance = chosenDate.getTime() - timeNow.getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.clock-day').innerHTML = days;
    document.querySelector('.clock-hours').innerHTML = hours;
    document.querySelector('.clock-minutes').innerHTML = minutes;
    document.querySelector('.clock-seconds').innerHTML = seconds;

    if (timeNow.getTime() >= chosenDate.getTime()) {
      clearInterval(startTimer);
      document.querySelector('.clock-day').innerHTML = 'D';
      document.querySelector('.clock-hours').innerHTML = 'O';
      document.querySelector('.clock-minutes').innerHTML = 'N';
      document.querySelector('.clock-seconds').innerHTML = 'E';
    }
  };

  let startTimer = setInterval(updateTimer, 1000);
};

time.addEventListener('change', getDifference);
