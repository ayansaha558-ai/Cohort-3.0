const taskInput = document.querySelector("#taskInput");
const category = document.querySelector("#category");
const addTaskBtn = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

const completedCount = document.querySelector("#completed");
const pendingCount = document.querySelector("#pending");

const themeBtn = document.querySelector("#themeBtn");
const consoleBox = document.querySelector("#consoleBox");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* ---------------------------
   SAVE TO LOCAL STORAGE
---------------------------- */

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* ---------------------------
   UPDATE COUNTERS
---------------------------- */

function updateCounters() {
    let completed = tasks.filter(task => task.completed).length;
    let pending = tasks.length - completed;

    completedCount.textContent = `${completed} Completed`;
    pendingCount.textContent = `${pending} Pending`;
}

/* ---------------------------
   RENDER TASKS
---------------------------- */

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        taskDiv.dataset.id = task.id;
        taskDiv.dataset.status = task.completed
            ? "completed"
            : "pending";

        taskDiv.dataset.category = task.category;

        taskDiv.innerHTML = `
            <div class="task-top">
                <div>
                    <h3 style="
                    ${task.completed ? "text-decoration:line-through;" : ""}
                    ">
                        ${task.title}
                    </h3>

                    <p>${task.category}</p>
                </div>

                <div class="actions">
                    <button class="edit">Edit</button>
                    <button class="complete">
                        ${task.completed ? "Undo" : "Complete"}
                    </button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        `;

        taskList.append(taskDiv);
    });

    updateCounters();
}

renderTasks();

/* ---------------------------
   ADD TASK
---------------------------- */

addTaskBtn.addEventListener("click", () => {

    let title = taskInput.value.trim();

    if (title === "") {
        alert("Enter Task");
        return;
    }

    const newTask = {
        id: Date.now(),
        title,
        category: category.value,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks();

    taskInput.value = "";
});

/* ---------------------------
   EVENT DELEGATION
---------------------------- */

taskList.addEventListener("click", (e) => {

    const taskElement = e.target.closest(".task");

    if (!taskElement) return;

    const id = Number(taskElement.dataset.id);

    const task = tasks.find(t => t.id === id);

    /* DELETE */

    if (e.target.classList.contains("delete")) {

        tasks = tasks.filter(t => t.id !== id);

        saveTasks();
        renderTasks();
    }

    /* COMPLETE */

    if (e.target.classList.contains("complete")) {

        task.completed = !task.completed;

        saveTasks();
        renderTasks();
    }

    /* EDIT */

    if (e.target.classList.contains("edit")) {

        let newTitle = prompt(
            "Edit Task",
            task.title
        );

        if (newTitle && newTitle.trim() !== "") {

            task.title = newTitle;

            saveTasks();
            renderTasks();
        }
    }
});

/* ---------------------------
   CLEAR ALL
---------------------------- */

const clearBtn = document.querySelector(".search-row button");

clearBtn.addEventListener("click", () => {

    if (confirm("Delete all tasks?")) {

        tasks = [];

        saveTasks();
        renderTasks();
    }
});

/* ---------------------------
   SEARCH TASK
---------------------------- */

const searchInput =
document.querySelector(".search-row input");

searchInput.addEventListener("input", () => {

    let value =
    searchInput.value.toLowerCase();

    document.querySelectorAll(".task")
    .forEach(task => {

        let title =
        task.querySelector("h3")
        .textContent
        .toLowerCase();

        task.style.display =
        title.includes(value)
        ? "block"
        : "none";
    });
});

/* ---------------------------
   FILTER CATEGORY
---------------------------- */

const filterCategory =
document.querySelector(".search-row select");

filterCategory.addEventListener("change", () => {

    let selected =
    filterCategory.value.toLowerCase();

    document.querySelectorAll(".task")
    .forEach(task => {

        let cat =
        task.dataset.category.toLowerCase();

        if (
            selected === "all categories" ||
            cat === selected
        ) {
            task.style.display = "block";
        }
        else {
            task.style.display = "none";
        }
    });
});

/* ---------------------------
   THEME TOGGLE
---------------------------- */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );
});

if (
    localStorage.getItem("theme")
    === "dark"
) {
    document.body.classList.add("dark");
}

/* ---------------------------
   EVENT PROPAGATION DEMO
---------------------------- */

const grandparent =
document.querySelector(".grandparent");

const parent =
document.querySelector(".parent");

const child =
document.querySelector(".child-btn");

function log(message) {

    const p =
    document.createElement("p");

    p.textContent = message;

    consoleBox.prepend(p);
}

/* Capturing */

grandparent.addEventListener(
    "click",
    () => log("Capturing : Grandparent"),
    true
);

parent.addEventListener(
    "click",
    () => log("Capturing : Parent"),
    true
);

child.addEventListener(
    "click",
    () => log("Capturing : Child"),
    true
);

/* Bubbling */

grandparent.addEventListener(
    "click",
    () => log("Bubbling : Grandparent")
);

parent.addEventListener(
    "click",
    () => log("Bubbling : Parent")
);

child.addEventListener(
    "click",
    () => log("Bubbling : Child")
);