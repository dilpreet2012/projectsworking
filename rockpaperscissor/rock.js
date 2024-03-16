let userScore=0;
let compScore=0;
user=document.querySelector("#user-score");
computer=document.querySelector("#comp-score");
const message=document.querySelector("#msg");
const choices=document.querySelectorAll(".box");
const genCompChoice=()=>{
const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
}
const drawGame=()=>{
    message.innerText="Game is drawn";
    message.style.backgroundColor="black";
}
const showWin=(userwin,userChoice,compChoice)=>{
    if(userwin)
    {
        userScore++;
        user.innerText=userScore;
        message.innerText=`Your move beats computer's ${compChoice}`;
        message.style.backgroundColor="green";
    }
    else{
        compScore++;
        computer.innerText=compScore;
        message.innerText=`computer's ${compChoice} beats your choice, Try again`;
        message.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>
{
console.log("user choice=",userChoice);
const compChoice=genCompChoice();
console.log("computer choice=",compChoice);
if(userChoice===compChoice)
{
    drawGame();
}
else{
    let userwin=true;
    if(userChoice==="rock")
    {
        if(compChoice==="paper")
        {
            userwin=false;
        }
        else
        {
            userwin=true;
        }
    }
    else if(userChoice==="paper")
    {
        if(compChoice==="rock")
        {
            userwin=true;
        }
        else
        {
            userwin=false;
        }
    }

    else{
        if(compChoice==="paper")
        {
            userwin=true;
        }
        else
        {
            userwin=false;
        }
    }
    showWin(userwin,userChoice,compChoice);
}

}

choices.forEach((b)=>{
    b.addEventListener("click",()=>{
        const userChoice=b.getAttribute("id");
        playGame(userChoice);
    })
})