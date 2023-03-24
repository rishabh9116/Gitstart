// console.dir(document);
// console.dir(document.domain);
// console.log(document.URL);
// console.dir(document.title);
// document.title= 'Rishbah' ;
// console.dir(document.title);  
// console.log(document.doctype);  
// console.log(document.head);  
// console.log(document.body);  
// console.log(document.all);  
//  console.log(document.all[10]);  
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);   
// console.log(document.getElementById('header-title'));
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// var item = document.querySelector('.title');
// item.style.fontWeight = 'bold';
// item.style.color = 'green';
var items = document.getElementsByClassName('list-group-item');
// items[0].style.backgroundColor = 'red';
// items[1].style.backgroundColor = 'red';
// items[2].style.backgroundColor = 'red';
// items[3].style.fontWeight = 'bold';

//getElementbytagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li);
// li[2].textContent = 'hello Web dev';
// // items.style.backgroundColor = 'red';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = 'red';
// }

// items[1].style.backgroundColor = 'green';
// items[2].style.display = 'none';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send it';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'red';
// var it = document.querySelectorAll('.list-group-item');
// it[1].style.color = 'green';

// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//}


//TRAVERSING THE DOM
var itemList = document.querySelector('#items');
//parent node

// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
//  itemList.parentElement.style.backgroundColor = '#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
// // console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
// console.log(itemList.lastElementChild);
//  itemList.lastElementChild.textContent = 'Hello 4';

//next sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previous sibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//CREATE ELEMENT
var myDiv = document.createElement('div');
myDiv.className='hello';
myDiv.id='hello-1';
//add attribute
myDiv.setAttribute('title','Hello mere Div');
//create text node
var myDivText =  document.createTextNode('Hello World');
//add text to div
myDiv.appendChild(myDivText);
var conta = document.querySelector('.container');
var h1 = document.querySelector('h1');
console.log(myDiv);

conta.insertBefore(myDiv, h1);

let ul = document.querySelector('ul');
let li = document.querySelector('ul li');
ul.insertBefore(myDiv, li);



