let todos = ["Buy New Turtle"];

let input = prompt("What would you like to do?");

while (input != "quit") {
    if (input === "list") {
        listTodo();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    
    input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodo() {
    console.log('***********');
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    })
    console.log('***********');        
}

function addtodo() {
    let newTodo = prompt("Enter new todo");
    todos.push(newTodo)
    console.log("Added Todo");
}

function deleteTodo() {
    let removeIndex = prompt("Enter index to remove from list");
    todos.splice(removeIndex, 1)
    console.log("Deleted Todo");
}