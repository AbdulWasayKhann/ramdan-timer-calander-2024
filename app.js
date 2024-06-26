let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let endDate= '03/11/2024 00:00:00';
// Date Format in mm/dd/yyyy and time is hh/mm/ss

let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // time calculation for days,hours,minutes and seconds
    let d = Math.floor(distance / ( 1000 * 60 * 60 * 24));
    let h = Math.floor((distance % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % ( 1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % ( 1000 * 60)) / (1000));

    // output the result in element with id
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    // Animate Stroke
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;  
    // 365 days in an year  
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 24 hours in a day    
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;    
    // 60 minutes in an hour
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;    
    // 60 seconds in a minute

    // if the count down in over, write Happy New Year text
    if(distance < 0){
        clearInterval(x);
        document.getElementById("time").style.display = "none";
        document.querySelector(".newYear").style.display = "block";
    }
})