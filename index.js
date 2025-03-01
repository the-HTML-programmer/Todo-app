var Todos = /** @class */ (function () {
    function Todos() {
        this.todos = [];
        this.uniqueId = 0;
        this.completedTodos = [];
    }
    Todos.prototype.addTodo = function (task, dueDate) {
        var newTodo = {
            id: this.uniqueId++,
            task: task,
            completed: false,
            dueDate: dueDate,
        };
        this.todos.push(newTodo);
        console.log("Added: \"".concat(task, "\" (ID: ").concat(this.uniqueId, ")"));
        this.uniqueId = this.uniqueId;
    };
    Todos.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (item) { return item.id = id; });
        if (todo) {
            todo.completed == true;
            console.log("this task with id ".concat(id, " is completed"));
        }
        else {
            console.log("this task with id ".concat(id, " is completed"));
        }
    };
    Todos.prototype.removeTodo = function (id) {
        var indexOfItem = this.todos.findIndex(function (item) { return item.id == id; });
        var deleted = this.todos.splice(indexOfItem, 1);
        if (indexOfItem !== -1) {
            var deleted_1 = this.todos.splice(indexOfItem, 1);
            console.log("task ".concat(deleted_1, " has been deleted"));
        }
        else {
            console.log("task ".concat(deleted, " does not exists"));
        }
    };
    Todos.prototype.listTodo = function () {
        return this.todos;
    };
    Todos.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (item) { return item.completed === completed; });
    };
    Todos.prototype.updateTaskDescription = function (id, newTask) {
        var oldTask = this.todos.find(function (item) { return item.id == id; });
        if (oldTask) {
            oldTask.task = newTask;
        }
    };
    Todos.prototype.clearCompletedTodos = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
        console.log("Cleared all completed todos.");
    };
    return Todos;
}());
var myTodos = new Todos();
myTodos.addTodo("Learn TypeScript", new Date("2025-03-10"));
myTodos.addTodo("Build a project", new Date("2025-03-15"));
console.log("All Todos:", myTodos.listTodo());
myTodos.completeTodo(0);
console.log("Completed Todos:", myTodos.filterTodos(true));
myTodos.updateTaskDescription(1, "Build an advanced TypeScript project");
console.log("Updated Todos:", myTodos.listTodo());
myTodos.clearCompletedTodos();
console.log("Todos after clearing completed tasks:", myTodos.listTodo());
