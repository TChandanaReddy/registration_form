const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background ='#ccc'
    document.querySelector('body').classList.add('bg-dark');
    console.log('click');
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

