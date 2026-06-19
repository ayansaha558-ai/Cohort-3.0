let form=document.querySelector("form");
let submitBtn=document.querySelector("#button");
let tasksDiv=document.querySelector(".tasks");

let updatedTask=null;

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    if(form[0].value.trim()===""){
        alert("Please fill all the details");
    }

    if(updatedTask){
        updatedTask.querySelector("h3").textContent=form[0].value;
        updatedTask="";

        submitBtn.value="add";
        form.reset();

        return;
    }

    tasksDiv.innerHTML+=`<div class="task">
            <div class="name">
                <h3>${form[0].value}</h3>
            </div>

            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>`;

    form.reset();
});

tasksDiv.addEventListener("click",(dets)=>{
    if(dets.target.classList.contains("delete")){
        dets.target.closest(".task").remove();

        if(updatedTask===dets.target.closest("delete")){
            updatedTask=null;
            button.value="add";

            form.reset();
        }
    }

    if(dets.target.classList.contains("edit")){
        updatedTask=dets.target.closest(".task");

        form[0].value=updatedTask.querySelector("h3").textContent;
        submitBtn.value="update";

        form[0].focus();
    }
});