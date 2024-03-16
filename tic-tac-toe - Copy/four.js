let b=document.querySelectorAll(".box");
let n=document.querySelector(".new");
let msgcontainer=document.querySelector(".msg");
let w=document.querySelector("#win");
let r=document.querySelector(".reset");
let turnX=true;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function disable()
{
    for (const i of b) {
        b.disabled=true;
    }
}
function enable()
{
    for (const i of b) {
        i.disabled=false;
        i.innerText=" ";
        msgcontainer.classList.add("hide");
        
    }
}
const resetgame=()=>
{
    turnX=true;
    enable();

}
b.forEach((key)=>{
    key.addEventListener("click",()=>{
        if(turnX)
        {
            key.innerText="X";
            turnX=false;
        }
        else
        {
            key.innerText="O";
            turnX=true;
        }
        key.disabled=true;
        check();
    })
})
const display=(winner)=>{
    if(winner!==null)
    w.innerHTML=`Congratulations, Winner is ${winner}`;
else
w.innerHTML="oops no one wins";
    msgcontainer.classList.remove("hide");
    disable();

}
 
let check=()=>{
    let winfound=false;
    for (let i of win) {
        let val1=b[i[0]].innerText;
        let val2=b[i[1]].innerText;
        let val3=b[i[2]].innerText;
        if(val1!=""&&val2!=""&&val3!="")
        {
            if(val1===val2&&val2===val3)
            {
                winfound=true;
                display(val1);
                break;
            }
    
        }
    }
    if(!winfound)
    {
        let empty=false;
        for (const i of b) {
            if(i.innerText==='')
            {
                empty=true;
                break;
            }
        }
        if(!empty)
        {
            display(null);
        }
    }
}
r.addEventListener("click",resetgame);
n.addEventListener("click",resetgame);