import { Edit_Task, Delete_Task, Clear } from './actions.js'

function render_actions(){
    let tasks = document.querySelectorAll('.tasks > .task')

    for(let task of tasks){
        task.querySelector('.actions .remove').addEventListener('click',() => {Delete_Task(task.id)})
        task.querySelector('.actions .edit').addEventListener('click',() => {Edit_Task(task.id)})
    }
    if(document.querySelector('button#clear'))
    document.querySelector('button#clear').addEventListener('click',() => {Clear()})
}

export function render_tasks(tasks){
    document.querySelector('.tasks').innerHTML = ''
    document.querySelector('button#clear')
    if(document.querySelector('button#clear'))document.querySelector('button#clear').remove()

    tasks.forEach(task => {
        let input = document.createElement('input');
        input.className = 'content'
        input.value = task.name;
        input.readOnly = true

        let parent = document.createElement('div');
        parent.className = `task border ${task.complated ? 'complated' : ''}`;
        parent.id = task.name

        // Actions 
        let actions = document.createElement('div');
        actions.className = 'actions';
        
        let remove = document.createElement('button');
        remove.className = 'remove';
        remove.innerText = 'remove';

        let edit = document.createElement('button');
        edit.className = 'edit';
        edit.innerText = 'Edit';

        
        actions.appendChild(edit);
        actions.appendChild(remove);
        
        parent.appendChild(input);
        parent.appendChild(actions);
        
        document.querySelector('.tasks').appendChild(parent);
    });

    if(tasks.length > 0){
        let tasks_div = document.querySelector('.tasks')
        let clear_button = document.createElement('button');
        clear_button.className = 'clear btn btn-outline-danger mt-4';
        clear_button.id = 'clear';
        clear_button.innerHTML = "Clear all tasks";
        tasks_div.parentNode.insertBefore(clear_button,tasks_div.nextSibling)
    }

    render_actions()
}


export function render_error(error){
    alert = document.createElement('div')
    alert.className = 'alert alert-danger mt-4'
    alert.id = 'error'
    alert.innerHTML = error
    alert.role = 'alert'
    document.querySelector('.tasks').appendChild(alert)
}

