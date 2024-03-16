let buttons=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".new");
let messagecontainer=document.querySelector(".message");
let msg=document.querySelector("#win");
let chancex=true;
const winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const disable=()=>{
for (const i of buttons) {
    i.disabled=true;
}
}
const enable=()=>{
    for (const i of buttons) {
        i.disabled=false;
        i.innerText="";
    }
    }

const resetgame=()=>{
chancex=true;
enable();
messagecontainer.classList.add("hide");
}
buttons.forEach((btn)=>{
btn.addEventListener("click",()=>{
    if(chancex)
    {
        btn.innerText="X";
        chancex=false;
    }
    else
    {
        btn.innerText="O";
        chancex=true;
    }
    btn.disabled=true;
    checkWinner();
})
})

const winwin=(win)=>{
    msg.innerText=`Congratulations, Winner is ${win}`;
    
    messagecontainer.classList.remove("hide");
    disable();
}
const checkWinner=()=>{
    for (let i of winpattern) {
        let valone=buttons[i[0]].innerText;
        let valtwo=buttons[i[1]].innerText;
        let valthree=buttons[i[2]].innerText;
        if(valone!=""&&valtwo!=""&&valthree!="")
        {
            if(valone===valtwo&&valtwo===valthree)
            {
                console.log("winner",valone);
                winwin(valone);
            }
           
        }
    }
}
reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);