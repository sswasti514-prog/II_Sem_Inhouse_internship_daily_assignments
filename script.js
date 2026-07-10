// ------------------
// Dark Mode
// ------------------

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀️ Light Mode";

}

else{

darkBtn.innerHTML="🌙 Dark Mode";

}

});



// ------------------
// Click Counter
// ------------------

let count = 0;

const clickBtn=document.getElementById("clickBtn");
const resetBtn=document.getElementById("resetBtn");
const display=document.getElementById("count");

clickBtn.addEventListener("click",()=>{

count++;

display.innerHTML=count;

});

resetBtn.addEventListener("click",()=>{

count=0;

display.innerHTML=count;

});




// ------------------
// Form Validation
// ------------------

const form=document.getElementById("myForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";



if(name===""){

document.getElementById("nameError").innerHTML="Please enter your name.";

valid=false;

}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email===""){

document.getElementById("emailError").innerHTML="Please enter email.";

valid=false;

}

else if(!emailPattern.test(email)){

document.getElementById("emailError").innerHTML="Invalid Email.";

valid=false;

}

if(valid){

alert("Form Submitted Successfully 🎉");

form.reset();

}

});