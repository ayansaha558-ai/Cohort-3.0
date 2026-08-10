// Home page

const modeSlider = document.querySelector(".mode-slider");

// Apply saved theme on load (defaults to light)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
} else {
  modeSlider.classList.add("light");
}

// Toggle mode
modeSlider.addEventListener("click", () => {
  modeSlider.classList.toggle("light");
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

//current time
function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  document.querySelector("#current-time").textContent = time;
  document.querySelector("#current-date").textContent = date;

  // Greeting
  const hour = now.getHours();
let greeting = "";

if (hour >= 5 && hour < 12) {
  greeting = "Good Morning";
} else if (hour >= 12 && hour < 17) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

document.querySelector("#greeting").textContent = `${greeting}, User`;
}

updateClock();
setInterval(updateClock, 1000);

// TODO list Page

let form_todoDiv=document.querySelector(".todo-form");

let arr_todo=JSON.parse(localStorage.getItem("todo_tasks")) || [];
let index_t=null;

//variables
let curr_filter=false;

document.querySelector(".all").classList.add("active");

let saveData=()=>{
  localStorage.setItem("todo_tasks",JSON.stringify(arr_todo));
}

form_todoDiv.addEventListener("submit",(dets)=>{
  dets.preventDefault();
  console.log("todo form fired");

  if(index_t!=null){
    arr_todo[index_t].tname=form_todoDiv[0].value;
    document.querySelector(".task-addBtn").value="Add task";

    index_t=null;
  }else{
    let tname=form_todoDiv[0].value;
    arr_todo.push({tname,completed:false});
  }

  ui();
  saveData();

  form_todoDiv.reset();
})

let ui=()=>{
  document.querySelector(".task-lists").innerHTML="";

  let filtered_arr_todo=arr_todo;

  if(curr_filter){
    filtered_arr_todo=arr_todo.filter(item=>item.completed!=curr_filter);
  }

  filtered_arr_todo.forEach((ele,ind) => {
    document.querySelector(".task-lists").innerHTML+=`<div class="task-list-box">
                    <input type="checkbox" name="" id="" data-index=${ind} class="inp-checkbox" ${ele.completed==true?"checked":""}>
                    <p class="task-list-box-para" style="text-decoration:${ele.completed==true?"line-through":"none"}">${ele.tname}</p>
                    <div class="todo-buttons">
                        <i class="ri-file-edit-line" data-index=${ind}></i>
                        <i class="ri-delete-bin-line" data-index=${ind}></i>
                    </div>
                </div>`
  });

  saveData();
}

document.querySelector(".task-lists").addEventListener("click",(dets)=>{
  let edit=dets.target.closest(".ri-file-edit-line");
  let del =dets.target.closest(".ri-delete-bin-line")
  let checkBox=dets.target.closest(".inp-checkbox");
  
  if(edit){
    index_t=Number(edit.dataset.index);

    form_todoDiv[0].value=arr_todo[index_t].tname;

    document.querySelector(".task-addBtn").value="Save Changes";
  }if(del){
    index_t=Number(del.dataset.index);
    arr_todo.splice(index_t,1);

    index_t=null;

    ui();
    saveData();
  }if(checkBox){
    index_t=checkBox.dataset.index;
    arr_todo[index_t].completed=checkBox.checked;

    ui();
    saveData();
  }
})

document.querySelector(".todo-filters").addEventListener("click",(dets)=>{
  if(dets.target.closest(".t_all")){
    curr_filter=false;

    document.querySelector(".only_active").classList.remove("active");
    document.querySelector(".all").classList.add("active");
  }if(dets.target.closest(".t_active")){
    curr_filter=true;

    document.querySelector(".all").classList.remove("active");
    document.querySelector(".only_active").classList.add("active");
  }
  ui();
})

//Daily Planner

let planner_Inp=document.querySelectorAll(".daily_planner-page input")

let plannerData=JSON.parse(localStorage.getItem("planners")) || [];

//display the plans

planner_Inp.forEach((input,index)=>{
  input.value=plannerData[index] || "";
});

//save the plans

planner_Inp.forEach((input,index)=>{
  input.addEventListener("input",()=>{
    plannerData[index]=input.value;
    localStorage.setItem("planners",JSON.stringify(plannerData))
  })
})

// daily goals

let goalForm = document.querySelector(".goal-form");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

let goalIndex = null;

function saveGoals(){
    localStorage.setItem("goals", JSON.stringify(goals));
}

goalForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(goalIndex != null){

        goals[goalIndex].name = goalForm[0].value;
        goalIndex = null;
        document.querySelector(".goal-addBtn").value="Add Goal";

    }else{

        goals.push({
            name:goalForm[0].value,
            completed:false
        });

    }

    goalForm.reset();

    saveGoals();

    goalUI();

});

const completedGoalsEl = document.querySelector("#completedGoals");
const totalGoalsEl = document.querySelector("#totalGoals");
const progressFillEl = document.querySelector("#progressFill");

function updateProgress(){

    const completed = goals.filter(g => g.completed).length;
    const total = goals.length;

    if (completedGoalsEl) completedGoalsEl.textContent = completed;
    if (totalGoalsEl) totalGoalsEl.textContent = total;

    if (progressFillEl){
        const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
        progressFillEl.style.width = `${pct}%`;
    }

}

function goalUI(){

    document.querySelector(".goal-lists").innerHTML="";

    goals.forEach((goal,index)=>{

        document.querySelector(".goal-lists").innerHTML += `
        <div class="task-list-box">

            <input
            type="checkbox"
            class="inp-checkbox"
            data-index="${index}"
            ${goal.completed ? "checked" : ""}
            >

            <p
            class="task-list-box-para"
            style="text-decoration:${goal.completed?"line-through":"none"}">
                ${goal.name}
            </p>

            <div class="todo-buttons">

                <i
                class="ri-file-edit-line"
                data-index="${index}">
                </i>

                <i
                class="ri-delete-bin-line"
                data-index="${index}">
                </i>

            </div>

        </div>
        `;

    });

    saveGoals();
    updateProgress();

}

document.querySelector(".goal-lists").addEventListener("click",(e)=>{

    let edit = e.target.closest(".ri-file-edit-line");
    let del = e.target.closest(".ri-delete-bin-line");
    let check = e.target.closest(".inp-checkbox");

    if(edit){

        goalIndex = edit.dataset.index;

        goalForm[0].value = goals[goalIndex].name;

        document.querySelector(".goal-addBtn").value="Save Goal";

    }

    if(del){

        goals.splice(del.dataset.index,1);

        goalUI();

    }

    if(check){

        goals[check.dataset.index].completed = check.checked;

        goalUI();

    }

});

goalUI();

//POMODORO TIMER
let timer = document.querySelector(".timer");
let sessionLabel = document.querySelector(".session");

let workInput = document.querySelector("#workTime");
let breakInput = document.querySelector("#breakTime");

let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");

// Home dashboard mini pomodoro widget (mirrors the same timer)
let homeTimer = document.querySelector("#homePomodoro");
let startHomeBtn = document.querySelector(".start-home-timer");
let resetHomeBtn = document.querySelector(".reset-home-timer");

let interval;
let onBreak = false;

let totalSeconds = workInput.value * 60;

function updateDisplay(){

    let min = Math.floor(totalSeconds / 60);
    let sec = totalSeconds % 60;

    const display = `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

    timer.textContent = display;
    if (homeTimer) homeTimer.textContent = display;

}

updateDisplay();

function startTimer(){

    clearInterval(interval);

    interval = setInterval(()=>{

        totalSeconds--;

        updateDisplay();

        if(totalSeconds <= 0){

            clearInterval(interval);

            // Switch between work and break sessions automatically
            onBreak = !onBreak;

            if (sessionLabel){
                sessionLabel.textContent = onBreak ? "BREAK TIME" : "WORK SESSION";
            }

            totalSeconds = (onBreak ? breakInput.value : workInput.value) * 60;
            updateDisplay();

            alert(onBreak ? "Work session done! Time for a break." : "Break's over! Back to work.");

        }

    },1000);

}

function pauseTimer(){
    clearInterval(interval);
}

function resetTimer(){

    clearInterval(interval);

    onBreak = false;
    if (sessionLabel) sessionLabel.textContent = "WORK SESSION";

    totalSeconds = workInput.value * 60;

    updateDisplay();

}

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
resetBtn.onclick = resetTimer;

if (startHomeBtn) startHomeBtn.onclick = startTimer;
if (resetHomeBtn) resetHomeBtn.onclick = resetTimer;

workInput.onchange = ()=>{

    if (!onBreak){
        totalSeconds = workInput.value * 60;
        updateDisplay();
    }

}

breakInput.onchange = ()=>{

    if (onBreak){
        totalSeconds = breakInput.value * 60;
        updateDisplay();
    }

}

//Motivation page

// ======================
// Motivation Page
// ======================

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const quoteBtn = document.querySelector(".quote-btn");

// Home dashboard mini quote widget
const homeQuote = document.querySelector("#homeQuote");
const newQuoteBtn = document.querySelector(".new-quote-btn");

async function getQuote() {

    try {

        quoteBtn.innerHTML = `
            <i class="ri-loader-4-line"></i>
            Loading...
        `;

        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;

        if (homeQuote) homeQuote.textContent = `"${data.quote}"`;

    } catch (error) {

        quoteText.textContent = "Unable to load quote. Please try again.";
        quoteAuthor.textContent = "";

        if (homeQuote) homeQuote.textContent = "Unable to load quote.";

    }

    quoteBtn.innerHTML = `
        <i class="ri-refresh-line"></i>
        Get New Quote
    `;
}

// Load first quote when page opens
getQuote();

// New quote when button is clicked
quoteBtn.addEventListener("click", getQuote);

// New quote from the home dashboard widget too
if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", getQuote);
}


//Weather Page
// =============================
// Weather Page
// =============================

const cityInput = document.querySelector(".weather-city");
const searchBtn = document.querySelector(".weather-btn");

const cityName = document.querySelector(".weather-city-name");
const temperature = document.querySelector(".weather-temp");
const condition = document.querySelector(".weather-condition");

const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const pressure = document.querySelector("#pressure");
const feels = document.querySelector("#feels");

// Nav bar + home dashboard widgets that also show weather
const navTemperature = document.querySelector("#temperature");
const navLocation = document.querySelector("#location");
const navWeatherIcon = document.querySelector("#weather-icon");
const homeTemp = document.querySelector("#homeTemp");
const homeCondition = document.querySelector("#homeCondition");

function weatherIconClass(code){
    if(code===0) return "ri-sun-line";
    if(code<=3) return "ri-cloud-line";
    if(code<=48) return "ri-foggy-line";
    if(code<=67) return "ri-drizzle-line";
    if(code<=77) return "ri-snowy-line";
    if(code<=82) return "ri-showers-line";
    if(code<=86) return "ri-snowy-line";
    if(code<=99) return "ri-thunderstorms-line";
    return "ri-cloud-line";
}

// Search by City
searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city !== "") {
        getWeatherByCity(city);
    }

});

// Search on Enter
cityInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        e.preventDefault();
        searchBtn.click();
    }

});

// =============================
// Detect Current Location
// =============================

navigator.geolocation.getCurrentPosition(
    position => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getWeatherByCoords(lat, lon);

    },

    () => {

        cityName.textContent = "Location Permission Denied";
        condition.textContent = "Search a city instead.";

        if (navLocation) navLocation.textContent = "Location denied";
        if (homeCondition) homeCondition.textContent = "Search a city";

    }

);

// =============================
// Search by City
// =============================

async function getWeatherByCity(city){

    try{

        searchBtn.innerHTML="Loading...";

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
        );

        const geoData = await geoResponse.json();

        if(!geoData.results || geoData.results.length===0){

            cityName.textContent="City not found";
            return;

        }

        const location=geoData.results[0];

        getWeatherByCoords(
            location.latitude,
            location.longitude,
            location.name,
            location.country
        );

    }

    finally{

        searchBtn.innerHTML=`
            <i class="ri-search-line"></i>
            Search
        `;

    }

}

// =============================
// Weather by Coordinates
// =============================

async function getWeatherByCoords(lat,lon,name="",country=""){

  try{

    const response = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,pressure_msl,wind_speed_10m,weather_code`
    );

    const data = await response.json();

    if(name===""){

        const place=await fetch(
`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );

        const placeData=await place.json();

        name=
            placeData.address.city ||
            placeData.address.town ||
            placeData.address.village;

        country=placeData.address.country;

    }

    const roundedTemp = Math.round(data.current.temperature_2m);
    const conditionText = weatherCondition(data.current.weather_code);

    // Full weather page
    cityName.textContent=`${name}, ${country}`;

    temperature.textContent=`${roundedTemp}°C`;

    feels.textContent=
        `${Math.round(data.current.apparent_temperature)}°C`;

    humidity.textContent=
        `${data.current.relative_humidity_2m}%`;

    wind.textContent=
        `${data.current.wind_speed_10m} km/h`;

    pressure.textContent=
        `${data.current.pressure_msl} hPa`;

    condition.textContent = conditionText;

    // Nav bar mini widget
    if (navTemperature) navTemperature.textContent = `${roundedTemp}°C`;
    if (navLocation) navLocation.textContent = name;
    if (navWeatherIcon) navWeatherIcon.className = weatherIconClass(data.current.weather_code);

    // Home dashboard "Weather Insights" card
    if (homeTemp) homeTemp.textContent = `${roundedTemp}°C`;
    if (homeCondition) homeCondition.textContent = conditionText;

  }catch(err){

    cityName.textContent = "Unable to load weather";
    condition.textContent = "Please try again.";

  }

}

// =============================
// Weather Code
// =============================

function weatherCondition(code){

    if(code===0) return "Clear Sky";
    if(code<=3) return "Partly Cloudy";
    if(code<=48) return "Fog";
    if(code<=67) return "Rain";
    if(code<=77) return "Snow";
    if(code<=82) return "Rain Showers";
    if(code<=86) return "Snow Showers";
    if(code<=99) return "Thunderstorm";

    return "Unknown";

}

/*=========================================
        DASHBOARD NAVIGATION
=========================================*/

const pages = {
  home: document.querySelector(".home-page"),
  todo: document.querySelector(".todo-page"),
  planner: document.querySelector(".daily_planner-page"),
  goals: document.querySelector(".goals-page"),
  pomodoro: document.querySelector(".pomodoro-page"),
  motivation: document.querySelector(".motivation-page"),
  weather: document.querySelector(".weather-page"),
};

// Hide every page
function hideAllPages() {
  Object.values(pages).forEach((page) => {
    page.classList.add("page-hidden");
  });
}

// Open any page
function openPage(pageName) {
  hideAllPages();
  pages[pageName].classList.remove("page-hidden");

  // sidebar active effect
  sidebarItems.forEach((item) =>
    item.classList.remove("selected")
  );

  if (pageName === "home") {
    sidebarItems[0].classList.add("selected");
  } else if (pageName === "todo") {
    sidebarItems[1].classList.add("selected");
  } else if (pageName === "planner") {
    sidebarItems[2].classList.add("selected");
  } else if (pageName === "goals") {
    sidebarItems[3].classList.add("selected");
  } else if (pageName === "pomodoro") {
    sidebarItems[4].classList.add("selected");
  } else if (pageName === "motivation") {
    sidebarItems[5].classList.add("selected");
  } else if (pageName === "weather") {
    sidebarItems[6].classList.add("selected");
  }
}

/*=========================================
        SIDEBAR
=========================================*/

const sidebarItems = document.querySelectorAll(".sidebar-options-box");

sidebarItems[0].onclick = () => openPage("home");
sidebarItems[1].onclick = () => openPage("todo");
sidebarItems[2].onclick = () => openPage("planner");
sidebarItems[3].onclick = () => openPage("goals");
sidebarItems[4].onclick = () => openPage("pomodoro");
sidebarItems[5].onclick = () => openPage("motivation");
sidebarItems[6].onclick = () => openPage("weather");

/*=========================================
        HOME DASHBOARD CARDS
=========================================*/

document.querySelectorAll(".open-page").forEach((card) => {
  card.addEventListener("click", () => {

    const page = card.dataset.page;

    openPage(page);

  });
});

/*=========================================
        ADD GOAL BUTTON
=========================================*/

document
  .querySelector(".progress-btn")
  .addEventListener("click", () => {

    openPage("goals");

  });

/*=========================================
        BACK BUTTONS
=========================================*/

document.querySelectorAll(".btn-back").forEach((btn) => {

  btn.addEventListener("click", () => {

    openPage("home");

  });

});

/*=========================================
        DEFAULT PAGE
=========================================*/

openPage("home");

ui();