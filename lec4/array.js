let marks=[94,95,96,12,23];
for(let idx=0;idx<marks.length;idx++){
    console.log("Numbers are",marks[idx]);
}
//for of
let heroes=["Superman","Spiderman","Batman","Ironman"];
for(let hero of heroes){
    console.log(hero.toUpperCase());
}

//practice question
marks=[85,97,44,37,76,60];
let avg=0;
for(let i=0;i<marks.length;i++){
    avg+=marks[i]/marks.length;
}
console.log("Average is",avg);

//practice question 2
/*
let prices=[250,645,300,900,50,100];
for(let i of prices){
    //Applying 10% discount
    let discount=i/10;
    let finalprice=i-discount;
    console.log("Final price is",finalprice);

}
*/
let prices=[250,645,300,900,50,100];
for(let i=0;i<prices.length;i++){
    console.log("prices are",prices[i]);
    let discount=prices[i]/10;
    let finalprice=prices[i]-discount;
    console.log("Final price is",finalprice);
}

let push=[250,645];
push.push(300);
console.log(push);
let deletee=push.pop();
console.log(push);
console.log(deletee);
push.toString();
console.log(push);


let hroes=["Superman","Spiderman"]
let iroes=["Batman","Ironman"];
let con=heroes.concat(iroes);
console.log(con);
let nroes=["Superman","Spiderman"];
nroes.unshift("Ubaid");
console.log(nroes);
nroes.shift();
console.log(nroes);


let companies=["Bloomberg","Microsoft","Google","Apple"];
companies.shift();
console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("Amazon")