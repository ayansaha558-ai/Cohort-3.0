let count=0;
let progress=document.querySelector(".progress-bar .progress");
let percent=document.querySelector(".card p")
let text=document.querySelector(".card h3");

let tm=setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width=`${count}%`;
        percent.textContent=`${count}%`;
    }else{
        text.textContent="Download Complete";
        clearInterval(tm);
    }
},5*1000/100);