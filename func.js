const inputbox=document.getElementById("input-box")

const idList=document.getElementById("list-container")


const buttonid= document.querySelector('button').addEventListener('click',adTast)


function adTast(){
    if(inputbox.value===''){
        alert("please add something you need to do!!")
    }
    else{
        let li =document.createElement('li')
        li.innerHTML=inputbox.value
        idList.appendChild(li)
         let span =document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
      
    }
    inputbox.value=""
    storeDATA( )
}


idList.addEventListener('click',function(ov){
    if(ov.target.tagName==="LI"){
        ov.target.classList.toggle("checked")
        storeDATA()
    }

    else if(ov.target.tagName==="SPAN"){
        ov.target.parentElement.remove()
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