let btn=document.querySelector("#btn");
let body=document.querySelector("body");

let mode="light";
btn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        console.log("dark mode activated");
    }
    else{
        mode="light";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        console.log("light mode activated");
    }
});