import Tasks  from "./Tasks.js"
import { render_tasks,render_error } from "./render.js"

let add_button = document.querySelector('#addModal button#save')
let task_input = document.querySelector('#addModal input#task')

let task_name = () => { return task_input.value }



let tasks = new Tasks
render_tasks(tasks.tasks())

$('#addModal').on('shown.bs.modal',() => { $('#addModal input#task').focus() })

add_button.addEventListener('click',() => {
    try{ 
        tasks.add(task_name())
        render_tasks(tasks.tasks())
    }
    catch(error) {
        render_error(error.message)
    }
})



