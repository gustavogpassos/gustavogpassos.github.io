loadEventListeners();

function loadEventListeners() {
    //document.addEventListener('DOMContentLoaded', function() { calctimeto(); });
};



var d = new Date().getUTCDate();
var m = new Date().getUTCMonth();
var y = new Date().getFullYear();

d += 1;
m += 1;

hoje = y + '-' + m + '-' + d;

//console.log(hoje);

document.getElementById('target-date').setAttribute('min', hoje);


var timeTo = document.getElementById('target-date').value,
    date,
    now = new Date(),
    newYear = new Date('1.1.2020').getTime(),
    startTimer = '';

function calctimeto(targetDate) {
    //console.log(finalDate);

    //var finalDate = new Date(date).getTime();

    clearInterval(startTimer);

    if (typeof (targetDate) == 'undefined') {
        date = new Date(newYear).getTime();
    } else {
        date = new Date(targetDate);
        date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000 + (0) * 60 * 60 * 1000);
        console.log(date);
        var dataCerta = date.getTime();
    }

    function updateTimer(finalDate) {

        //finalDate.setTime( finalDate.getTime() + finalDate.getTimezoneOffset() * 60 * 1000 + (-3) * 60 * 60 * 1000)

        var now = new Date();

        now.setTime(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + (-3) * 60 * 60 * 1000);

        //console.log(now);

        var newNow = now.getTime();

        var difference = finalDate - newNow;

        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60) / (1000 * 60)));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        //console.log(days);

        document.querySelector('.clock-days').innerHTML = days;
        document.querySelector('.clock-hours').innerHTML = hours;
        document.querySelector('.clock-minutes').innerHTML = minutes;
        document.querySelector('.clock-seconds').innerHTML = seconds;


        if (newNow >= targetDate) {
            clearInterval(startTimer);
            document.querySelector('.clock-days').innerHTML = '0';
            document.querySelector('.clock-hours').innerHTML = '0';
            document.querySelector('.clock-minutes').innerHTML = '0';
            document.querySelector('.clock-seconds').innerHTML = '0';
        }
    }

    startTimer = setInterval(function () { updateTimer(dataCerta); }, 1000);

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


function generatePassword() {
    var isSelected = 0;

    var mainString = '';

    var upperOption = document.getElementById('upper').checked;
    var lowerOption = document.getElementById('lower').checked;
    var numberOption = document.getElementById('number').checked;
    var specialOption = document.getElementById('special').checked;
    var passLenght = document.getElementById('lenght').value;

    if (upperOption) {
        mainString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        isSelected += 1;
    }
    if (lowerOption) {
        mainString += 'abcdefghijklmnopqrstuvwxyz';
        isSelected += 1;
    }
    if (numberOption) {
        mainString += '0123456789';
        isSelected += 1;
    }
    if (specialOption) {
        mainString += '!@#$*.-+';
        isSelected += 1;
    }

    if (isSelected == 0) {
        window.alert('Selecione pelo menos uma opção.')
    } else if (passLenght < 8) {
        window.alert('O tamanho mínimo para a senha é 8 digitos');
    } else {
        //var shuffled = mainString.split('').sort(function () { return 0.5 - Math.random() }).join('');
        var genPassword = '';
        for (var i = 0; i <= passLenght; i++) {
            genPassword += mainString.charAt(Math.random() * passLenght);
        }
        document.getElementById('generated-password').value = genPassword;
    }

}
