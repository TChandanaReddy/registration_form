//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
//console.log(document.domain);
//console.log(documentURL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello'
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='HELLO';
//headerTitle.innerText='GoodBye';
//console.log(headerTitle.innerText);
//console.log(headerTitle.textContent);
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';


// GETELEMENTBYCLASSNAME //
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='Hello2';
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';
var items=document.getElementsByClassName('title');
console.log(items);
items[0].style.fontWeight='bold';
items[0].style.color='green';

//gives error --->  items.style.backgroundColor='#f4f4f4';

//for(var i=0; i<items.length;i++){
//    items[i].style.backgroundColor='#f4f4f4';
//}

// GETELEMENTBYTAGNAME //
//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='Hello2';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='yellow';

//gives error --->  items.style.backgroundColor='#f4f4f4';

//for(var i=0; i<li.length;i++){
//    li[i].style.backgroundColor='#f4f4f4';
//}

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='orange';

// QUERYSELECTORALL //
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }
