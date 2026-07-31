const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const tooltip = document.getElementById("tooltip");
const popup = document.getElementById("popup");

const messages = [

"🥺 Please click YES Kanny Babu ❤️",

"😘 I'm waiting only for YOU ❤️",

"💕 Pretty Please ❤️",

"🥹 Just one YES...",

"💖 Don't say NO",

"😍 You're my favorite person"

];

function moveButton(){

const maxX=window.innerWidth-noBtn.offsetWidth-20;
const maxY=window.innerHeight-noBtn.offsetHeight-20;

const x=Math.random()*maxX;
const y=Math.random()*maxY;

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

tooltip.innerHTML=messages[Math.floor(Math.random()*messages.length)];

tooltip.style.left=(x-20)+"px";
tooltip.style.top=(y-55)+"px";

tooltip.style.opacity="1";

setTimeout(()=>{

tooltip.style.opacity="0";

},1800);

}

noBtn.addEventListener("mouseover",moveButton);
noBtn.addEventListener("click",moveButton);

yesBtn.onclick=function(){

popup.innerHTML=`

<h1>🥹 Thank You Kanny Babu ❤️</h1>

<div class="love">💖</div>

<h2>You clicked YES!! 😍</h2>

<p>

Now my heart is full of happiness 💕

</p>

<p>

Get ready for the cutest surprise...

</p>

`;

};

const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},300);
