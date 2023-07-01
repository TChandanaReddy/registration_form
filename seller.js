function crudcrud(event){
    
    event.preventDefault();
    const price=event.target.sellPrice.value;
    const product=event.target.ProdName.value;
    const category=event.target.Category.value;

    const obj={
        price,
        product,
        category
    };
    axios.post("https://crudcrud.com/api/9cd94ae8a2204ea4a764efc615c28290/appointmentData",obj)
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
    axios.get("https://crudcrud.com/api/9cd94ae8a2204ea4a764efc615c28290/appointmentData")
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
    const electronicItem=document.getElementById('electronicItems');
    const foodItem=document.getElementById('foodItems');
    const skincareItems=document.getElementById('skinItems');
    const childElem=document.createElement('li');
    //parentElem.innerHTML=parentElem.innerHTML + `<li>${obj.name} - ${obj.email}</li>`
    childElem.textContent=obj.price + ' - ' + obj.product + ' - ' + obj.category;
    childElem.textContent=obj.price + ' - ' + obj.product + ' - ' + obj.category;
    childElem.textContent=obj.price + ' - ' + obj.product + ' - ' + obj.category;

    const deleteBtn=document.createElement('input');
    deleteBtn.type='button';
    deleteBtn.value='Delete';
    deleteBtn.onclick = () =>{
        const url=`https://crudcrud.com/api/9cd94ae8a2204ea4a764efc615c28290/appointmentData/${obj._id}`;
        axios.delete(url)
        .then(()=>{
            electronicItem.removeChild(childElem);
            foodItem.removeChild(childElem);
            skincareItems.removeChild(childElem);
            //console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        })
    
    }
    // childElem.appendChild(deleteBtn);
    // if(document.getElementById("elec").innerText=="Electronic"){
    //     electronicItem.appendChild(childElem);
    // }
    // if(document.getElementById("food").innerText=="Food"){
    //     foodItem.appendChild(childElem);
    // }
    // if(document.getElementById("skin").innerText=="SkinCare"){
    //     skincareItems.appendChild(childElem);
    // }
    
    childElem.appendChild(deleteBtn);
    electronicItem.appendChild(childElem);
    foodItem.appendChild(childElem);
    skincareItems.appendChild(childElem);

}


