let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const winnerPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{
      turnO=true;
      enableboxed();
      msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button clicked");
       if(turnO===true)
       {
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    })
});
const disablesboxed=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxed=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
  msg.innerText=`Congrats, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");   
}

const checkWinner=()=>{
    for(let pattern of winnerPatterns)
    {
         let pos1=boxes[pattern[0]].innerText;
         let pos2=boxes[pattern[1]].innerText;
         let pos3=boxes[pattern[2]].innerText;

         if(pos1 !="" && pos2 !="" && pos3!="")
         {
            if(pos1===pos2&&pos2===pos3)
            {
                console.log("Winner",pos1);
                showWinner(pos1);
                disablesboxed();
                
            }
         }
    }


}
newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);