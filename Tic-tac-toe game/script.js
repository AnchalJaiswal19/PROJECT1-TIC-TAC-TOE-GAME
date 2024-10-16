let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerX,playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    removeColor();

};
 const removeColor=(box)=>{
    
    for(let box of boxes){
        box.style.backgroundColor="#fdf0d5";
    }
}

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turnO){  //playerO
        box.innerText="X";
        box.style.backgroundColor="#003049";
        box.style.color="white";
        turnO=false;

    }
    else{    //PlayerX
        box.innerText="O";
        box.style.backgroundColor="#780000";
        box.style.color="white";
        turnO=true;
    }
     box.disabled=true;

     checkwinner();

   });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    disableBoxes();
};

const checkwinner =()=>{
    for(pattern of winpatterns){
          
            let pos1val=boxes [pattern[0]].innerText;
            let pos2val=boxes [pattern[1]].innerText;
            let pos3val=boxes [pattern[2]].innerText;

            if(pos1val!="" && pos2val!="" && pos3val!=""){
               if(pos1val===pos2val && pos2val===pos3val){
    
                  showWinner(pos1val);

               }
            }    
        }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);