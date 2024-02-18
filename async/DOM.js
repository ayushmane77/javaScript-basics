// let x=document.querySelector("h1");
// console.log(x);

// let x=document.querySelector("#hello");
// console.log(x);

// var x=document.querySelector(".body_h1");
// console.log(x);

let x=document.querySelector("h1");
document.querySelector("h1").innerHTML="changed HTML";

x.style.color="burlywood";
x.style.backgroundColor="grey";

x.addEventListener("click",function(){
        x.style.backgroundColor="green";
        console.log("hey there");
});
let btn=document.querySelector("button");
let y=document.querySelector("div");
let glowbulb=0;
btn.addEventListener("click",function(){
    if(glowbulb===0){
        y.style.backgroundColor="yellow";
        glowbulb=1;
    }
    else{
        y.style.backgroundColor="transparent";
        glowbulb=0;
    }
});
let multipleSelector=document.querySelectorAll('div');
console.log(multipleSelector);

let id=document.getElementById('box');
id.innerHTML="<h1>Ayush</h1>";
// let xyz=document.getElementById('box')
// xyz.textContent="<h2>Mane</h2>";

const newParagraph=document.createElement('p');
newParagraph.innerHTML="this is a new paragraph in javascript code";
const paragraph=document.getElementById('hello');
paragraph.appendChild(newParagraph);