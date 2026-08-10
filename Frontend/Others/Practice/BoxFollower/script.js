let abcd=document.querySelector("main .container");

window.addEventListener("mousemove",function(dets){  //window dewa important
    abcd.style.top=dets.clientY+"px";
    abcd.style.left=dets.clientX+"px";
});