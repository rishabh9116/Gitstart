
document.addEventListener('click',addTodo);

function addTodo(e) {
if(e.target.id==="add-item") {
    const todoName = document.querySelector('#todo-name').value;
    const description = document.querySelector('#description').value;

    var ul = document.querySelector('#todos-remaining');
    var li = document.createElement('li');
    //Creating delete button and tick button
   var deleteBtn = document.createElement('button');
   var tickBtn = document.createElement('button');
   deleteBtn.value = "Delete";
   tickBtn.value  = "Add";
   deleteBtn.appendChild(document.createTextNode("X"));
   tickBtn.appendChild(document.createTextNode("add"));
  
   li.appendChild(document.createTextNode(todoName+"-"+description));
  
   li.appendChild(tickBtn);
   li.appendChild(deleteBtn);
   ul.appendChild(li);
}
}



document.addEventListener('click',removeTodo);
  function removeTodo(e) {
  if(e.target.value=="Delete"){
    var list = e.target.parentElement.parentElement;
    var item =  e.target.parentElement;
   
    list.removeChild(item);

  }

  }



  document.addEventListener('click',TickTodo);

function TickTodo(e) {
    if(e.target.value=="Add"){
        var list = e.target.parentElement.parentElement;
        var item =  e.target.parentElement;
        list.removeChild(item);

        var ulTodoDone = document.querySelector('#todos-done');
        ulTodoDone.appendChild(item);
      }
}