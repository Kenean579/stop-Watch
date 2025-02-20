const display=document.getElementById("display");
let timer=null;
let starttime=0;
let elapsetime=0;
let isrunning=false;
let statuss=document.getElementById("status");

function start(){
    if(!isrunning){
        starttime=Date.now()- elapsetime;
        timer=setInterval(update,10);
        statuss.textContent="Timing";
        isrunning=true;
    }
}

function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsetime=Date.now() -starttime;
        statuss.textContent="Stoped";
        isrunning=false;
    }

}
function reset(){
    clearInterval(timer);
     starttime=0;
     elapsetime=0;
     isrunning=false;
     statuss.textContent="Reseted";
     display.textContent="00:00:00:00";
}
function update(){
    const currenttime=Date.now();
    elapsetime=currenttime-starttime;

    let hours=Math.floor(elapsetime/(1000*60*60));
    let minutes=Math.floor(elapsetime/(1000*60)%60);
    let seconds=Math.floor(elapsetime/1000%60);
    let miliseconds=Math.floor(elapsetime%1000/10);
    
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    miliseconds=String(miliseconds).padStart(2,"0");
    display.textContent=`${hours}:${minutes}:${seconds}:${miliseconds}`;
}