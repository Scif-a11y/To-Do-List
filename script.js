let totalTasks = 0;
const maxTasks = 8;

function showError(message) {
    const errorMessage = document.querySelector(".errorMessage");
    errorMessage.textContent = message;
    setTimeout(() => (errorMessage.textContent = ""), 3000);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task").forEach((task) => {
        tasks.push({
            id: task.id,
            info: task.querySelector(".heading").textContent,
            dateTime: task.querySelector(".dateTime").textContent,
            container: task.parentElement.id,
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    savedTasks.forEach((task) => {
        const output = document.createElement("div");
        output.id = task.id;
        output.classList.add("task");
        output.innerHTML = `
            <h1 class="heading">${task.info}</h1>
            <p class="dateTime">${task.dateTime}</p>
            <button class="${task.id}">Task Completed</button>
        `;
        const button = output.querySelector("button");
        button.addEventListener("click", function () {
            button.parentElement.remove();
            totalTasks--;
            saveTasks();
        });
        document.getElementById(task.container).append(output);
    });
    totalTasks = savedTasks.length;
}

function addTask(info, dateTime, container) {
    if (totalTasks >= maxTasks) {
        showError("Maximum tasks reached");
        return;
    }
    const taskId = `task${totalTasks + 1}`;
    const task = document.createElement("div");
    task.id = taskId;
    task.classList.add("task");
    task.innerHTML = `
        <h1 class="heading">${info}</h1>
        <p class="dateTime">${dateTime}</p>
        <button>Task Completed</button>
    `;
    const button = task.querySelector("button");
    button.addEventListener("click", function () {
        task.remove();
        totalTasks--;
        saveTasks();
    });
    document.getElementById(container).append(task);
    totalTasks++;
    saveTasks();
}

document.querySelector(".searchBar button").addEventListener("click", function () {
    const input = document.querySelector(".searchBar input");
    const info = input.value;
    const dateTime = new Date().toLocaleString();
    addTask(info, dateTime, "taskContainer");
});

window.onload = function () {
    loadTasks();
};
