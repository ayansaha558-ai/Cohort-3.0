let toggle=document.querySelector("#toggle");
let nav=document.querySelector("nav")
let task_windowDiv=document.querySelector(".task-window");
let sidebarDiv=document.querySelector(".sidebar")
let sidebar_optionsDiv=document.querySelector(".sidebar-options")
let task_containerDiv=document.querySelector(".task-container");

//overlay selects
let overlayDiv=document.querySelector(".overlay");
let overlay_inp=document.querySelector("#edit-task"); 
let overlay_category=document.querySelector("#edit-category");
let overlay_buttons=document.querySelector(".overlay-buttons");

//form div add
let formDiv_inp=document.querySelector(".task-input-box form");
//task input box add
let task_inpDiv=document.querySelector(".task-input");
//clear complete button
let clear_completeBtn=document.querySelector(".clear-completeBtn");
//category filter
let category_filterDiv=document.querySelector(".category-filter");

//task manager select
let sidebar_contentsDiv=document.querySelector(".sidebar-contents");

let curr_category="all";

toggle.addEventListener("change",()=>{
    nav.classList.toggle("dark");
    sidebarDiv.classList.toggle("dark");
    overlayDiv.classList.toggle("dark");

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.toggle("dark");
    });
});

// sidebar_optionsDiv.addEventListener("click",(dets)=>{
//     let opt=dets.target.closest(".sidebar-contents");

//     if(!opt) return;

//     document.querySelectorAll(".sidebar-contents").forEach(ele=>{
//         ele.classList.remove("click");
//     });

//     opt.classList.add("click")
// });

let editing_index=-1;

let ui=()=>{
    task_containerDiv.innerHTML="";

    let filtered_arr=arr;

    if(curr_category!="all"){
        filtered_arr=arr.filter((ele)=>ele.task_catagory==curr_category);
    }

    filtered_arr.forEach((ele,ind)=>{
        task_containerDiv.innerHTML+=`<div class="task-list">
              <div class="task-item ${ele.completed ? "done": ""}" >
                <input type="checkbox" class="round-checkbox" ${ele.completed ?"checked": ""} />

                <div class="task-type">
                  <h5 class="${ele.completed ? "done" : ""}" >${ele.task_name}</h5>
                  <p>${ele.task_catagory}</p>
                </div>

                <div class="task-edit">
                  <i class="ri-edit-line" data-index="${arr.indexOf(ele)}"></i>
                  <i class="ri-check-fill" data-index="${arr.indexOf(ele)}"></i>
                  <i class="ri-delete-bin-6-line" data-index="${arr.indexOf(ele)}"></i>
                </div>
              </div>
            </div>`
    });

    document.querySelector(".task-count").textContent=(arr.filter(elem=>!elem.completed)).length;
};

let arr=JSON.parse(localStorage.getItem("tasks")) || [];
ui();

formDiv_inp.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    let task_name=formDiv_inp[0].value;
    let task_catagory=formDiv_inp[1].value;

    if(task_name.trim()==="" || task_catagory.trim()===""){
        alert("🎭 Anonymous tasks aren't allowed here. Name it and pick a category!");
        return;
    }

    let obj={
        task_name,
        task_catagory,
        completed:false
    };

    arr.push(obj);

    saveData();
    ui();

    formDiv_inp.reset();
});

task_containerDiv.addEventListener("click",(dets)=>{
    let edit=dets.target.closest(".ri-edit-line");
    let check=dets.target.closest(".ri-check-fill");
    let del=dets.target.closest(".ri-delete-bin-6-line");

    if(edit){
        let index=edit.dataset.index;

        editing_index=Number(index);

        overlayDiv.style.display="flex";

        overlay_inp.value=arr[index].task_name;
        overlay_category.value=arr[index].task_catagory;

        saveData();
        ui();
    }if(del){
        let index=del.dataset.index;

        editing_index=Number(index);

        arr.splice(index,1);

        saveData();
        ui();

    }if(check){
        let index=check.dataset.index;
        editing_index=index;

        arr[index].completed=!arr[index].completed;

        document.querySelector(".task-type h5").classList.toggle("done");

        saveData();
        ui();
    }
});

//overlay buttons addlistener
overlay_buttons.addEventListener("click",(dets)=>{
    let saveBtn=dets.target.closest("#save-changes");
    let cancelBtn=dets.target.closest("#cancel");

    if(saveBtn){
        arr[editing_index].task_name=overlay_inp.value;
        arr[editing_index].task_catagory=overlay_category.value;

        overlayDiv.style.display="none";

        saveData();
        ui();
    }if(cancelBtn){
        overlayDiv.style.display="none";
    }
});

clear_completeBtn.addEventListener("click",(dets)=>{
    arr=arr.filter(elem=>!elem.completed);

    saveData();
    ui();
});

//category add event listener
category_filterDiv.addEventListener("change",(dets)=>{
    curr_category=dets.target.value;

    ui();
});

//local storage pe rakhna
let saveData=()=>{
    localStorage.setItem("tasks",JSON.stringify(arr));
};

//side bar options mein select karne pe jo select hoga
let pages=document.querySelectorAll(".page");

let showPages=(id)=>{
    pages.forEach((page)=>{
        page.classList.remove("active");
    });

    document.querySelector(`.${id}`).classList.add("active");
};

sidebar_optionsDiv.addEventListener("click",(dets)=>{
    let topic=dets.target.closest("p");

    if(!topic)  return;

    document.querySelectorAll(".sidebar-contents").forEach((ele)=>{
        ele.classList.remove("click");
    });

    topic.closest(".sidebar-contents").classList.add("click");

    showPages(topic.id);
});

