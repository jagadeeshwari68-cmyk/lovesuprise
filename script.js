// ===============================
// ELEMENTS
// ===============================

const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const tooltip = document.getElementById("tooltip");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const surprisePage = document.getElementById("surprisePage");
const finalPage = document.getElementById("finalPage");

const continueBtn = document.getElementById("continueBtn");
const foreverBtn = document.getElementById("foreverBtn");

const hearts = document.querySelector(".hearts");
const sparkles = document.querySelector(".sparkles");

// ===============================
// MUSIC
// ===============================

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        bgMusic.play();

        musicBtn.innerHTML = "🎵 Pause Music";

        playing = true;

    } else {

        bgMusic.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;

    }

});

// ===============================
// HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("span");

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💝"
    ];

    heart.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);

// ===============================
// SPARKLES
// ===============================

function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.animationDuration =
        (2 + Math.random() * 3) + "s";

    sparkles.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 5000);

}

setInterval(createSparkle, 250);

// ===============================
// TOOLTIP MESSAGES
// ===============================

const messages = [

"🥺 Please click YES Kanny Babu ❤️",

"😘 I'm waiting only for YOU ❤️",

"💕 Pretty Please ❤️",

"🥹 One YES = One Happy Girlfriend",

"😍 Don't break my tiny heart 💖",

"🌹 You know you want to click YES ❤️",

"🥰 I'll be super happy if you click YES",

"💗 Only YES works today 🤭"

];

// ===============================
// ESCAPING NO BUTTON
// ===============================

function moveButton() {

    const padding = 30;

    const maxX =
        window.innerWidth -
        noBtn.offsetWidth -
        padding;

    const maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        padding;

    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

    tooltip.innerHTML =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];

    tooltip.style.left = x + "px";

    tooltip.style.top =
        (y - 55) + "px";

    tooltip.style.opacity = "1";

    setTimeout(() => {

        tooltip.style.opacity = "0";

    }, 1800);

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

    }
);
// ===============================
// YES BUTTON
// ===============================

yesBtn.addEventListener("click", () => {

    popup.style.display = "none";

    surprisePage.style.display = "flex";

    if (bgMusic.paused) {
        bgMusic.play().catch(() => {
            console.log("Music autoplay blocked until user interaction.");
        });

        musicBtn.innerHTML = "🎵 Pause Music";
        playing = true;
    }

});

// ===============================
// CONTINUE BUTTON
// ===============================

continueBtn.addEventListener("click", () => {

    surprisePage.style.display = "none";

    finalPage.style.display = "flex";

});

// ===============================
// FOREVER BUTTON
// ===============================

foreverBtn.addEventListener("click", () => {

    foreverBtn.innerHTML = "💖 I Love You Forever 💖";

    foreverBtn.disabled = true;

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

            heart.innerHTML=
                icons[Math.floor(Math.random()*icons.length)];

            heart.style.position="fixed";

            heart.style.left=
                Math.random()*100+"vw";

            heart.style.top=
                "100vh";

            heart.style.fontSize=
                (20+Math.random()*30)+"px";

            heart.style.pointerEvents="none";

            heart.style.transition=
                "transform 4s linear, opacity 4s linear";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.style.transform=
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
// WINDOW RESIZE
// ===============================

window.addEventListener("resize",()=>{

    tooltip.style.opacity="0";

});
// ========================================
// PART 3C - FINAL
// ========================================

// Random floating hearts in background
function randomHearts() {

    const heart = document.createElement("span");

    const heartsArray = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓"
    ];

    heart.innerHTML =
        heartsArray[Math.floor(Math.random() * heartsArray.length)];

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    heart.style.pointerEvents = "none";

    heart.style.transition =
        "transform 7s linear, opacity 7s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            "translateY(-120vh)";

        heart.style.opacity = "0";

    }, 20);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(randomHearts, 800);

// ========================================
// RANDOM SPARKLES
// ========================================

function randomSparkles(){

    if(!sparkles) return;

    const sparkle=document.createElement("span");

    sparkle.style.left=
        Math.random()*100+"vw";

    sparkle.style.top=
        Math.random()*100+"vh";

    sparkle.style.animationDuration=
        (2+Math.random()*2)+"s";

    sparkles.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },4000);

}

setInterval(randomSparkles,350);

// ========================================
// FOREVER BUTTON EFFECT
// ========================================

foreverBtn.addEventListener("click",()=>{

    alert(
`🥹❤️

Thank You Kanny Babu ❤️

You just made me the happiest person.

I Love You Forever 💖

`);

});

// ========================================
// MUSIC ENDS
// ========================================

bgMusic.addEventListener("ended",()=>{

    bgMusic.play();

});

// ========================================
// TOOLTIP HIDE
// ========================================

document.addEventListener("click",()=>{

    setTimeout(()=>{

        tooltip.style.opacity="0";

    },300);

});

// ========================================
// PREVENT BUTTON OUTSIDE SCREEN
// ========================================

window.addEventListener("resize",()=>{

    noBtn.style.left="";

    noBtn.style.top="";

    noBtn.style.position="relative";

});

// ========================================
// PAGE LOADED
// ========================================

window.addEventListener("load",()=>{

    console.log("❤️ Love Surprise Loaded ❤️");

});

// ========================================
// END
// ========================================
