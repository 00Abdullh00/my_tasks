class Tasks {
    storge_key = 'tasks'

    constructor(name=''){ this.name = name }

    tasks = () => { return JSON.parse(localStorage.getItem(this.storge_key) || "[]") 
    }

    get_task = (name=this.name) => { return this.tasks().filter(item => item.name === name)[0] }

    add = (name=this.name) => {
        if(this.tasks().filter(task => task.name.l == name)[0] !== undefined){
            throw Error(`Task "${name}" already exists`)
        }

        localStorage.setItem(this.storge_key,JSON.stringify([...this.tasks(),{ 'name': name }]));
        return this.tasks()
    }
    
    remove = (name=this.name) => {
        localStorage.setItem(this.storge_key,JSON.stringify(this.tasks().filter(item => item.name !== name)))
        return this.tasks()
    }
    
    edit = (name,new_name=undefined) => {
        let tasks = this.tasks()
        let task = tasks.filter(item => item.name === name)[0] 
        task.name = new_name == undefined ? task.name : new_name;
        task.complated = completed == undefined ? task.complated : completed;
        task.special = special == undefined ? task.special : special;

        localStorage.setItem(this.storge_key,JSON.stringify(tasks))
        return this.tasks()
    }

    clear = () => { return localStorage.setItem(this.storge_key, []) || []}

}

export default Tasks 

