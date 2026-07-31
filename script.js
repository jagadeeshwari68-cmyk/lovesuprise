*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

body{

height:100vh;

overflow:hidden;

display:flex;

justify-content:center;

align-items:center;

background:linear-gradient(135deg,#ff8ab5,#ffb6d9,#ffd6ea);

}

.background{

position:fixed;

width:100%;

height:100%;

background:radial-gradient(circle,#ffd6e8,#ff94c2);

z-index:-2;

}

.popup{

width:520px;

background:rgba(255,255,255,.18);

backdrop-filter:blur(18px);

padding:40px;

border-radius:30px;

text-align:center;

box-shadow:0 20px 50px rgba(0,0,0,.25);

color:white;

animation:pop .8s;

}

.popup h1{

font-size:28px;

margin-bottom:20px;

}

.popup h2{

font-size:34px;

margin-bottom:15px;

}

.popup p{

font-size:22px;

margin-bottom:18px;

}

.buttons{

display:flex;

justify-content:center;

gap:30px;

margin-top:30px;

}

button{

padding:16px 42px;

border:none;

border-radius:40px;

cursor:pointer;

font-size:20px;

font-weight:bold;

transition:.3s;

}

#yesBtn{

background:#ff0066;

color:white;

}

#yesBtn:hover{

transform:scale(1.08);

}

#noBtn{

background:white;

color:#ff0066;

position:relative;

}

#tooltip{

position:fixed;

padding:12px 18px;

background:#ff0066;

color:white;

border-radius:30px;

font-weight:bold;

opacity:0;

pointer-events:none;

transition:.3s;

z-index:1000;

}

.hearts span{

position:fixed;

font-size:25px;

animation:fall linear infinite;

}

@keyframes fall{

0%{

transform:translateY(-100px);

opacity:0;

}

100%{

transform:translateY(110vh);

opacity:1;

}

}

@keyframes pop{

from{

transform:scale(.5);

opacity:0;

}

to{

transform:scale(1);

opacity:1;

}
}
