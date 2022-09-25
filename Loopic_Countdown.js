//put this in loopic composition action, the countdown will be called _time

loopic.useOnUpdate("_time", (dynamicId, value, next) => {
     startTimer(value);
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            //make the timer loop when over
            timer = duration;
            //make the timer stay at 0 when over
            //minutes = 00
            //seconds = 00
        }
         const el = loopic.getElement("_time");
    el.domNode.innerHTML = minutes + ":" + seconds;
    }, 1000);
}

