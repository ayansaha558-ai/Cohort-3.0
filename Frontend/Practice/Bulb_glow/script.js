let bulb=document.querySelector(".bulb");
let btn=document.querySelector("button");

btn.addEventListener("click",(dets)=>{
    if(bulb.classList.contains("glow")){
        bulb.classList.remove("glow");
        btn.textContent="ON";
    }else{
        bulb.classList.add("glow");
        btn.textContent="OFF";
    }
});