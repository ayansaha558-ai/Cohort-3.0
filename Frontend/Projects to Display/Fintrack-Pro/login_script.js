let form_inp=document.querySelector(".login_inputs");

let arr=JSON.parse(localStorage.getItem("users"));

form_inp.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    let username=form_inp[0].value;
    let password=form_inp[1].value;

    let exists=arr.find((ele)=>username===ele.username && password===ele.password);

    if(!exists){
        alert("❌ Invalid username or password.");
        return;
    }

    console.log("login fired")

    localStorage.setItem("currentUser",JSON.stringify(exists))
    window.location.href="dashboard.html"
    form_inp.reset();
});

console.log(arr)