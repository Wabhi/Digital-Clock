function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minut = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minut = (minut < 10) ? "0" + minut : minut;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ":" + minut + ":" + second + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setInterval(showTime, 1000);
}
showTime();