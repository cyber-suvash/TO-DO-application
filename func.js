const inputbox=document.getElementById("input-box")

const idList=document.getElementById("list-container")

const buttonid= document.querySelector('button').addEventListener('click',adTast)


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
    
    // Changed condition from count > 9 to count >= 9
    else if (count >= 8) {
        alert("You've reached the maximum limit of 9 tasks!");
        inputbox.value = "";
        return;
    }
    
    createList();
    inputbox.value = "";
    storeDATA();
}


function createList(){
   
        let li =document.createElement('li')
        li.innerHTML=inputbox.value
        idList.appendChild(li)
    
      let span =document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
       count++
}


idList.addEventListener('click',function(ov){
    if(ov.target.tagName==="LI"){
        ov.target.classList.toggle("checked")
        storeDATA()
    }

    else if(ov.target.tagName==="SPAN"){
        ov.target.parentElement.remove()
        count--
        storeDATA()
    }
})


function storeDATA(){
    localStorage.setItem('data',idList.innerHTML)
}

function displayTASK(){
    idList.innerHTML=localStorage.getItem("data")
}
displayTASK()
