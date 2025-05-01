let box=document.querySelector(".box1");
let body=document.querySelector("body");
let hover="blue";
let mode="dark";
let isDark=true;
box.addEventListener("mouseover",()=>{
    
    {
    if(hover==="blue" && mode==="dark")
    {
    mode="dark";
    box.style.backgroundColor="red";
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    console.log("hovered");
    hover="red";
    }
    else{
        hover="blue";
        mode="light";
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        console.log("hovered again");
    }
    }
})