loadEventListeners();

function loadEventListeners() {
	document.addEventListener('DOMContentLoaded', function() { calctimeto(); });
};


var timeTo = document.getElementById('target-date').value,
        date,
		now = new Date(),
		newYear = new Date('1.1.2020').getTime(),
		startTimer = '';

function calctimeto(finalDate) {
    //console.log(finalDate);
    
    //var finalDate = new Date(date).getTime();

    clearInterval(startTimer);

    if(typeof(finalDate) == 'undefined'){
        date = new Date(newYear).getTime();
    }else {
        date = new Date(finalDate).getTime();
    }

    function updateTimer(finalDate) {        

        var now = new Date().getTime();

        var difference = date - now;

        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60) / (1000 * 60)));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        //console.log(days);

        document.querySelector('.clock-days').innerHTML = days;
        document.querySelector('.clock-hours').innerHTML = hours;
        document.querySelector('.clock-minutes').innerHTML = minutes;
        document.querySelector('.clock-seconds').innerHTML = seconds;


        if(now >= date){
			clearInterval(startTimer);
			document.querySelector('.clock-days').innerHTML = '0';
			document.querySelector('.clock-hours').innerHTML = '0';
			document.querySelector('.clock-minutes').innerHTML = '0';
			document.querySelector('.clock-seconds').innerHTML = '0';
		}
    }

    startTimer = setInterval(function(){updateTimer(date);}, 1000);
    
}


//common timer for minutes countdown
function timer() {
    minutes = document.getElementById("minutes").value;
    secconds = document.getElementById("secconds").value;

    console.log(minutes);

    if (minutes == 'undefined' || secconds == 'undefined') {
        window.alert("Timer not defined");
    } else {
        window.alert('your timer is ' + minutes + ' minutes and ' + secconds + ' secconds');
    }
}
