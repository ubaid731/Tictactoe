/*
let div=document.querySelector("div");
console.log(div);
console.dir(div);


//How to get id attribute
let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let pa=document.querySelector("p");
console.log(pa.getAttribute("class"));
console.log(pa.setAttribute("class","damn2"));



//How to access style attribute
let div2=document.querySelector("div");
console.log(div2);
div2.style.backgroundColor="red";
'red'
div2.style.fontSize="20px";
'20px'
div2.innerText="Wassup Guys";
*/

//insert element
/*
let newBtn=document.createElement("button");
newBtn.innertxt="Click Me";
let div=document.querySelector("p");
console.log(div);
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);
p.after(newBtn);
*/

let newHeading=document.createElement("h1");
newHeading.innerText="Hello This is new Heading";
document.querySelector("body").prepend(newHeading);


let para=document.querySelector("p");
para.remove();
