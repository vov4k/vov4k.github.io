let buttonRun = document.getElementById("button");// Берём кнопку запуска
let timerShow = document.getElementById("timer"); // Берём блок для показа времени
let startShow = document.getElementById("start"); // Берём блок для показа времени
let endShow = document.getElementById("end"); // Берём блок для показа времени
let nowShow = document.getElementById("now"); // Берём блок для показа времени
let divTime = document.getElementById("time"); // Берём блок для показа времени

Date.prototype.addMinutes = function (h) {
    this.setMinutes(this.getMinutes() + h);
    return this;
}

buttonRun.addEventListener('click', function () {
    timeMinut = 5459;
    var date = new Date()
    startShow.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    date.addMinutes(90);
    endShow.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

    divTime.style.display = "";
    buttonRun.style.display = "none";

    document.documentElement.requestFullscreen();
})

timer = setInterval(function () {
    seconds = timeMinut % 60 // Получаем секунды
    minutes = timeMinut / 60 % 60 // Получаем минуты
    hour = timeMinut / 60 / 60 % 60 // Получаем часы

    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        timerShow.innerHTML = `${Math.trunc(hour)}:${Math.trunc(minutes)}`;
        var date = new Date()
        nowShow.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    }
    --timeMinut; // Уменьшаем таймер

}, 1000)
