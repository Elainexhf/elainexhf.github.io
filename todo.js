var mkList = function (taskName, dueDate, priority) {
//create <li><li>
var liElem = document.createElement ('li')
// <li> a task - due date </li>
liElem.textContent = `${taskName} - ${dueDate}`;
//<li class = "list-group-item"> a task - due date </li>
liElem.classList.add('list-group-item');
return (liElem);
}


//select the button

var addBtn = document.querySelector('#addBtn');

addBtn.addEventListener(
    'click',
    function(){
        //console.log('button clicked')
            var taskElem = document.querySelector('#task');
            var dueDateElem= document.querySelector('#due-date');
            var priorityElem = document.querySelector('#priority');
            //console.log('task: ', taskElem.value)
            //console.log('due-date: ', duedateElem.value)
            //console.log('priority: ', priorityElem.value)
            var todoElem = mkList(taskElem.nodeValue, dueDateElem.nodeValue, priorityElem.nodeValue)
            var todoListElem = document.querySelector('#to-do-list');
            todoListElem.appendChild(todoElem);
            //taskElem.value = null;
            //dueDateElem.value = null;
            //priorityElem.value = null ;
        }




)