const mainButton=document.querySelector("button");
const body=document.body;
const currentColor=document.querySelector(".current-color");


function randomColourGenerator(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb( ${red},${green},${blue})`;
    return randomColor;
}


mainButton.addEventListener("click",()=>{
    const randomColor = randomColourGenerator();
   body.style.backgroundColor=randomColor;
   currentColor.textContent=randomColor;
})


