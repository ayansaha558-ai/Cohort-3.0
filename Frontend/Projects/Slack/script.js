let navMenu=document.querySelector(".nav_menu");
let dropBtn=document.querySelector(".dropdown");

navMenu.addEventListener("click",(dets)=>{
    if(dets.target.textContent==="Features"){
        dropBtn.style.display="block";
    }
});

document.body.addEventListener("click",(dets)=>{
    if(!dets.target.closest(".nav_items")){
        dropBtn.style.display="none";
    }
});