function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const description=event.target.tododesc.value;

    const obj={
        name,
        description
    };
    axios.post("https://crudcrud.com/api/3ba685a6b60043848e891130e7bcd881/appointmentData",obj)
        .then((response)=>{
            showUserOnScreen(response.data);
            //console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        })
    //localStorage.setItem(obj.email,JSON.stringify(obj));    
    //showUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("https://crudcrud.com/api/3ba685a6b60043848e891130e7bcd881/appointmentData")
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                showUserOnScreen(response.data[i]);
            }
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        })
})

function showUserOnScreen(obj){
    const parentElem=document.getElementById('incomplete-tasks');
    const completedTasksHolder=document.getElementById("completed-tasks");
    const checkBox=document.createElement("input");
    const childElem=document.createElement('li');
    //parentElem.innerHTML=parentElem.innerHTML + `<li>${obj.name} - ${obj.email}</li>`
    childElem.textContent=obj.name + ' - ' + obj.description;

    const deleteBtn=document.createElement('input');
    checkBox.type="checkbox";
    deleteBtn.type='button';
    deleteBtn.value='Delete';
    deleteBtn.onclick = () =>{
        const url=`https://crudcrud.com/api/3ba685a6b60043848e891130e7bcd881/appointmentData/${obj._id}`;
        axios.delete(url)
        .then(()=>{
            parentElem.removeChild(childElem);
            //console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        })
    
    }
    childElem.appendChild(checkBox);
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);
    
    checkBox.onclick=()=>{
	    completedTasksHolder.appendChild(childElem);
    }
    
}


