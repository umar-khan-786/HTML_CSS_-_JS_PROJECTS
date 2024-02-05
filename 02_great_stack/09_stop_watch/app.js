const displayTime = document.querySelector(".displayTime");
const buttons = document.querySelector(".buttons");
let [hours, mins, sec] = [0, 0, 0];
let istrue = true;
let timer;
function startTimer() {
  if (istrue) {
    timer = setInterval(() => {
      sec++;
      if (sec == 60) {
        mins++;
        sec = 0;
      }
      if (mins == 60) {
        hours++;
        mins = 0;
      }
      displayTime.children[0].innerHTML = `${hours < 10 ? "0" + hours : hours}`;
      displayTime.children[1].innerHTML = `${mins < 10 ? "0" + mins : mins}`;
      displayTime.children[2].innerHTML = `${sec < 10 ? "0" + sec : sec}`;
    }, 1000);
    istrue = false;
  }
}

function stopTimer() {
  clearInterval(timer);
  istrue = true;
}

function resetTimer() {
  [hours, mins, sec] = [0, 0, 0];
  displayTime.children[0].innerHTML = `${hours < 10 ? "0" + hours : hours}`;
  displayTime.children[1].innerHTML = `${mins < 10 ? "0" + mins : mins}`;
  displayTime.children[2].innerHTML = `${sec < 10 ? "0" + sec : sec}`;
  stopTimer();
}

buttons.children[1].addEventListener("click", startTimer);
buttons.children[0].addEventListener("click", stopTimer);
buttons.children[2].addEventListener("click", resetTimer);
