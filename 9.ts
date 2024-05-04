//Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
      name: "Age",
      type: "number",
      message: "Enter your age:",
    },
  ]);
  
  if (answer.Age > 18) {
    console.log("adult");
  } else {
    console.log("minor");
  }
  