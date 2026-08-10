let form=document.querySelector("#form");
let mail=document.querySelector("#email");
let pass=document.querySelector("#password");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    let emailror = emailRegex.test(mail.value);
    let passor = passwordRegex.test(pass.value);

    let valid=true;

    if(!emailror){
        document.querySelector("#emailError").textContent = "Email is invalid";
    }

    if(!passor){
        document.querySelector("#passwordError").textContent = "Password is invalid";
    }
    });

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailror=emailRegex.test(email.value);
    let passor=passwordRegex.test(password.value);

    if(!emailror){
        document.querySelector("#emailError").textContent="Email is invalid";
        valid=false;
    }

    if(!passor){
        document.querySelector("#passwordError").textContent="Password is invalid";
        valid=false;
    }

    if(valid){
        form.submit();
    }

});