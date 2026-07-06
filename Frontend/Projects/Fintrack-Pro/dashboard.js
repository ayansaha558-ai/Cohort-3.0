let {username} = JSON.parse(localStorage.getItem("currentUser"));

let sidebar_optionsDiv=document.querySelector(".sidebar-options");
let settings_pageDiv=document.querySelector(".settings-page");
let overlayDiv=document.querySelector(".overlay");

let transaction_list_containerDiv=document.querySelector(".transaction-list-container");

//username show
document.querySelector(".nav-name").innerHTML=`<h5 class="nav-h5">${username}</h5>`
document.querySelector("#name").value=username;

//form
let form_overlayDiv=document.querySelector(".overlay-box form");
let form_settingsDiv=document.querySelector(".form-settings");

//variables

let index=null;

let currency="$";

let curr_category="all-types";

let search_text="";

// local storage and array creation

let arr=JSON.parse(localStorage.getItem("formData")) || [];

let saveDate=()=>{
    localStorage.setItem("formData",JSON.stringify(arr));
}

//dashboard cards
document.querySelector(".total").innerHTML=`0`;
    document.querySelector(".t_expense").innerHTML=`<span class="dash-currency">${currency}</span>0.00`;
    document.querySelector(".t_income").innerHTML=`<span class="dash-currency">${currency}</span>0.00`;
    document.querySelector(".balance").innerHTML=`<span class="dash-currency">${currency}</span>0.00`;


//dark mode toogle

document.querySelector(".slider").addEventListener("click",(dets)=>{
    document.body.classList.toggle("dark");
})

//side bar options

sidebar_optionsDiv.addEventListener("click",(dets)=>{
    let box=dets.target.closest(".sidebar-options-boxes");

    if(!box)    return;

    document.querySelector(".sidebar-options-boxes.active").classList.remove("active");

    box.classList.add("active");

    if(box.classList.contains("dash")){
        box.classList.add("active");
        document.querySelector(".settings-page").classList.remove("show"); ;
        document.querySelector(".dashboard-page").classList.add("show")
    }if(box.classList.contains("set")){
        box.classList.add("active");
        document.querySelector(".dashboard-page").classList.remove("show");
        document.querySelector(".settings-page").classList.add("show");    
    }
})

//transaction button

document.querySelector(".transactionBtn").addEventListener("click",(dets)=>{
    overlayDiv.style.display="flex";
})

document.querySelector(".ri-close-line").addEventListener("click",()=>{
    overlayDiv.style.display="none";
})

overlayDiv.addEventListener("click",(dets)=>{
    if(dets.target==overlayDiv){
        overlayDiv.style.display="none";
    }
})

//overlay ka form

form_overlayDiv.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    if(index!=null){
        arr[index].type=form_overlayDiv[0].value=="income"?"+":"-";
        arr[index].decription=form_overlayDiv[1].value;
        arr[index].amount=form_overlayDiv[2].value;
        arr[index].date=form_overlayDiv[3].value;
        arr[index].category=form_overlayDiv[4].value;

        index=null;
    }else{
        let type=form_overlayDiv[0].value=="income"?"+":"-";
        let type_mode=form_overlayDiv[0].value;
        let decription=form_overlayDiv[1].value;
        let amount=form_overlayDiv[2].value;
        let date=form_overlayDiv[3].value;
        let category=form_overlayDiv[4].value;

        arr.push(
            {type,decription,amount,date,category}
        );
    }

    ui();
    renderChart();
    saveDate();

    form_overlayDiv.reset();
    overlayDiv.style.display="none";
})

let count=0;

let ui=()=>{
    transaction_list_containerDiv.innerHTML="";

    let Total_income=0;
    let total_expense=0;
    let balance=0;

    let filtered_arr=arr;

    if(curr_category!="all-types"){
        if(curr_category=="income"){
            filtered_arr=arr.filter(item=>item.type=="+");
        }if(curr_category=="expense"){
            filtered_arr=arr.filter(item=>item.type=="-");
        }
    }

    if(search_text){
        filtered_arr=filtered_arr.filter(item=>item.decription.toLowerCase().includes(search_text));
    }

    filtered_arr.forEach((ele,ind) => {

        let cls = ele.type === "+" ? "income" : "expense";
        if(cls=="income"){
            Total_income+=Number(ele.amount);
        }else{
            total_expense+=Number(ele.amount);
        }

        balance=Total_income-total_expense;

        transaction_list_containerDiv.innerHTML+=`<div class="transaction-list">
                            <p class="trans-list">${ele.date}</p>
                            <p class="trans-list desc">${ele.decription}</p>
                            <p class="trans-list trans-cat">${ele.category}</p>
                            <p class="trans-list trans-mode ${cls}"><span id="currency">${currency}</span><span id="type">${ele.type}</span>${ele.amount}</p>
                            <div class="trans-button">
                                <i class="fa-solid fa-pen trans-icon-edit" data-index="${ind}"></i>
                                <i class="fa-solid fa-trash trans-icon-delete" data-index="${ind}"></i>
                            </div>
                        </div>`
    });

    document.querySelector(".total").innerHTML=`${arr.length}`;
    document.querySelector(".t_expense").innerHTML=`<span class="dash-currency">${currency}</span>${total_expense.toFixed(2)}`;
    document.querySelector(".t_income").innerHTML=`<span class="dash-currency">${currency}</span>${Total_income.toFixed(2)}`;
    document.querySelector(".balance").innerHTML=`<span class="dash-currency">${currency}</span>${balance.toFixed(2)}`;

    saveDate();
    renderChart();
}

//reset button

document.querySelector(".dark-reset-button").addEventListener("click",()=>{
    arr=[];

    ui();
    saveDate();
    renderChart();
});

//edit & delete buttons 

transaction_list_containerDiv.addEventListener("click",(dets)=>{
    let edit=dets.target.closest(".trans-icon-edit");
    let del=dets.target.closest(".trans-icon-delete");

    if(edit){
        index=Number(edit.dataset.index);

        overlayDiv.style.display="flex";

        form_overlayDiv[0].value=arr[index].type=="+"?"income":"expense";
        form_overlayDiv[1].value=arr[index].decription;
        form_overlayDiv[2].value=arr[index].amount;
        form_overlayDiv[3].value=arr[index].date;
        form_overlayDiv[4].value=arr[index].category;

    }if(del){
        index=Number(del.dataset.index);

        let ans=confirm("Are you want to delete this transaction?");

        if(ans){
            arr.splice(index,1);

            ui();
            saveDate();
        }
    }

    renderChart();
})

// settings ka form submission

form_settingsDiv.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    let currentUser=JSON.parse(localStorage.getItem("currentUser"));
    currentUser.username=form_settingsDiv[0].value;
    localStorage.setItem("currentUser",JSON.stringify(currentUser));

    document.querySelector(".nav-name").innerHTML=`<h5 class="nav-h5">${form_settingsDiv[0].value}</h5>`;

    let symbols = {
        usd: "$",
        eur: "€",
        gbp: "£",
        inr: "₹",
        jpy: "¥"
    };

    currency = symbols[form_settingsDiv[1].value];
    
    alert("Your preferences have been updated successfully.");

    ui();
    saveDate();
})

//logout button

document.querySelector(".nav-button").addEventListener("click",(dets)=>{
    window.location.href="index.html"
})

// current ctagory check karna

document.querySelector("#category-transaction").addEventListener("change",(dets)=>{
    curr_category=dets.target.value;

    console.log(curr_category);
    

    ui();
    saveDate();
})

// live serach text

document.querySelector("#search-bar").addEventListener("input",(dets)=>{
    search_text=dets.target.value.toLowerCase();

    ui();
})

ui();