let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnX = true;
let cnt=0;
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[1,4,7],[2,5,8],[3,4,5],[6,7,8]];

const draw = () => {
    msg.innerText = `Sorry, Game is DRAW`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    for(let box of boxes) box.disabled = true;
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is "${winner}"`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    for(let box of boxes) box.disabled = true;
}

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="" && pos1val===pos2val && pos1val===pos3val){
            showWinner(pos1val);
        }
    }
}

boxes.forEach(
    (box)=>{
        box.addEventListener("click",()=>{
            if(turnX){
                box.innerText="X";
                box.style.color="red";
                turnX=false;
            }
            else{
                box.innerText="O";
                box.style.color="green";
                turnX=true;
            }
            cnt++;
            box.disabled = true;
            checkWinner();
            if(cnt===9) draw();
        });
    }
)

resetBtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
        turnX = true;
    }
    cnt=0;
})

newGameBtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
        turnX = true;
        msgContainer.classList.add("hide");
        resetBtn.classList.remove("hide");
    }
    cnt=0;
})