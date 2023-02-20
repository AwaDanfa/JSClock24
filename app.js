/* 

    ​Display the time to users. ...
  
 */
// define the variables
const display = document.getElementById('clock');

let alarmTime = null;
let alarmTimeout = null;

const updateTime = () => {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());



    display.innerText=`${hour} : ${minutes} : ${seconds}`
}
// To have a nice digital display, we'll create a function which format's the time values. 
// It places a leading zero if the number is only one digit, otherwise it uses the number. 
// So for example if the time value provided is 9, it returns 09 instead.
const formatTime = (time) =>  {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}


setInterval(updateTime, 1000);