import inquirer from "inquirer";
//35- Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.

const answer1 = await inquirer.prompt([
    { message: "Enter first number ", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
      message: "Select one of the operators to perform operation",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);
  
  // conditional statement
  if (answer1.operator === "Addition") {
    console.log( answer1.firstNumber + answer1.secondNumber);
  }else if (answer1.operator === "Subtraction"){
      console.log( answer1.firstNumber - answer1.secondNumber);
    }else if (answer1.operator === "Multiplication"){
      console.log( answer1.firstNumber * answer1.secondNumber);
    }else if (answer1.operator === "Division"){
      console.log( answer1.firstNumber / answer1.secondNumber);
    }else{
      console.log("Please select valid operator")
    }
  