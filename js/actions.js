import Tasks  from "./Tasks.js"
import { render_tasks } from "./render.js"

let tasks = new Tasks()

export function Edit_Task(task_id){
    let task_element = document.querySelector('.tasks #' + task_id)
    let edit_button = task_element.querySelector('.actions .edit')
    let task_input = task_element.querySelector('input')
    
    if(edit_button.innerHTML === 'Edit'){
        task_input.removeAttribute('readonly')
        edit_button.innerHTML = 'Save'
        task_input.focus()
    }else{
        tasks.edit(task_id,task_input.value)
        render_tasks(tasks.tasks())
    }
}

export function Delete_Task(task_name){
    tasks.remove(task_name)
    render_tasks(tasks.tasks())
}

export function Clear(){
    tasks.clear()
    render_tasks(tasks.tasks())
}



