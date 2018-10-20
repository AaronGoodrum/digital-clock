function setClock () {
  const clockTime = new Date();
let hour = clockTime.getHours();
let minute = clockTime.getMinutes();
let second = clockTime.getSeconds();

  minute = checkTime(minute);
  second = checkTime(second);

  document.getElementById('hour').innerHTML = hour + ":";
  document.getElementById('minute').innerHTML = minute + ":";
  document.getElementById('second').innerHTML = second;
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

setInterval(setClock, 500);