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
    localStorage.setItem(obj.email,JSON.stringify(obj));    
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parentElem=document.getElementById('users');
    const childElem=document.createElement('li');
    //parentElem.innerHTML=parentElem.innerHTML + `<li>${obj.name} - ${obj.email}</li>`
    childElem.textContent=obj.name + ' - ' + obj.email;

    const deleteBtn=document.createElement('input');
    deleteBtn.type='button';
    deleteBtn.value='Delete';
    deleteBtn.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);
}


