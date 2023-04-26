const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background ='#ccc'
    document.querySelector('body').classList.add('bg-dark');
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background ='#ccc'
    document.querySelector('body').classList.add('bg-dark');
    console.log('mouseover');
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background ='#ccc'
    document.querySelector('body').classList.add('bg-dark');
    console.log('mouseout');
});

