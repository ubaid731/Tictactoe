
let x=document.querySelectorAll(".box");
console.log(x);

let idx=1;
for(div of x)
{
     div.innerText=`Hey this is line${idx}`;
     idx++;
     console.log(div.innerText);
}