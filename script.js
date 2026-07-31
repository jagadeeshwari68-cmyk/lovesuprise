const overlay=document.getElementById("overlay");

document.getElementById("startBtn").onclick=function(){

overlay.style.display="flex";

}

function closePopup(){

overlay.style.display="none";

}

const hearts=document.querySelector(".hearts");

for(let i=0;i<60;i++){

let h=document.createElement("span");

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=5+Math.random()*5+"s";

h.style.fontSize=15+Math.random()*35+"px";

h.style.animationDelay=Math.random()*5+"s";

hearts.appendChild(h);

}
