document.addEventListener('click',addExpense);

function addExpense(e) {
    if(e.target.id==='addExpense'){
        const amount = document.querySelector('#amount').value;
        const description = document.querySelector('#description').value;
        const category = document.querySelector('#category').value;

            let userDetails = {
        amount:amount,
        description:description,
        category:category
    };
    let u = JSON.stringify(userDetails);
    let s = amount;
      localStorage.setItem(s,u);
   var ul = document.querySelector('ul');
   var li = document.createElement('li');
   //Creating delete button
   var deleteBtn = document.createElement('button');
   var editBtn = document.createElement('button');
   deleteBtn.value = "Delete";
   editBtn.value  = "Edit";
   deleteBtn.appendChild( document.createTextNode("Delete Expense"));
   editBtn.appendChild(document.createTextNode("Edit Expense"));
   li.appendChild(document.createTextNode(amount+"-"+description+"-"+category));
   li.id = s;
   li.appendChild(deleteBtn);
   li.appendChild(editBtn);
   ul.appendChild(li);
    }
}

document.addEventListener('click',removeExpense);

function removeExpense(e) {
    if(e.target.value==='Delete') {
        var list = e.target.parentElement.parentElement;
     var item =  e.target.parentElement;
     var ID = item.id;
    list.removeChild(item);
   localStorage.removeItem(ID);
  }

    }

  document.addEventListener('click',EditExpense);

function EditExpense(e) {
    if(e.target.value=="Edit"){
        var list = e.target.parentElement.parentElement;
        var item =  e.target.parentElement;
        var ID = item.id;
        //Deserialization
        var Obj = JSON.parse(localStorage.getItem(ID));
        var amount = document.querySelector('#amount');
        var description = document.querySelector('#description');
        var category = document.querySelector('#category');
        amount.value = Obj.amount;
        description.value = Obj.description;
        category.value = Obj.category;
        list.removeChild(item);
       localStorage.removeItem(ID);
      }
}



