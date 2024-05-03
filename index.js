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
let newArray = [];
for (let i = 0; i < words.length; i++) {
    let tempArray = words[i];
    if (tempArray[0] == "a" || tempArray[0] == "A") {
        newArray.push(tempArray);
    }
}
console.log(newArray);
//Create a script that logs the second to last element of an array named fruits
const fruits = ["apple", "orange", "banana", "mango"];
const sendlastlen = fruits.length - 2;
console.log(fruits[sendlastlen]);
//Develop a function that takes an array of numbers and returns a new array with each number squared.
const squareArray = (array1) => {
    let newarray1 = [];
    for (let i = 0; i < array1.length; i++) {
        let array3 = array1[i] ** 2;
        newarray1.push(array3);
    }
    return newarray1;
};
let Array2 = [2, 5, 6, 8, 4];
console.log(squareArray(Array2));
//Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(arrayRevrse) {
    let reverse = [];
    for (let i = arrayRevrse.length - 1; i >= 0; i--) {
        reverse.push(arrayRevrse[i]);
    }
    return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let maxno = Math.max(...scores);
let minno = Math.min(...scores);
function exdblow(score, max, min) {
    let exceed = 0;
    let below = 0;
    for (let i = 0; i < score.length; i++) {
        if (score[i] > max) {
            exceed = exceed + 1;
        }
        else if (score[i] < min) {
            below = below + 1;
        }
        else {
            console.log("nothing");
        }
    }
    console.log("the number of times it fell exceed the minimum score:", exceed);
    console.log("times the score below the maximum score:", below);
}
exdblow([56, 56, 8, 2, -9, -8, -65, 47], maxno, minno);
//-------------------------------------------------------------------
//Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
function removeFalsyValues(arr) {
    const newArray = [];
    for (const value of arr) {
        if (value) {
            newArray.push(value);
        }
    }
    return newArray;
}
// Example usage:
const array = [false, null, 0, "", undefined, NaN, 42, "hello"];
const filteredArray = removeFalsyValues(array);
console.log(filteredArray); // Output: [42, "hello"]
//====================================================================================
//// Arrays to concatenate
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// Concatenating the arrays using the concat function
const concatenatedArray = array1.concat(array2);
// Outputting the concatenated array
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
//================================================================
//Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr, isEven) {
    // Initialize sum
    let sum = 0;
    // Loop through each element in the array
    for (const num of arr) {
        // Check if the number is even or odd based on the isEven parameter
        if ((isEven && num % 2 === 0) || (!isEven && num % 2 !== 0)) {
            // Add the number to the sum if it matches the condition
            sum += num;
        }
    }
    // Return the sum
    return sum;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumOfElements(numbers, true);
const oddSum = sumOfElements(numbers, false);
console.log("Sum of even elements:", evenSum); // Output: 30 (2 + 4 + 6 + 8 + 10)
console.log("Sum of odd elements:", oddSum); // Output: 25 (1 + 3 + 5 + 7 + 9)
//==================================================================================
//Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function findIndex(arr, element) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target element
        if (arr[i] === element) {
            // If found, return the index
            return arr.indexOf(element);
        }
    }
    // If the element is not found, return -1
    return -1;
}
// Example usage:
const array5 = [1, 2, 3, 4, 5];
const elementToFind = 3;
const index = findIndex(array5, elementToFind);
console.log("Index of element:", index);
//================================================================================
//Write a function to find and return the smallest number in an array of integers.
function smallestint(arr6) {
    let small1 = Math.min(...arr6);
    return small1;
}
console.log("smallest number:", smallestint([22, 56, 35, 2, 56, 2, 8, 9]));
//=============================================================================
//Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(numbers) {
    // Initialize the product with the first element of the array
    let product = numbers[0];
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {
        // Multiply the current element with the product
        product *= numbers[i];
    }
    // Return the product
    return product;
}
// Example usage:
const numbers5 = [1, 2, 3, 4, 5];
const product = calculateProduct(numbers5);
console.log("Product:", product);
//===================================================================================
//Develop a function filterByLength that takes an array of strings and a number n. The function should
// return an array containing only the strings that are longer than n characters.
function filterByLength(strings, n) {
    const filteredStrings = [];
    for (const str of strings) {
        if (str.length > n) {
            filteredStrings.push(str);
        }
    }
    return filteredStrings;
}
// Example usage:
const strings = ["apple", "banana", "orange", "kiwi", "pineapple"];
const n = 5;
const filteredArray1 = filterByLength(strings, n);
console.log(filteredArray1);
//==========================================================================
//Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr) {
    const duplicates = [];
    const seen = {};
    for (const item of arr) {
        if (seen[item]) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        }
        else {
            seen[item] = true;
        }
    }
    if (duplicates.length === 0) {
        console.log("No duplicates found.");
    }
    else {
        console.log("Duplicates found:", duplicates);
    }
}
// Example usage:
const array6 = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 5];
findDuplicates(array6);
//==========================================================
//Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr) {
    const incrementedArray = [];
    for (const num of arr) {
        incrementedArray.push(num + 1);
    }
    return incrementedArray;
}
// Example usage:
const numbers9 = [1, 2, 3, 4, 5];
const incrementedNumbers = incrementAll(numbers9);
console.log(incrementedNumbers);
//================================================================
//
function countOccurrences(arr, element) {
    let count = 0;
    for (const item of arr) {
        if (item === element) {
            count++;
        }
    }
    return count;
}
// Example usage:
const array8 = [1, 2, 2, 3, 2, 4, 5, 2];
const elementToCount = 2;
const occurrences = countOccurrences(array8, elementToCount);
console.log(`The element ${elementToCount} appears ${occurrences} times.`);
//==============================================================================
//Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 2, 7, 1, 3];
console.log(isSorted(sortedArray)); // Output: true
console.log(isSorted(unsortedArray)); // Output: false
//============================================================
