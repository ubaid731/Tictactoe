/*
function sum()
{
    console.log("Hello World")
    console.log("Hello World")
    console.log("Hello World")
}
sum();

function summ(x,y)
{
    s=x+y;
    return s;

}
let val=summ(5,2);
console.log(val);


const arrowmul=(a,b)=>{
    console.log(a*b);
}
    */


/*
const vow=()=>
{
    let count=0;
    let str="Hello";
    for(let i=0;i<str.length;i++)
    {
        let char=str[i].toLowerCase();
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
        {
            count++;
        }
    }
    console.log("Here are ",count);
    return count;
};

vow();



let arr=[1,2,3,4];
arr.forEach((val)=>
{
    console.log(val);
});

*/

//let arr=[1,2,3,4];
// arr.forEach((val)=>{
//     val*=val;
//     console.log(val);
// });

// let arr=[1,2,3,4];

// let newArr=arr.map((val)=>{
//     return val*=val;
// });
// console.log(newArr);

// const newAr=arr.reduce((res,curr)=>
// {
//   return res+curr;
// });
// console.log(newAr);

/*
let marks=[97,32,87,93,64,99,86];

let newMarks=marks.filter((val)=>
{
    return val>90;    
}
)
console.log(newMarks);
*/

let n=prompt("Enter the number")
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
console.log(arr);

let sumArr=arr.reduce((pre,cur)=>{
   return pre+cur;

});
console.log(sumArr);


let mulArr=arr.reduce((pre,cur)=>{
    return pre*cur;
 
 });
console.log(mulArr);