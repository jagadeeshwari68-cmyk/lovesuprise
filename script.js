// ===============================
// YOUTUBE MUSIC
// ===============================

const player = document.getElementById("player");

const firstSong = "MT99Kwx35eo";
const secondSong = "7Yru3_H5dQo";


function playSong(songId){

    player.src = "";

    setTimeout(()=>{

        player.src =
        "https://www.youtube.com/embed/"
        + songId +
        "?autoplay=1&controls=0&loop=1&playlist="
        + songId +
        "&playsinline=1&rel=0";

    },300);

}



// ===============================
// ELEMENTS
// ===============================

const popup = document.getElementById("popup");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const tooltip = document.getElementById("tooltip");

const surprisePage = document.getElementById("surprisePage");
const finalPage = document.getElementById("finalPage");

const continueBtn = document.getElementById("continueBtn");
const foreverBtn = document.getElementById("foreverBtn");

const hearts = document.querySelector(".hearts");
const sparkles = document.querySelector(".sparkles");



// ===============================
// FLOATING HEARTS
// ===============================

function createHeart(){

    const heart=document.createElement("span");

    const emojis=[
        "❤️",
        "💖",
        "💕",
        "💗",
        "💝"
    ];

    heart.innerHTML =
    emojis[Math.floor(Math.random()*emojis.length)];


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.fontSize =
    (20+Math.random()*25)+"px";


    heart.style.animationDuration =
    (5+Math.random()*4)+"s";


    hearts.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },9000);

}


setInterval(createHeart,350);




// ===============================
// SPARKLES
// ===============================

function createSparkle(){

    const sparkle=document.createElement("span");


    sparkle.style.left =
    Math.random()*100+"vw";


    sparkle.style.top =
    Math.random()*100+"vh";


    sparkle.style.animationDuration =
    (2+Math.random()*3)+"s";


    sparkles.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },5000);

}


setInterval(createSparkle,250);




// ===============================
// NO BUTTON
// ===============================


const messages=[

"🥺 Please click YES Kanny Babu ❤️",

"😘 I'm waiting only for YOU ❤️",

"💕 Pretty Please ❤️",

"🥹 One YES = One Happy Girlfriend",

"😍 Don't break my tiny heart 💖",

"🌹 You know you want to click YES ❤️",

"🥰 I'll be super happy if you click YES",

"💗 Only YES works today 🤭"

];



function moveButton(){


let padding=30;


let maxX =
window.innerWidth -
noBtn.offsetWidth -
padding;


let maxY =
window.innerHeight -
noBtn.offsetHeight -
padding;



let x=Math.random()*maxX;

let y=Math.random()*maxY;



noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";



tooltip.innerHTML =
messages[Math.floor(Math.random()*messages.length)];



tooltip.style.left=x+"px";

tooltip.style.top=(y-55)+"px";

tooltip.style.opacity="1";



setTimeout(()=>{

tooltip.style.opacity="0";

},1800);


}





// Desktop

noBtn.addEventListener(
"mouseenter",
moveButton
);



// Mobile

noBtn.addEventListener(
"touchstart",
function(e){

e.preventDefault();

moveButton();

},
{
passive:false
}

);






// ===============================
// YES BUTTON
// ===============================


yesBtn.addEventListener(
"click",
()=>{


popup.style.display="none";


surprisePage.style.display="flex";


// Start first song

playSong(firstSong);


});






// ===============================
// NEXT SURPRISE BUTTON
// ===============================


continueBtn.addEventListener(
"click",
()=>{


surprisePage.style.display="none";


finalPage.style.display="flex";


// Start second song

playSong(secondSong);


});






// ===============================
// FOREVER BUTTON
// ===============================


foreverBtn.addEventListener(
"click",
()=>{


foreverBtn.innerHTML =
"💖 I Love You Forever 💖";


foreverBtn.disabled=true;


heartExplosion();


});







// ===============================
// HEART EXPLOSION
// ===============================


function heartExplosion(){


for(let i=0;i<80;i++){


setTimeout(()=>{


const heart=document.createElement("span");


const icons=[

"❤️",
"💖",
"💕",
"💗",
"💝",
"🌹"

];



heart.innerHTML =
icons[Math.floor(Math.random()*icons.length)];



heart.style.position="fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.top =
"100vh";


heart.style.fontSize =
(20+Math.random()*30)+"px";


heart.style.pointerEvents="none";


heart.style.transition =
"transform 4s linear, opacity 4s linear";



document.body.appendChild(heart);




setTimeout(()=>{


heart.style.transform =
"translateY(-120vh) rotate(720deg)";


heart.style.opacity="0";


},30);




setTimeout(()=>{


heart.remove();


},4000);



},i*60);


}


}






// ===============================
// TOOLTIP HIDE
// ===============================


document.addEventListener(
"click",
()=>{


setTimeout(()=>{

tooltip.style.opacity="0";

},300);


});






// ===============================
// LOAD
// ===============================


window.addEventListener(
"load",
()=>{

console.log("❤️ Love Surprise Loaded ❤️");

});
