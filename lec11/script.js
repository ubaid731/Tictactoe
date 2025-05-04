
//basic object
/*
const student={
    fullName:"Ubaid Ullah",
    marks:89,
    printMark:function(){
        console.log("mark = ",this.marks);
    }
}
*/




/*
const basicTax={
    calcTax(){
        console.log("Tax Rate is 10% on it");
    }
}
const Ubaid={
    salary:5000000,
}
Ubaid__proto__=basicTax;

*/


/*
class ToyotaCar{
    constructor(brand,mileage){
        console.log("constructor is called");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Car Starts");
    }
    stop(){
        console.log("Car Stopped");
    }
    setBrand(brand){
        this.brand=brand;
    }
}
let fortuner=new ToyotaCar("fortuner",10);
let vitz=new ToyotaCar("vitz",12);

*/


/*

class Car{
    constructor(){
        console.log("Lmao");
    }
  start(){
    
    console.log("Car is Starting");
    
  }
  stop(){
    console.log("Car is stopping");
  }
}
class Motorshop extends Car{
    constructor(name){
        super();
        console.log("lmao");
        this.name=name;
        console.log("Not Lmao");
    }
    Repair(){
        console.log("Car is repairing"); 
    }
    
}

let newObj=new Motorshop("fortuner");
  
*/



let Data="HAHAHA";

class User{
      constructor(name,email){
        this.name=name;
        this.email=email;
      }

      viewdata(){
        console.log("Allowing",Data);
      }
}


class Admin extends User
{
   constructor(name,email){
         super(name,email);
         
   }
edit(){
  Data="new Data";
}

}
let user1=new User("Ubaid","wwealltop08@gmail.com");
let admin1=new Admin("Obaid","ubaidbutt@gmail.com");


