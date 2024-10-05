const inputbox = document.getElementById("input-box");
const idList = document.getElementById("list-container");
const buttonid = document.querySelector('button').addEventListener('click', addTask); 

let count = 0;

function addTask() { 
    if (inputbox.value === '') {
        alert("please add something you need to do!!");
    } else {
        createList();
    }
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
}

idList.addEventListener('click', function(ev) { 
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        storeData(); 
    }
    else if (ev.target.tagName === "SPAN") {
        ev.target.parentElement.remove();
        count--;
        storeData(); 
    }
});

function storeData() {
            localStorage.setItem('data', idList.innerHTML)
        }
    
        function displayTASK() {
            idList.innerHTML = localStorage.getItem("data")
        }
