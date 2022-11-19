let tme=document.getElementById("tme");
let nb=document.getElementById("nb");
let selectMenu =document.querySelectorAll("select");

var sound= new Audio("/download.mp3");
sound.loop=true;




var currentTime=setInterval(function(){
  let d=new Date();
  let h=d.getHours();
  let m=d.getMinutes();
  let s=d.getSeconds();
 
  let ampm="AM";
  
  
  if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
   
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
   let currentTime=h+":"+m+":"+s+":"+ampm;
   
   tme.innerHTML=currentTime;
   
   

 },1000);
 
 function addZero(time){
   return (time<10 ?"0"+time:time);
 }
 
 function hoursmenu (){
   let select=document.getElementById("alarmhrs");
   
  
   for(i=1;i<=12;i++){
     
     select.options[select.options.length]=new 
     Option(i<10 ?"0"+i:i);
   }
 }
hoursmenu();


function minutesmenu (){
   let select=document.getElementById("alarmmins");
   
  
   for(i=1;i<=59;i++){
     
     select.options[select.options.length]=new 
     Option(i<10 ?"0"+i:i);
   }
 }
minutesmenu();


function secondmenu (){
   let select=document.getElementById("alarmsec");
   
  
   for(i=1;i<=59;i++){
     
     select.options[select.options.length]=new 
     Option(i<10 ?"0"+i:i);
   }
 }
secondmenu();


function myFun(){
  
  let hrs=document.getElementById("alarmhrs");
  let mins=document.getElementById("alarmmins");
 let secs=document.getElementById("alarmsec");
 let ampm=document.getElementById("ampm");
 
 let selectHours=hrs.options[hrs.selectedIndex].value;

 let selectMinutes=mins.options[mins.selectedIndex].value;


 let selectSeconds=secs.options[secs.selectedIndex].value;

 let selectAP=ampm.options[ampm.selectedIndex].value;
 
 
 
 var alarmTime=selectHours+":"+
             selectMinutes+":"+
           selectSeconds+":"+
           selectAP;
          
      
        
 
  document.getElementById("alarmhrs").disabled=true;

document.getElementById("alarmmins").disabled=true;

 document.getElementById("alarmsec").disabled=true;
 
 document.getElementById("ampm").disabled=true;         
 
 
console.log(alarmTime)
 
 
 setInterval(function(){
  let d=new Date();
  let h=d.getHours();
  let m=d.getMinutes();
  let s=d.getSeconds();
 
  let session="AM";
  
  
  if(h >= 12) {
        h = h - 12;
        session = "PM";
    }
   
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
 
  
   var currentTime=h+":"+m+":"+s+":"+session;
   
  
   
 if(alarmTime == currentTime){
   
 sound.play();
 }

 },1000);

let j=document.getElementById("alarmhrs").value;

let k=document.getElementById("alarmmins").value

 let l=document.getElementById("alarmsec").value
 
 let m=document.getElementById("ampm").value 
  alert(`Your Alarm Has Set At ${j}:${k}:${l}:${m}`)
};

function clearalrm(){
  document.getElementById("alarmhrs").disabled=false;

document.getElementById("alarmmins").disabled=false;

 document.getElementById("alarmsec").disabled=false;
 
 document.getElementById("ampm").disabled=false;  
 sound.pause();
}





