const fruit=document.getElementById("fruit");
const basket=document.getElementById("basket");
const scoreText=document.getElementById("score");

let basketX=250;
let fruitX=200;
let fruitY=-50;

let score=0;

let speed=4;

let currentFruit="🍎";

document.addEventListener("keydown",(e)=>{

if(e.key=="ArrowLeft" && basketX>0){

basketX-=25;

}

if(e.key=="ArrowRight" && basketX<590){

basketX+=25;

}

basket.style.left=basketX+"px";

});

function newFruit(){

currentFruit=Math.random()>0.5?"🍎":"🍌";

fruit.innerHTML=currentFruit;

fruitX=Math.random()*620;

fruitY=-60;

fruit.style.left=fruitX+"px";

if(currentFruit=="🍎"){

basket.style.width="90px";

}

else{

basket.style.width="150px";

}

}

newFruit();

function gameLoop(){

fruitY+=speed;

fruit.style.top=fruitY+"px";

let basketWidth=parseInt(getComputedStyle(basket).width);

if(

fruitY>500 &&

fruitX>basketX &&

fruitX<(basketX+basketWidth)

){

score++;

scoreText.innerHTML="Score : "+score;

newFruit();

}

if(fruitY>620){

newFruit();

}

requestAnimationFrame(gameLoop);

}

gameLoop();