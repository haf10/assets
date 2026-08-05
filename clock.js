function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    let hourAngle = (hours % 12) * 30 + minutes * 0.5;
    let minuteAngle = minutes * 6;
    let secondAngle = seconds * 6;


    document.getElementById("hourHand")
    .setAttribute(
        "rotation",
        `0 0 ${-hourAngle}`
    );


    document.getElementById("minuteHand")
    .setAttribute(
        "rotation",
        `0 0 ${-minuteAngle}`
    );


    document.getElementById("secondHand")
    .setAttribute(
        "rotation",
        `0 0 ${-secondAngle}`
    );


    document.getElementById("clock").textContent =
    now.toLocaleTimeString();

}


setInterval(updateClock,1000);

updateClock();



document.addEventListener("DOMContentLoaded",()=>{

const overlay=document.getElementById("overlay");

const target=document.getElementById("ar-target");


target.addEventListener(
"targetFound",
()=>{
overlay.style.display="block";
});


target.addEventListener(
"targetLost",
()=>{
overlay.style.display="none";
});


});


function openWebsite(){

window.location.href="main.html";

}
