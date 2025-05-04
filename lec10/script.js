let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const choosComp=()=>{
    let comppchoice=["rock","paper","scissors"];
    let ranChoice=Math.floor(Math.random()*3);
    return comppchoice[ranChoice];
    
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        console.log("You won it!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You won! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        console.log("Computer won it");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost!${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }

};

const playGame=(userChoice)=>{
    console.log("user choose",userChoice);
    let compChoice=choosComp();
    console.log("comp choose",compChoice);

    if(userChoice===compChoice)
    {
        console.log("Draw");
        msg.innerText="Draw.Choose Again";
        msg.style.backgroundColor="#7180AC";
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
       playGame(userChoice);
    })
})