/*
let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("button1 clicked");
    let a=26;
    a++;
    console.log(a); 
}
*/

let btn1=document.querySelector("#btn1");
btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type); 
    console.log(evt.target); 
    console.log(evt.clientX);
    console.log(evt.clientY); 
}

btn1.addEventListener("click",(evt)=>{
    console.log("button1 clicked 1 time");
})
btn1.addEventListener("click",()=>{
    console.log("button1 clicked 2 times");
})

const trtime=()=>{
    console.log("button1 clicked 3 times");
    
}
btn1.addEventListener("click",(trtime));


btn1.addEventListener("click",()=>{
    console.log("button1 clicked 4 times");
})

btn1.removeEventListener("click",trtime);


let box=document.querySelector("div");
box.onmouseover=()=>{
    console.log("Mouse hovered over the box");
    box.style.backgroundColor="red";
}