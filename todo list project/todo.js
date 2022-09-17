let input = prompt("What would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean Cat Litter"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("****************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log("****************");
    } else if (input === "new") {
        const newTodo = prompt("Ok, what is new todo?");
        todos.push(newTodo);
        console.log("NEW TODO ADDED!");
    } else if (input == "delete") {
        const index = parseInt(prompt("Enter an index to delete."));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`Ok deleted ${deleted}`)
        } else {
            console.log("Unknown Index");
        }
    }
    input = prompt("What will you like to do?")
}
console.log("OK you Quit!")