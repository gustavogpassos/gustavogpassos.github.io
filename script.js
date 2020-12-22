function calctimeto(time) {
    console.log(time);

    today = new Date();

    console.log(today.getTime());
}


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