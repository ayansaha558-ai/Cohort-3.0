let hd = document.querySelector("#lora");

window.addEventListener("keydown", function(dets){
    if(dets.key===" ")  hd.textContent="SPC";
    else    hd.textContent = dets.key;
});