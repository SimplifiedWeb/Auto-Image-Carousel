
//Left
const image = document.getElementById("move")
const allimages = document.querySelectorAll("img");

let start = 0;
function scroll(){
    start++;
    if(start>allimages.length-1){
        start = 0;
    }
    image.style.transform = `translateX(${-start*300}px)`  //Give the width Whatever your image width was in my case I give 300px then it's move towards left about 300px to get the second one
}
setInterval(scroll,250);


//Right
const image1 = document.getElementById("move1")
const allimages1 = document.querySelectorAll("img");

let start1 = 0;
function scroll1(){
    start1++;
    if(start1>allimages1.length-1){
        start1 = 0;
    }
    image1.style.transform = `translateX(${-start1*300}px)`
}
setInterval(scroll1,250);

//Middle

const image2 = document.getElementById("move2")
const allimages2 = document.querySelectorAll("img");

let start2 = 0;
function scroll2(){
    start2++;
    if(start2>allimages2.length-1){
        start2 = 0;
    }
    image2.style.transform = `translateY(${-start2*470}px)` //Whatever Height of Your Image give that like 470px the middle image.
}
setInterval(scroll2,250);