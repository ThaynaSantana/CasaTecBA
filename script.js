windows.onload = function() {

    var seconds = 00;
    var tens = 00;
    var appendSeconds = document.getElementById('');
    var appendsTens = document.getElementById('');
    var interval;

    clearInterval(interval);
    interval = setInterval(startTimer, 10);

    if (tens=="00" && seconds=="00" ) {
        clearInterval(interval);

        appendSeconds.innerHTML = seconds;
        appendsTens.innerHTML = tens;
    }

    function startTimer() {
        tens++;
        if(tens <= 9) {
            appendsTens.innerHTML = "0" + tens;
        }
        if(tens < 9){
            appendsTens.innerHTML = tens;
        }
        if(tens < 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendsTens.innerHTML = "0" + tens;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}