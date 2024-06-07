let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let items = JSON.parse(localStorage.getItem("todo-list")) || [];

function saveToLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(items));
}

function loadTasks() {
    taskList.innerHTML = '';
    items.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `<span>${task}</span> <button onclick="edit(this, ${index})">Edit</button> <button onclick="listdel(${index})">Del</button>`;
        taskList.appendChild(li);
    });
}

function taskAdded() {
    let task = taskInput.value.trim();
    if (task) {
        items.push(task);
        saveToLocalStorage();
        loadTasks();
    }
    taskInput.value = "";
}

function listdel(index) {
    items.splice(index, 1);
    saveToLocalStorage();
    loadTasks();
}

let liUpdate;
let editTaskInput;
let currentIndex;

function edit(event, index) {
    openModal();
    editTaskInput = document.getElementById('editTaskInput');
    currentIndex = index;
    liUpdate = event.parentElement.firstElementChild;
    editTaskInput.value = items[index];
}

function saveTask() {
    let updatedTask = editTaskInput.value.trim();
    if (updatedTask) {
        items[currentIndex] = updatedTask;
        saveToLocalStorage();
        loadTasks();
        closeModal();
    }
    editTaskInput.value = "";
}

function openModal() {
    document.getElementById('editModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}


window.onload = loadTasks;


function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = '../index.html';
}
