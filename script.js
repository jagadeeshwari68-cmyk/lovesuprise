const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const tooltip = document.getElementById("tooltip");

const messages = [
"🥺 Please click YES Kanny Babu ❤️",
"😘 I'm waiting only for YOU ❤️",
"💔 Don't break my little heart",
"😂 NO isn't available today",
"💕 Pretty Please...",
"🥹 One YES = One Happy Girlfriend"
];

function moveButton(){

const x=Math.random()*(window.innerWidth-180);
const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

tooltip.innerHTML=messages[Math.floor(Math.random()*messages.length)];

tooltip.style.left=x+"px";
tooltip.style.top=(y-45)+"px";

tooltip.style.opacity="1";

setTimeout(()=>{
tooltip.style.opacity="0";
},1500);

}

noBtn.addEventListener("mouseover",moveButton);
noBtn.addEventListener("click",moveButton);

yesBtn.onclick=()=>{

window.location.href="love.html";

};

// Floating hearts

const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(20+Math.random()*25)+"px";

hearts.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

},300);
