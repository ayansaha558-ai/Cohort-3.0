let formDiv=document.querySelector("form");
let students_listDiv=document.querySelector(".students-list");

let arr=JSON.parse(localStorage.getItem("students")) || [];

let savedata=()=>{
    localStorage.setItem("students",JSON.stringify(arr))
}


formDiv.addEventListener("submit",(dets)=>{
    console.log("submit fired");
    dets.preventDefault();

    let name=formDiv[0].value;
    let course=formDiv[1].value;

    if(name.trim()==="" || course.trim()===""){
        alert("Fields are emptier than my bank account after ordering food online.");
        return;
    }

    let obj={
        name,
        course
    }

    arr.push(obj);
    savedata();

    ui();
    formDiv.reset();
})

let ui=()=>{
    students_listDiv.innerHTML="";

    arr.forEach((ele,ind) => {
        students_listDiv.innerHTML += `
        <div class="student-card">

            <div class="std-list-des">
                <h4>${ele.name}</h4>
                <h5>${ele.course}</h5>
            </div>

            <div class="std-list-btn">
                <button class="delete" data-index="${ind}">
                    Delete
                </button>
            </div>

        </div>
        `;
    });
    document.querySelector("span").textContent=arr.length;
}

students_listDiv.addEventListener("click",(dets)=>{
    let del=dets.target.closest(".delete");

    if(del){
        let index=Number(dets.target.dataset.index);

        arr.splice(index,1);

        ui();
        savedata();
    }
})

ui();