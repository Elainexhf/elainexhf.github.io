var mkList = function (task, dueDate, urgency) {
//create <li><li>
var liElem = document.createElement ('li')
// <li> a task - due date </li>
liElem.textContent = `${task} - ${dueDate}`;
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
            var urgencyElem = document.querySelector('#urgency');
            //console.log('task: ', taskElem.value)
            //console.log('due-date: ', duedateElem.value)
            //console.log('urgency: ', urgencyElem.value)
            var todoElem = mkList(taskElem.nodeValue, dueDateElem.nodeValue, urgencyElem.nodeValue)
            var todoListElem = document.querySelector('#to-do-list');
            todoListElem.appendChild(todoElem);
            taskElem.value = null;
            dueDate.Elem = null;
            urgencyElem = null ;
        }




)