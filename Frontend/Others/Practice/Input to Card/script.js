//selecting inputs & forms
let form =document.querySelector("form");
let inputs=document.querySelectorAll("input");
let container=document.querySelector(".container");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    //creating profile and card
    let card=document.createElement("div");
    card.classList.add("card");

    let profile=document.createElement("div");
    profile.classList.add("profile");

    if(inputs[0].value.trim()==="" && inputs[1].value.trim()==="" && inputs[2].value.trim()==="" &&
inputs[3].value.trim()===""){
    return;  //give "required" in html
}

    //create image
    let img=document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    //creating bio class
    let bio=document.createElement("div");
    bio.classList.add("bio");

    //create h1,h3,p
    let h1=document.createElement("h1");
    h1.textContent=inputs[1].value;

    let h3=document.createElement("h3");
    h3.textContent=inputs[2].value;
    
    let p=document.createElement("p");
    p.textContent=inputs[3].value;

    //creating the structure
    profile.appendChild(img);

    bio.append(h1,h3,p);

    card.appendChild(profile);
    card.appendChild(bio);

    container.appendChild(card);

    // inputs.forEach(function(inp){
    //     if(inp.type!=="submit") inp.value="";
    // });

    form.reset();
    
});

