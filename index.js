import inquirer from "inquirer";
//Write a script to log "Hello, World!" to the console.
console.log("Hello world");
//Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
const temperature = 15;
if (temperature < 20) {
    console.log("Its's cold!");
}
//Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
const apple = 10;
const GiveAway = 3;
const left = apple - GiveAway;
console.log(`apple left: ${left}`);
//Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
const firstName = "laraib";
const lastName = "Mumtaz";
const fullName = firstName + lastName;
console.log(`full Name: ${fullName}`);
//Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
const number5 = 5;
if (number5 > 3) {
    console.log("Yes");
}
else {
    console.log("No");
}
//Medium
//Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}
const radius = 14;
console.log(calculateArea(radius));
//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperatures = [25, 28, 30, 22, 27]; // Example temperatures array
let highestTemperature = temperatures[0]; // Assume the first temperature is the highest initially
for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > highestTemperature) {
        highestTemperature = temperatures[i];
    }
}
console.log("The highest temperature is:", highestTemperature);
//--------------------------------------------------------------------
//Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
const answer = await inquirer.prompt([
    {
        name: "Age",
        type: "number",
        message: "Enter your age:",
    },
]);
if (answer.Age > 18) {
    console.log("adult");
}
else {
    console.log("minor");
}
//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
const numberArrays = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];
const checkNumberPositive = (numberArray) => {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            count = count + 1;
        }
    }
    return count;
};
console.log("count", checkNumberPositive(numberArrays));
//Arrays and Array Methods
//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
const words = ["Apple", "Banana", "Apricot", "Avocado", "Orange"];
// Filter the words array to only include words that start with 'a'
const wordsStartingWithA = words.filter(word => word.toLowerCase().startsWith('a'));
// Output the filtered array
console.log(wordsStartingWithA); // Output: ["Apple", "Apricot", "Avocado"]
