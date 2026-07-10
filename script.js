const students = [

{
name:"Swasti Sharma",
branch:"CSE - AI",
year:"2nd Year",
cgpa:8.0
},

{
name:"Aarav Mehta",
branch:"Computer Science",
year:"3rd Year",
cgpa:9.2
},

{
name:"Priya Verma",
branch:"Information Technology",
year:"2nd Year",
cgpa:8.7
},

{
name:"Rohan Singh",
branch:"Electronics",
year:"4th Year",
cgpa:8.4
},

{
name:"Ananya Gupta",
branch:"Mechanical",
year:"1st Year",
cgpa:9.5
},

{
name:"Kunal Jain",
branch:"Civil",
year:"3rd Year",
cgpa:7.9
}

];

document.getElementById("totalStudents").innerHTML =
`Total Students : <strong>${students.length}</strong>`;

const container=document.getElementById("studentContainer");

students.forEach((student,index)=>{

let color=index%2==0 ? "card-light":"card-dark";

container.innerHTML+=`

<div class="col-lg-4 col-md-6 mb-4">

<div class="card student-card ${color} h-100">

<div class="card-body">

<div class="serial">
#${index+1}
</div>

<h3 class="student-name mt-2">
${student.name}
</h3>

<p class="info">
<b>Branch :</b> ${student.branch}
</p>

<p class="info">
<b>Year :</b> ${student.year}
</p>

<span class="badge bg-warning text-dark">
CGPA : ${student.cgpa}
</span>

</div>

</div>

</div>

`;

});