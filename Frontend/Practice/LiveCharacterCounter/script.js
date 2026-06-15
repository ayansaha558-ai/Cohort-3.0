let inp=document.querySelector("input");
let span=document.querySelector("span");
document.body.style.backgroundColor="grey"

inp.addEventListener("input",function(){
    let left=20-inp.value.length;

    if(left<0){
        span.textContent=left;
        span.style.color="red";
    }else{
        span.textContent=left;
        span.style.color="green";
    }
});