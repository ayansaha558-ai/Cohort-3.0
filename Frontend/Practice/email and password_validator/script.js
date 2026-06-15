let nm=document.querySelector("#name");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    if(nm.value.length<=2){
        document.querySelector(".hidden").style.display="initial";
    }else{
        form.submit();
    }
});
