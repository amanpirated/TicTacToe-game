let boxes=document.querySelectorAll(".btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let resetGame=document.querySelector(".resetGame");
let newGame=document.querySelector(".newGame");
const winningPattern=[
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let turn = true;
let count=0;
boxes.forEach(box => {
    box.addEventListener("click",function(){
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
       if(count==9 && !isWinner){
          gameDraw();
       }
    })
});
const reset=()=>{
    turn=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const gameDraw=()=>{
    msg.innerText="No Winner Game is drawn";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
checkWinner= ()=>{
    for(let pattern of winningPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}
resetGame.addEventListener("click",reset);
newGame.addEventListener("click",reset);

