// ----------------------
// PAGE 1
// ----------------------

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn) {
    yesBtn.onclick = () => {
        window.location.href = "message.html";
    };
}

if (noBtn) {

    function moveButton() {

        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";
    }

    noBtn.addEventListener("mouseenter", moveButton);
    noBtn.addEventListener("touchstart", function(e){
        e.preventDefault();
        moveButton();
    });

}

// ----------------------
// SLIDESHOW
// ----------------------

const slides = document.querySelectorAll(".slide");

if(slides.length){

let current = 0;

slides[current].classList.add("active");

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current >= slides.length){

current = 0;

}

slides[current].classList.add("active");

},5000);

}

// ----------------------
// GIFT BUTTON
// ----------------------

const gift = document.getElementById("giftButton");
const finalMessage = document.getElementById("finalMessage");

if(gift){

gift.onclick = ()=>{

gift.style.display="none";

finalMessage.style.display="block";

confettiBurst();

};

}

// ----------------------
// SIMPLE FIREWORKS
// ----------------------

const canvas = document.getElementById("fireworks");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

function createFirework(){

let x=Math.random()*canvas.width;

let y=Math.random()*canvas.height*0.5;

for(let i=0;i<80;i++){

particles.push({

x:x,
y:y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.dx;

p.y+=p.dy;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

setInterval(createFirework,1000);

animate();

}

// ----------------------
// CONFETTI
// ----------------------

function confettiBurst(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.innerHTML="🎊";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-50px";

c.style.fontSize=(20+Math.random()*20)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform=`rotate(${Math.random()*720}deg)`;

},100);

setTimeout(()=>{

c.remove();

},5000);

}

}
