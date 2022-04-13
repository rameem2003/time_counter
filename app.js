


function counter(){
    var ramadan = new Date("13 April 2022 20:50:00").getTime();
    var today = new Date().getTime();

    remDate = (ramadan - today) / 1000;

    var day = Math.floor((remDate / 3600) / 24);
    var hour = Math.floor((remDate / 3600) % 24);
    var minute = Math.floor((remDate / 60) % 24);
    var second = Math.floor(remDate % 60);


    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    console.log(remDate);

    if(day < 0 && hour < 0 && minute < 0 && second < 0){
        document.getElementById("title").innerHTML = "start";
    }
}

setInterval(counter, 1000);
counter();