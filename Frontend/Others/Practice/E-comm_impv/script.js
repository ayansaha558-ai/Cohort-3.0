let createBtn=document.querySelector("#create");
let formDiv=document.querySelector(".form");
let closeBtn=document.querySelector("#close");

let form=document.querySelector("form");
let productDiv=document.querySelector(".products");

let productArr=JSON.parse(localStorage.getItem("products")) || [];

createBtn.addEventListener("click",()=>{
    formDiv.style.display="flex";
});

closeBtn.addEventListener("click",()=>{
    formDiv.style.display="none";
});

let ui=()=>{
    productDiv.innerHTML="";

    productArr.forEach((ele)=>{
        productDiv.innerHTML+=`
        <div class="product-cart">
                <div class="image">
                    <img src="${ele.url}"
                    alt="">
                </div>

                <div class="text">
                    <h3>${ele.pName}</h3>
                    <p>${ele.description}</p>
                    <p>${ele.price}</p>
                </div>

                <div class="buttons">
                    <button onClick="updateProduct('${ele.pName}')" id="update">Update</button>
                    <button onClick="deleteProduct('${ele.pName}')" id="delete">Delete</button>
                </div>
        </div>`
    });
};

let index=-1;

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    let pName=form[0].value;
    let description=form[1].value;
    let price=form[2].value;
    let url=form[3].value;

    if(form[0].value.trim()==="" || form[1].value.trim()==="" || form[2].value==="" ||
        form[3].value===""){
            alert("Please fill all the fields");
            return;
        }

    obj={
        pName,
        description,
        price,
        url
    };

    if(index!=-1){
        productArr[index]=obj;
        index=-1;
        localStorage.setItem("products",JSON.stringify(productArr));
    }else{
        productArr.push(obj);
        localStorage.setItem("products",JSON.stringify(productArr));
    }
    ui();

    form.reset();

    formDiv.style.display="none";
});

let updateProduct=(name)=>{
    formDiv.style.display="flex";

    let product=productArr.find((ele)=>ele.pName===name);
    index=productArr.findIndex((ele)=>ele.pName===name);

    form[0].value=product.pName;
    form[1].value=product.description;
    form[2].value=product.price;
    form[3].value=product.url;
};

let deleteProduct=(name)=>{
    let ind=productArr.findIndex((ele)=> ele.pName===name);

    productArr.splice(ind,1);
    localStorage.setItem("products",JSON.stringify(productArr));
    ui();
};

ui();