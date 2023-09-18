let time=0;
let second=0;
let minut=0;
let hour=0;
let interval;

let milliseconds;
let lapArr=[]

$(document).ready(function(){
    if (lapArr.length === 0) {
        $("#lapBtn").prop("disabled", true); 
        $("#stopBtn").prop("disabled", true); 
        $("#resetBtn").prop("disabled", true); 


    }
 
}
)

function stopwatch() {
   
    $("#lapBtn").prop("disabled", false); 
    $("#stopBtn").prop("disabled", false); 
    $("#resetBtn").prop("disabled", false); 
 
    if (time == 1000) { 
        time = 0;
        second+=1;
    } 
    if(second==60){
minut++;
second=0
    }
    if(minut==60){
        hour++;
        minut=0;
    }
  
 milliseconds= (time / 10).toFixed(0);
    
   time+=10;
    $("#showTime").html(`${hour<10?"0"+hour:hour}:${minut<10?"0"+minut:minut}:${second < 10 ? "0" + second : second}:${milliseconds < 10 ? "0" + milliseconds : milliseconds}`);
}





$("#startBtn").on("click", function () {
    clearInterval(interval);
    interval = setInterval(stopwatch, 10);
    $("#startBtn").prop("disabled", true); 
    $("#stopBtn").prop("disabled", false); 
   

});

$("#stopBtn").on("click", function () {
    clearInterval(interval);
    $("#startBtn").prop("disabled", false); 
    $("#stopBtn").prop("disabled", true); 

   
});
$("#resetBtn").on("click", function () {
 time=0;
 second=0;
 minut=0;
 hour=0;
 $("#lapBtn").prop("disabled", true); 
 $("#stopBtn").prop("disabled", true); 
 $("#resetBtn").prop("disabled", true); 
 $("#startBtn").prop("disabled", false); 

 $("#showTime").html("00:00:00:00");
 clearInterval(interval);
 lapArr=[];
 lapRender()
})
$("#lapBtn").on("click", function () {
    lapArr.push(`${hour<10?"0"+hour:hour}:${minut<10?"0"+minut:minut}:${second < 10 ? "0" + second : second}:${milliseconds < 10 ? "0" + milliseconds : milliseconds}`)
  
   lapRender();
console.log(lapArr);
});

function lapRender (){
  
    $("#lapContent").html(lapArr.map((el,index)=>{
        return`<div class="w-100 bg-secondary rounded-5 ps-3"><p class="fs-1">${index+1}. ${el}</p></div>`
    }).reverse().join(""))
}