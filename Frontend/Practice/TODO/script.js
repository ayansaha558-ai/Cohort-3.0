let form = document.querySelector("form");
let inp = document.querySelector("#task");
let tasks = document.querySelector(".tasks");
let button = document.querySelector("#button");

let editTask = null;

form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    if (inp.value.trim() == "") {
        return;
    }

    // Update existing task
    if (editTask) {

        editTask.querySelector("h3").textContent = inp.value;

        editTask = null;
        button.value = "Add";
        form.reset();

        return;
    }

    // Add new task
    tasks.innerHTML += `
        <div class="task">
            <div class="name">
                <h3>${inp.value}</h3>
            </div>

            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
    `;

    form.reset();
});

tasks.addEventListener("click", (e) => {

    // Delete
    if (e.target.classList.contains("delete")) {
        e.target.closest(".task").remove();

        if (editTask === e.target.closest(".task")) {
            editTask = null;
            button.value = "Add";
            form.reset();
        }
    }

    // Edit
    if (e.target.classList.contains("edit")) {

        editTask = e.target.closest(".task");

        inp.value = editTask.querySelector("h3").textContent;

        button.value = "Update";

        inp.focus();
    }
});