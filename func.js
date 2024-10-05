const inputbox = document.getElementById("input-box");
const idList = document.getElementById("list-container");
const buttonid = document.querySelector('button').addEventListener('click', addTask);

let count = 0; // Initialize counter

// Function to update counter from current list items
function updateCount() {
    count = idList.getElementsByTagName('li').length;
    console.log('Current count:', count);
}

// Initialize count on page load
updateCount();

function addTask() {
    if (inputbox.value === '') {
        alert("Please add something you need to do!");
        return;
    }
    
   
    if (count >= 8) {
        alert("You've reached the maximum limit of 9 tasks!");
        inputbox.value = "";
        return;
    }
    
    createList();
    inputbox.value = "";
    storeData();
}

function createList() {
    let li = document.createElement('li');
    li.innerHTML = inputbox.value;
    idList.appendChild(li);
    
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    count++;
    updateTaskCounter();
}

function updateTaskCounter() {
    const counterElement = document.getElementById('task-counter');
    if (counterElement) {
        counterElement.textContent = `Tasks: ${count}/9`;
    }
}

idList.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        storeData();
    }
    else if (ev.target.tagName === "SPAN") {
        ev.target.parentElement.remove();
        count--;
        updateTaskCounter();
        storeData();
    }
});

function storeData() {
    localStorage.setItem('data', idList.innerHTML);
    localStorage.setItem('taskCount', count.toString());
}

function displayTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        idList.innerHTML = savedData;
        // Restore count from localStorage
        const savedCount = localStorage.getItem('taskCount');
        count = savedCount ? parseInt(savedCount) : 0;
        updateTaskCounter();
    }
}

// Initialize the display
displayTask();
