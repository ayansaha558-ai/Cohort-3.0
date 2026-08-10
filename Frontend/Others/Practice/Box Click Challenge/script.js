let btn=document.querySelector("button");

let timer=document.querySelector("#timer");
let scores=document.querySelector("#score");
let overlay=document.querySelector(".overlay");
let box_container=document.querySelector(".box-container");
let box=document.createElement("div");

box.classList.add("box");

let interval;
let score=0;
let time=0;

let randomColor= ()=>{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
};

let randomBox=()=>{
    box.style.backgroundColor=randomColor();
    box_container.append(box);
    box.style.pointerEvents="auto";

    let mainW= box_container.clientWidth-box.offsetWidth;
    let mainH= box_container.clientHeight-box.offsetHeight;

    let rX=Math.random()*mainW;
    let rY=Math.random()*mainH;

    box.style.left=`${rX}px`;
    box.style.top=`${rY}px`;
};

btn.addEventListener("click",()=>{
    clearInterval(interval);
    randomBox();

    interval=setInterval(()=>{
        randomBox();
        time+=1;
        timer.textContent=`${time}`;
    },1000);

    setTimeout(()=>{
        clearInterval(interval);
        overlay.style.display="flex";

        setTimeout(()=>{
            clearInterval(interval);
            overlay.style.display="none";

            timer.textContent="0";
            scores.textContent="0";

        },3000);
    },10000);
});

box.addEventListener("click",()=>{
    score++;
    scores.textContent=`${score}`;

    box.style.pointerEvents="none";
});