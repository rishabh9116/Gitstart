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
var it = document.querySelectorAll('.list-group-item');
it[1].style.color = 'green';

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}

