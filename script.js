const movies={

aishwarya:{

name:"Ponniyin Selvan: Part II (2023)",

image:"ponniyin.jpg.jpeg"

},

aditya:{

name:"Article 370 (2024)",

image:"article370.jpg.jpeg"

},

aamir:{

name:"Sitaare Zameen Par (2025)",

image:"sitarezameenpar.jpg.jpeg"

},

hrithik:{

name:"Fighter (2024)",

image:"fighter.jpg.jpeg"

},

kajol:{

name:"Maa (2025)",

image:"maa.jpg.jpeg"

}

};


function showMovie(actor){

document.getElementById("movieImage").src=movies[actor].image;

document.getElementById("movieName").innerHTML=movies[actor].name;

}