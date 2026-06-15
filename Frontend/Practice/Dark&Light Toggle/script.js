// let btn=document.querySelector(".container button");

// function setDarkOrLight(){
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches){
//         document.body.classList.add("dark");
//         document.body.classList.remove("light");
//     }else{
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// }

// if(localStorage.getItem("theme")){
//     document.body.classList.add(localStorage.getItem("theme"));
// }

// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
//     if(!localStorage.getItem("theme")){
//         setDarkOrLight();
//     }
    
// });



// btn.addEventListener("click",function(){
//     if(document.body.classList.contains("dark")){
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");
//         localStorage.setItem("theme","light");
//     }else{
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//         localStorage.setItem("theme","dark");
//     }
// });

let btn = document.querySelector(".container button");

function setTheme(theme){
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

function setDarkOrLight(){
    setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
}

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    setTheme(savedTheme);
}else{
    setDarkOrLight();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if(!localStorage.getItem("theme")){
        setDarkOrLight();
    }
});

btn.addEventListener("click", () => {
    const theme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    setTheme(theme);
    localStorage.setItem("theme", theme);
});