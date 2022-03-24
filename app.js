var ramadanDate = "03 April 2022";


function counter(){
    ramadan = new Date(ramadanDate);
    today = new Date();

    remDate = (ramadan - today) / 1000;

    var day = Math.floor((remDate / 3600) / 24);
    var hour = Math.floor((remDate / 3600) % 24);
    var minute = Math.floor((remDate / 60) % 24);
    var second = Math.floor(remDate % 60);


    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}

setInterval(counter, 1000);
counter();