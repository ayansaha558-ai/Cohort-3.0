let form=document.querySelector("form");
let inp=document.querySelectorAll("input");
let users=document.querySelector(".users");
let submit=document.querySelector("#submit");

let usersdata=[];

const ui=(ele,ind)=>{
    users.innerHTML="";

    usersdata.forEach((ele,ind)=>{
        users.innerHTML+=`<div class="user">
            <div class="profile">
                <img src="${ele.url}" alt="">
            </div>

            <div class="bio">
                <h5>Name: ${ele.name}</h5>
                <p>Email - ${ele.mail}</p>
                <div class="buttons">
                    <button onClick="edit_pro(${ind})" id="Edit">Edit</button>
                    <button onClick="delete_pro(${ind})" id="Delete">Delete</button>
                </div>
            </div>
        </div>`
    });
};

let editIndex=-1;

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    if(inp[0].value.trim()==="" || inp[1].value.trim()==="" ||inp[2].value.trim()===""){
        return;
    }

    if(editIndex==-1){
        usersdata.push({
        name:inp[0].value,
        mail:inp[1].value,
        url:inp[2].value
        });
    }else{
        usersdata[editIndex]={
            name:inp[0].value,
            mail:inp[1].value,
            url:inp[2].value
        };

        editIndex=-1;
    }

    ui();

    form.reset();
});

const delete_pro = (index)=>{
    usersdata.splice(index,1);
    ui();
};

const edit_pro = (index)=>{

    editIndex=index;
    let user=usersdata[index];

    inp[0].value=user.name;
    inp[1].value=user.mail;
    inp[2].value=user.url;

    ui();
};