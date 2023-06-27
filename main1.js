// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background ='#ccc'
//     document.querySelector('body').classList.add('bg-dark');
//     const name=document.getElementById('name').value;
//     const email=document.getElementById('email').value;

//     let myObj={
//         name:name,
//         email:email
//     };
//     let myObj_serialized=JSON.stringify(myObj);
//     localStorage.setItem('myObj',myObj_serialized);
//     let myObj_deserialized=JSON.parse(localStorage.getItem('myObj'));
//     console.log(myObj_deserialized);

//     localStorage.setItem('name',name);
//     localStorage.setItem('email',email);
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background ='#ccc'
//     document.querySelector('body').classList.add('bg-dark');
//     console.log('mouseover');
// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background ='#ccc'
//     document.querySelector('body').classList.add('bg-dark');
//     console.log('mouseout');
// });

function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailid.value;

    const obj={
        name,
        email
    };
    axios.post("https://crudcrud.com/api/ce5c41806b234423ba409f3437f0dbed/appointmentData",obj)
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
    axios.get("https://crudcrud.com/api/ce5c41806b234423ba409f3437f0dbed/appointmentData")
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
    const parentElem=document.getElementById('users');
    const childElem=document.createElement('li');
    //parentElem.innerHTML=parentElem.innerHTML + `<li>${obj.name} - ${obj.email}</li>`
    childElem.textContent=obj.name + ' - ' + obj.email;

    const deleteBtn=document.createElement('input');
    deleteBtn.type='button';
    deleteBtn.value='Delete';
    deleteBtn.onclick = () =>{
        const url=`https://crudcrud.com/api/ce5c41806b234423ba409f3437f0dbed/appointmentData/${obj._id}`;
        axios.delete(url)
        .then(()=>{
            parentElem.removeChild(childElem);
            //console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        })
        //localStorage.removeItem(obj.email);
        // parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);

    const editBtn=document.createElement('input');
    editBtn.type='button';
    editBtn.value='Edit';
    editBtn.onclick = () =>{
        document.getElementById('name').value=obj.name;
        document.getElementById('email').value=obj.email;
        const url=`https://crudcrud.com/api/ce5c41806b234423ba409f3437f0dbed/appointmentData/${obj._id}`;
        axios.delete(url)
        .then(()=>{
            parentElem.removeChild(childElem);
            //console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        })
        // localStorage.removeItem(obj.email);
        // parentElem.removeChild(childElem);
    }
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);   
}


