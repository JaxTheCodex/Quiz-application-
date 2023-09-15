 let dt=new Date(new Date().setTime(0));
 let time=dt.getTime();
 let seconds=Math.floor((time%(100*60))/1000);
 let minutes=Math.floor((time %(1000*60*60))/(1000*60));

 let Time=0;

 let mytime=setInterval(function(){
    if(seconds<59){
        seconds++;
    }
    else
    {
        minutes++;
        seconds=0;
    }
    let formatted_sec= seconds < 10 ? `0${seconds}`:`${seconds}`;
    let formatted_min= minutes < 10 ? `0${minutes}`:`${minutes}`;
    document.querySelector(".time").innerHTML=`${formatted_min}:${formatted_sec}`;
    let timeTaken=document.querySelector(".time").innerHTML=`${formatted_min}:${formatted_sec}`;
    if(timeTaken=="1 minutes and 1 seconds" )
    {
        location.href = "result.html";
    }
 },1000);