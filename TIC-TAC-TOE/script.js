const boxes=document.querySelectorAll('.box');
const playerDisplay=document.querySelector('.display-player');
const resetButton=document.querySelector('#reset');
const announcer=document.querySelector('.announcer');
let board=['','','','','','','','',''];
let currentPlayer='X';
let gameActive=true;

const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkwin=()=>{

    for(let i=0;i<winningConditions.length;i++){

        const winCondition=winningConditions[i];

        const a=board[winCondition[0]];
        const b=board[winCondition[1]];
        const c=board[winCondition[2]];

        if(a==='' || b==='' || c===''){
            continue;
        }

        if(a===b && b===c){
            return i;
        }

    }

    return -1;
}

const gameloop=()=>{
    boxes.forEach(box=>box.addEventListener('click',handleBoxClick));
    resetButton.addEventListener('click',handleReset);
}

const handleBoxClick=(e)=>{

    const box=e.target;
    const boxIndex=box.getAttribute('data-index');

    if(board[boxIndex]!==''||!gameActive){
        return;
    }
    board[boxIndex]=currentPlayer;
    box.textContent=currentPlayer;

if(currentPlayer==="X"){
    box.classList.add("x");
}
else{
    box.classList.add("o");
}
    const winIndex=checkwin();
    if(winIndex!==-1){
        showStrike(winIndex,currentPlayer);
        announcer.textContent=`Player ${currentPlayer} wins!`;
        gameActive=false;
        return;
    }
    if(!board.includes('')){
        announcer.textContent="It's a draw!";
        gameActive=false;
        return;
    }
    currentPlayer=currentPlayer==='X'?'O':'X';
    playerDisplay.textContent=`Player ${currentPlayer}'s turn`;
    
}
const handleReset=()=>{

    board=['','','','','','','','',''];
    gameActive=true;
    currentPlayer='X';

    playerDisplay.textContent=`Player ${currentPlayer}'s turn`;
    announcer.textContent='';

    boxes.forEach(box=>{
        box.textContent='';
        box.classList.remove("x");
        box.classList.remove("o");
    });

    strike.style.width="0";
    strike.style.transform="rotate(0deg)";
}
gameloop();

const strike=document.getElementById("strike");

const showStrike = (winIndex, player) => {

    strike.style.width = "0px";

    // color based on winner
    if(player === "X"){
        strike.style.background =
        "linear-gradient(to right,#ff2222,#ff6666,#ff2222)";
        strike.style.boxShadow = "0 0 15px red";
    }
    else{
        strike.style.background =
        "linear-gradient(to right,#3399ff,#66ccff,#3399ff)";
        strike.style.boxShadow = "0 0 15px #3399ff";
    }

    switch(winIndex){

    
        case 0:
            strike.style.top = "78px";
            strike.style.left = "0px";
            strike.style.transform = "rotate(0deg)";
            animateStrike("490px");
            break;
  
        case 1:
            strike.style.top = "244px";
            strike.style.left = "0px";
            strike.style.transform = "rotate(0deg)";
            animateStrike("490px");
            break;

    
        case 2:
            strike.style.top = "410px";
            strike.style.left = "0px";
            strike.style.transform = "rotate(0deg)";
            animateStrike("490px");
            break;

        case 3:
            strike.style.top = "0px";
            strike.style.left = "78px";
            strike.style.transform = "rotate(90deg)";
            animateStrike("500px");
            break;

        case 4:
            strike.style.top = "0px";
            strike.style.left = "244px";
            strike.style.transform = "rotate(90deg)";
            animateStrike("500px");
            break;

        case 5:
            strike.style.top = "0px";
            strike.style.left = "410px";
            strike.style.transform = "rotate(90deg)";
            animateStrike("500px");
            break;

        
        case 6:
            strike.style.top = "30px";
            strike.style.left = "20px";
            strike.style.transform = "rotate(45deg)";
            animateStrike("650px");
            break;

  
        case 7:
            strike.style.top = "470px";
            strike.style.left = "20px";
            strike.style.transform = "rotate(-45deg)";
            animateStrike("650px");
            break;
    }
}
const animateStrike = (length) => {
    setTimeout(() => {
        strike.style.width = length;
    }, 30);
}