// =========================================
// Mobile Menu
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// =========================================
// FAQ
// =========================================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("i");

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");

        }

        else{

            document.querySelectorAll(".faq-answer").forEach(item=>{

                item.style.maxHeight = null;

            });

            document.querySelectorAll(".faq-question i").forEach(i=>{

                i.classList.remove("fa-minus");

                i.classList.add("fa-plus");

            });

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");

        }

    });

});

// =========================================
// Back To Top
// =========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================================
// Navbar Shadow
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.12)";

        navbar.style.background="rgba(255,255,255,.92)";

    }

    else{

        navbar.style.boxShadow="0 10px 35px rgba(0,0,0,.05)";

        navbar.style.background="rgba(255,255,255,.75)";

    }

});

// =========================================
// Reveal Animation
// =========================================

const revealElements = document.querySelectorAll(

".feature-card,.team-card,.testimonial-card,.price-card,.achievement-card"

);

const reveal=()=>{

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        const height=window.innerHeight;

        if(top<height-100){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

};

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// =========================================
// Smooth Close Mobile Menu
// =========================================

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});