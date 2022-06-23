//function declaration

function displayTime(){
    //variable
    const timeNow = new Date();
 }

 setInterval(displayTime, 1000);

let hourOfDay = timeNow.getHours();
let minutes = timeNow.getMinutes();
let seconds = timeNow.getSeconds();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let today = weekDay[timeNow.getDay()];
let months = timeNow.toLocaleString("default", { month: "long" });
let year = timeNow.getFullYear();
let period = "AM";

function displayTime(){

    const timeNow = new Date();
 
    let hourOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", { month: "long" });
    let year = timeNow.getFullYear();
    let period = "AM"; 
 
 }

hourOfDay = hourOfDay < 10 ? "0" + hourOfDay : hourOfDay;
// if hourOfDay is less than 10, set hour position to 0 plus hourOfDay else set position to hourOfDay
minutes = minutes < 10 ? "0" + minutes : minutes;
// if minutes is less than 10, set minutes position to 0 plus minutes else set position to minutes
seconds = seconds < 10 ? "0" + seconds : seconds;
// if seconds is less than 10, set seconds position to 0 plus seconds else set position to seconds

let currentTime = hourOfDay + ":" + minutes + ":" + seconds + period;

document.getElementById('Digital_Clock').innerHTML =  currentTime + " " + today +" " + months + " " + year;

setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = "AM";

    if (hoursOfDay > 12) {
        hoursOfDay-= 12;
        period = "PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

    document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;

}
displayTime();


