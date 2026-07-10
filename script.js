// JSON Object

const profiles = [

{
name:"Swasti Sharma",
branch:"Computer Science Engineering (AI)",
cgpa:8.0,
skills:[
"HTML",
"CSS",
"JavaScript"
],
city:"Jaipur"
},

{
name:"Tanvi Goyal",
branch:"Computer Science Engineering",
cgpa:8.8,
skills:[
"Full Stack Development",
"Programming Queen 👑",
"Debugs before Google does 😎"
],
city:"Jaipur"
},

{
name:"Vibha Jain",
branch:"Computer Science Engineering",
cgpa:8.5,
skills:[
"Employee Whisperer 🤝",
"Professional Communication",
"HR's Favourite Speaker 😂"
],
city:"Jaipur"
},

{
name:"Tanish Sain",
branch:"Computer Science Engineering",
cgpa:8.2,
skills:[
"Always Supports Friends ❤️",
"Friendly Fighter 🥊",
"Unlimited Jokes Generator 😂"
],
city:"Jaipur"
}

];

const container=document.getElementById("profiles");

profiles.forEach(profile=>{

let skillsHTML="";

profile.skills.forEach(skill=>{

skillsHTML+=`<span class="skill">${skill}</span>`;

});

container.innerHTML+=`

<div class="col-lg-6">

<div class="card profile-card">

<div class="card-header">

${profile.name}

</div>

<div class="card-body">

<p><strong>🎓 Branch :</strong> ${profile.branch}</p>

<p><strong>📊 CGPA :</strong> ${profile.cgpa}</p>

<p><strong>🏙️ City :</strong> <span class="city">${profile.city}</span></p>

<p><strong>💡 Skills :</strong></p>

${skillsHTML}

</div>

</div>

</div>

`;

});