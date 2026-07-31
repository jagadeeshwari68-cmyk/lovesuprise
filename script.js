const message = `My Love ❤️

I know I made mistakes...

But every heartbeat still whispers your name.

Every day without your smile feels incomplete.

I miss your laugh.
I miss our conversations.
I miss us.

If I ever hurt you,
I'm truly sorry.

Please give me one more chance.

I promise to love you,
respect you,
and make beautiful memories together.

Will you forgive me? ❤️`;

const typing = document.getElementById("typing");
const openBtn = document.getElementById("openBtn");
const letter = document.querySelector(".letter");
const container = document.querySelector(".container");

const forgive = document.getElementById("forgive");
const ignore = document.getElementById("ignore");

const popup = document.getElementById("popup");
const close = document.getElementById("close");

let i = 0;

openBtn.onclick = () => {

    container.classList.add("hidden");
    letter.classList.remove("hidden");

    typeWriter();

};

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

ignore.addEventListener("mouseover",()=>{

    const x=Math.random()*300-150;

    const y=Math.random()*250-125;

    ignore.style.transform=`translate(${x}px,${y}px)`;

});

forgive.onclick=()=>{

    popup.classList.remove("hidden");

}

close.onclick=()=>{

    popup.classList.add("hidden");

}
