let buttonRun = document.getElementById("button");// Берём кнопку запуска
let timerShow = document.getElementById("timer"); // Берём блок для показа времени
let startShow = document.getElementById("start"); // Берём блок для показа времени
let endShow = document.getElementById("end"); // Берём блок для показа времени
let nowShow = document.getElementById("now"); // Берём блок для показа времени
let divTime = document.getElementById("time"); // Берём блок для показа времени

console.log("startTimer");
Date.prototype.addMinutes = function (h) {
    this.setSeconds(this.getSeconds() + h);
    return this;
}

function startTimer(timeStart) {
    timeSeconds = timeStart;
    var date = new Date()
    startShow.innerHTML = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
    date.addMinutes(timeSeconds);
    endShow.innerHTML = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;

    divTime.style.display = "";
    buttonRun.style.display = "none";

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}

buttonRun.addEventListener('click', function () {
    startTimer(5400);
})

timer = setInterval(function () {
    seconds = timeSeconds % 60 // Получаем секунды
    minutes = timeSeconds / 60 % 60 // Получаем минуты
    hour = timeSeconds / 60 / 60 % 60 // Получаем часы


    if (timeSeconds <= 0) {
        clearInterval(timer);
    } else if (timeSeconds <= 900) {
        let tttt = document.getElementsByClassName("f_table"); // Берём блок для показа времени
        tttt = tttt[0];
        tttt.innerHTML = `Вы можете оценить огранизацию олипиады заполнив форму
<img src="/frame.png" width="600">`;
    } else {
        timerShow.innerHTML = `${("0" + Math.trunc(hour)).slice(-2)}:${("0" + Math.trunc(minutes)).slice(-2)}`;
        var date = new Date()
        nowShow.innerHTML = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
    }
    --timeSeconds; // Уменьшаем таймер

}, 1000)


