const text =
"Hi Kanny ❤️";

let i = 0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,120);

}

}

typing();

const yes=document.getElementById("yesBtn");

const no=document.getElementById("noBtn");

const popup=document.getElementById("popup");

const tooltip=document.getElementById("tooltip");

const msgs=[

"🥺 Please click YES",

"❤️ Only YES works",

"😘 Don't reject me",

"💕 Pretty Please",

"😂 Nice Try"

];

function move(){

const x=Math.random()*(window.innerWidth-180);

const y=Math.random()*(window.innerHeight-100);

no.style.position="fixed";

no.style.left=x+"px";

no.style.top=y+"px";

tooltip.innerHTML=msgs[Math.floor(Math.random()*msgs.length)];

tooltip.style.left=x+"px";

tooltip.style.top=(y-50)+"px";

tooltip.style.opacity="1";

setTimeout(()=>{

tooltip.style.opacity="0";

},1200);

}

no.addEventListener("mouseover",move);

no.addEventListener("click",move);

yes.onclick=()=>{

popup.style.display="flex";

};
