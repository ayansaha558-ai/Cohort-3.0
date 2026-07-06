let form_inp=document.querySelector(".login_inputs");

let arr=[] || JSON.parse(localStorage.getItem("users"));

let saveData=()=>{
    localStorage.setItem("users",JSON.stringify(arr));
};

form_inp.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    let username=form_inp[0].value;
    let password=form_inp[1].value;

    let exists=arr.find((ele)=>username===ele.username);

    if(exists){
        alert("❌ Account already exists. Try logging in instead.");
        return;
    }

    let obj={
        username,
        password
    }

    arr.push(obj);
    saveData();
    console.log("submit fired")

    alert("🚀 Welcome aboard! Your FinTrack Pro account is ready.");
    window.location.href="index.html"
    form_inp.reset();
});

console.log(arr)