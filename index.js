const time = document.querySelector("#time");
const pause = document.querySelector("#pause");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

let startTime = 0;
let paused = false;
let intervalId = 0;
let elapsedTime = 0;
let mins = 0;
let hours = 0;
let secs = 0;

start.addEventListener("click",()=>{
    if (paused)
        paused = false;
    startTime = Date.now();
    intervalId = setInterval(updateTime,1000);
});

pause.addEventListener("click",()=>{
    if (!paused)
        paused = true;
    clearInterval(intervalId);
})

reset.addEventListener("click",()=>{
    clearInterval(intervalId);
    startTime = 0;
    paused = false;
    elapsedTime = 0;
    mins = 0;
    hours = 0;
    secs = 0;
    time.textContent="00:00:00";
})

function updateTime(){
    elapsedTime = Date.now()-startTime;
    secs = Math.floor((elapsedTime/1000)%60);
    mins = Math.floor((elapsedTime/(1000*60))%60);
    hours = Math.floor((elapsedTime/(1000*60*60))%60);
    secs = pad(secs);
    mins = pad(mins);
    hours = pad(hours);
    time.textContent = `${hours}:${mins}:${secs}`;

    function pad(unit){
        let unit1 = "0"+unit;
        if (unit1.length > 2)
            return unit;
        else return unit1;
    }
}

//6:35