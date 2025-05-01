/*
console.log("Hello World");

//Arithmetic Operators
let a=5;
let b=6;
console.log("a+b = ",a+b); //Addition
console.log("a-b = ",a-b); //Subtraction
console.log("a*b = ",a*b); //Multiplication
console.log("a/b = ",a/b); //Division
console.log("a%b = ",a%b); //Modulus
console.log("a**b = ",a**b); //Exponentiation

//Unary Operators
console.log("--a = ",--a); //Decrement
console.log("a-- = ",a--); //Decrement
console.log("a = ",a); //Decrement  
console.log("++a = ",++a); //Increment
console.log("a++ = ",a++); //Increment

//Assignment Operators
a+=10;
console.log("a = ",a); //Addition Assignment
a-=10;
console.log("a = ",a);
a%=10;
console.log("a = ",a); //Modulus Assignment

*/
//Logical Operators
/*
let a=5;
let b=6;
console.log("a&&b = ",a<b&&b>a); //Logical AND
console.log("a||b = ",a<b||b<a); //Logical OR
console.log("!a = ",!(a!=b)); //Logical NOT
*/



//Conditional Statements
/*
let mode="light";
let color;
if(mode=="dark"){
    color="black";
}
else{
    color="white";
}
console.log("color = ",color); //color = black
*/
/*
let num=10;
if(num%2===0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}



let mode="blue";
let color;
if(mode=="dark")
{
    color="black";
}
else if(mode=="light")
{
    color="white";
}
else{
    color="grey";
}
console.log("color = ",color);

let age=90;
let result=age>=18?"Adult":"Not Adult"; //Ternary Operator
console.log(result);
*/

/*
let num=prompt("Enter a number: ");
if(num%5==0)
{
    console.log("Divisible by 5");
}
else{
    console.log("Not Divisible by 5");
}

*/

let score=prompt("Enter your score: ");
if(score>=80 && score<=100)
{
    console.log("A");
}
else if(score>=70 && score<=89)
{
    console.log("B");
}
else if(score>=60 && score<=69)
{
    console.log("C");
}
else if(score>=50 && score<=59)
{
    console.log("D");
}
else if(score>=0 && score<=49)
{
    console.log("F");
}
else{
    console.log("Invalid Score");
}


