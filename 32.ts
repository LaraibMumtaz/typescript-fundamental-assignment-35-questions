//32-Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
const todoList = [
    { task: "Finish coding assignment", completed: false },
    { task: "Buy groceries", completed: true },
    { task: "Call mom", completed: false }
  ];
  
  function logIncompleteTasks(todoList: { task: string; completed: boolean }[]): void {
    console.log("Incomplete tasks:");
    for (let i = 0; i < todoList.length; i++) {
        if (!todoList[i].completed) {
            console.log(todoList[i].task);
        }
    }
  }
  
  logIncompleteTasks(todoList);