var pScore = 0;
var cScore = 0;

const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const matchScreen = document.querySelector(".match");
const pHand = document.querySelector(".player-hand");
const cHand = document.querySelector(".computer-hand");


playBtn.addEventListener("click", function(){
   introScreen.classList.add("fadeOut");
   matchScreen.classList.remove("fadeOut");
});

const options = document.querySelectorAll(".options button");

//clear animation 
const hands = document.querySelectorAll(".hands img");

hands.forEach(hand=>{
    hand.addEventListener("animationend",function(){
        hand.style.animation = "";
    })
})

//computer options
const computerOptions  = ["rock","paper","scissors"];

options.forEach(option =>{
    option.addEventListener("click",function(){
        
        //computer choices
        const random = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[random];

        setTimeout(()=>{
            //update images
        pHand.src = `img/${this.textContent}.png`;
        cHand.src = `img/${computerChoice}.png`;
        //compare
        compare(this.textContent,computerChoice);
        },2000)

        //animations
        pHand.style.animation = "playerShake 2s ease";
        cHand.style.animation = "computerShake 2s ease";
    });
});
  
function updateScore(){
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};


function compare (playerChoice,computerChoice){
    const winner = document.querySelector(".winner");

    //check for tie 
    if(playerChoice === computerChoice){
        winner.textContent = "Its a tie";
        return;
    };

    //check for rock 
    if (playerChoice === "rock"){
        if(computerChoice === "scissors"){
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent ="Computer Wins";
            cScore++;
            updateScore();
            return;
        }
    };

    //check for paper 
    if (playerChoice === "paper"){
        if(computerChoice === "scissors"){
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent ="Player Wins";
            pScore++;
            updateScore();
            return;
        }
    };

    //check for scisssors
    if (playerChoice === "scissors"){
        if(computerChoice === "rock"){
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent ="Player Wins";
            pScore++;
            updateScore();
            return;
        }
    };



};

