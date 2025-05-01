/*
let str="apna college";
let size=0;
for(let val of str){
    console.log(val);
    size++;
}
console.log("string size is ",size);


let student={
    name:"Ubaid Ullah",
    age:20,
    class:"IET",
    isPass:true,
};
for(let key in student){
    console.log("key is ",key,"and value is: ",student[key]);
}
*/

/*
let num=0;
for(let i=0;i<=100;i++)
{
    if(i%2==0){
        console.log(i,"is even number");
    }
    else if(i%2!=0){
        console.log(i,"is odd number");
    }
    else{
        console.log(i,"is not a number");
    }
}
*/
/*
let guessnum=25;
let usernum=prompt("guess the number");
while(usernum!=guessnum){
    usernum=prompt("try again");
}
console.log("you guessed the number correctly");
*/
/*
let obj={
    item:"phone",
    price:10,
}
let output=`the pice of ${obj.item} is ${obj.price}`;
console.log(output);
*/

/*
let str="Ubaid";
let newstr=str.toUpperCase();
console.log(newstr);
let newstr1=str.toLowerCase();
console.log(newstr1);
console.log(str.trim());
console.log(str.slice(1,3));
console.log(str.concat(newstr));
let newstr2=str.replace("a","A");
console.log(newstr2);
*/

username=prompt("Enter the username");
//random=prompt("Enter radom assign number");
console.log("@"+username.concat(username.length));
