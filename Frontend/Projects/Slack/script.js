let navMenu=document.querySelector(".nav_menu");
let dropBtn=document.querySelector(".dropdown");
let videoBtn=document.querySelector(".video_clicks");
let videoBox=document.querySelector("video");

navMenu.addEventListener("click",(dets)=>{
    if(dets.target.textContent==="Features"){
        dropBtn.classList.toggle("show");
    }
});

videoBtn.addEventListener("click",(dets)=>{
    let btn=dets.target.closest("button");
    
    if(btn.textContent.includes("Ask SlackBot")){
        videoBox.innerHTML=`<source src="Videos/Ask_slackBot.mp4">`;
        videoBox.load();
    }else if(btn.textContent.includes("Plan launches")){
        videoBox.innerHTML=`<source src="Videos/plan_launches.mp4">`;
        videoBox.load();
    }else if(btn.textContent.includes("Run projects")){
        videoBox.innerHTML=`<source src="Videos/run_projects.mp4">`;
        videoBox.load();
    }else if(btn.textContent.includes("Chat with clients")){
        videoBox.innerHTML=`<source src="Videos/chat_with_clients.mp4">`;
        videoBox.load();
    }else if(btn.textContent.includes("Automate tasks")){
        videoBox.innerHTML=`<source src="Videos/automate_tasks.mp4">`;
        videoBox.load();
    }

    document.querySelectorAll("button").forEach((ele)=>{
        ele.classList.remove("active");
    });

    btn.classList.add("active");
});


//copied
const cards = document.querySelectorAll(".container-links h2");

let current = 0;
let auto = true;

cards[current].classList.add("active");

let timer = setInterval(changeCard, 5200);

function changeCard() {
    if (!auto) return;

    cards[current].classList.remove("active");
    void cards[current].offsetWidth;

    current++;
    if (current == cards.length) {
        current = 0;
    }

    cards[current].classList.add("active");
}

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        auto = false;
        clearInterval(timer);

        cards.forEach(item => {
            item.classList.remove("active");
            item.classList.remove("selected");
            void item.offsetWidth;
        });

        card.classList.add("selected");
        current = index;
    });
});