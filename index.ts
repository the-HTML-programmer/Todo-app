 interface TodoItem {

id : number;
task: string;
completed : boolean;
dueDate : Date;

}

class Todos{
    todos : TodoItem [] = []
    uniqueId : number = 0
    completedTodos : TodoItem[]=[]
    addTodo(task:string, dueDate:Date):void{
       const newTodo:TodoItem = {
           id: this.uniqueId++,
           task,
           completed: false,
           dueDate,
       };
       
       this.todos.push(newTodo)
       console.log(`Added: "${task}" (ID: ${this.uniqueId})`);
       this.uniqueId = this.uniqueId
    }

    completeTodo(id:number):void{
        const todo = this.todos.find(item => item.id = id)
        if (todo){
            todo.completed == true
            console.log(`this task with id ${id} is completed`)
        }
        else{
            console.log(`this task with id ${id} is completed`)
        }
    }

    removeTodo(id:number):void{
        const indexOfItem = this.todos.findIndex(item => item.id == id)
         const deleted  =this.todos.splice(indexOfItem,1)

        if (indexOfItem !== -1){
            const deleted  =this.todos.splice(indexOfItem,1)
        console.log(`task ${deleted} has been deleted`)
        }
        else{
            console.log(`task ${deleted} does not exists`)
        }
    }
    listTodo():TodoItem[]{
        return this.todos
    }


    filterTodos(completed:boolean): TodoItem[]{
        return this.todos.filter(item => item.completed === completed)
     
    }

    updateTaskDescription(id: number, newTask:string, ): void{
        const oldTask = this.todos.find(item => item.id ==  id)
        if (oldTask){
            oldTask.task = newTask
        }
    }
clearCompletedTodos():void{
    this.todos = this.todos.filter(todo => !todo.completed);
    console.log(`Cleared all completed todos.`);

}
}

interface Duedate extends TodoItem {

}


const myTodo = new Todos();

myTodo.addTodo("Learn TypeScript", new Date("2025-03-10"));
myTodo.addTodo("Build a project", new Date("2025-03-15"));

console.log("All Todos:", myTodo.listTodo());

myTodo.completeTodo(0);
console.log("Completed Todos:", myTodo.filterTodos(true));

myTodo.updateTaskDescription(1, "Build an advanced TypeScript project");
console.log("Updated Todos:", myTodo.listTodo());

myTodo.clearCompletedTodos();
console.log("Todos after clearing completed tasks:", myTodo.listTodo());