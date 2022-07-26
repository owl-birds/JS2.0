console.warn("SIMPLE.TODO.APP");
console.log(Number.isNaN(NaN)); // TRUE
console.log(Number.isNaN(132)); // FALSE

let todoList = [];
while (true) {
    let opt = prompt("Enter the Instruction : ");
    if (opt === "quit") {
        console.warn("Quiting the Apps");
        break;
    } else if (opt === "new") {
        let newTodo = prompt("Enter the new Todo : ");
        todoList.push(newTodo);
        console.log(`${newTodo} has been added to the list`);
    } else if (opt === "list") {
        console.log("*******************");
        for (let todo of todoList) {
            console.log(`${todoList.indexOf(todo)} - ${todo}`);
        }
        console.log("*******************");
    } else if (opt === "delete") {
        let index = prompt("('cancel' to cancel the deletion) Enter the index of the Todo : ");
        while (true) {
            if (index === "cancel") {
                break;
            } else if (todoList[parseInt(index)] === undefined) {
                index = prompt("('cancel')UNDEFINED:todo doesnt exist, ENter index again:");
            } else if (parseInt(index) >= 0) {
                console.log(`${todoList[index]} todo deleted`);
                todoList.splice(parseInt(index), 1);
                break;
            }// } else if (!parseInt(index)) {
            //     index = prompt("('cancel')INVALID, ENter index again:");
            // }
        }
    }
}