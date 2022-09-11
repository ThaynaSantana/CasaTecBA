function startTimer(duration, display){
    var timer = duration, months, days, hours, minutes, seconds;

    changeNumbers = function() {
        minutes = parseInt(timer/60,10);
        seconds = parseInt(timer%60,10);
        hours = parseInt(minutes/60,10)
        days = parseInt(hours/24,10)
        months = parseInt(days/30,10)
    
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        hours = hours < 10 ? "0" + hours : hours;
        days = days > 24 ? days++ : days++;
    
        display.textContent = months +" meses"; //display defaulth
    
        if(--timer < 0) {
            timer = duration;
        }
    }
    changeNumbers()
    let i = 0;
    trocaDisplay = function(){
        
        i+= 1;
        switch(i) {
            case(1):
                display.textContent = days + " dias";
                break;
            case(2):
                display.textContent = hours + " horas";
                break;
            case(3):
                display.textContent = minutes + " minutos";
                i=0;
                break;
        }
            
    }
}

window.onload = function() {
    var duration = 7786000; // em segundos
    var display = document.querySelector("#timer"); //Elemento para exibir o timer

    startTimer(duration, display); // iniciando a função 
}