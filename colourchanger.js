//generate a random colour
let randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
       color+=hex[parseInt(Math.random()*16)];
    }
    return color;
}
const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
let x
const change=function()
{
x=setInterval(()=>{
    document.body.style.backgroundColor=randomColor();
},1000);
}
const unchange=function()
{
clearInterval(x);
}
start.addEventListener("click",change);
stop.addEventListener("click",unchange);