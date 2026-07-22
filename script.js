/* ==========================================
   Brandcraft by RCK
   Premium JavaScript
========================================== */

// Sticky Navbar Background
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 80) {
        nav.style.background = "#3D3A3A";
        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";
    } else {
        nav.style.background = "rgba(75,73,73,.92)";
        nav.style.boxShadow = "none";
    }
});


// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});


// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section,.card,.founder").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});


// Hero Typing Animation

const text = "Helping Businesses Build Powerful Brands Through Marketing, Design & Innovation.";

const heroText = document.querySelector(".hero p");

heroText.innerHTML="";

let i=0;

function typing(){

    if(i<text.length){

        heroText.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,25);

    }

}

typing();


// Service Card Hover Glow

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 40px rgba(217,199,181,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 12px 30px rgba(0,0,0,.15)";

});

});


// Founder Card Animation

document.querySelectorAll(".founder").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#D9C7B5";
topBtn.style.color="#333";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.transition=".3s";
topBtn.style.zIndex="9999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Loading Animation

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});


// Console Branding

console.log("%cBrandcraft by RCK",
"font-size:22px;color:#D9C7B5;font-weight:bold;");

console.log("Rooted In Strategy. Rising With Brands.");