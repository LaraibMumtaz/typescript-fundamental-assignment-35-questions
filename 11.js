//11- Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
const words = ["Apple", "Banana", "Apricot", "Avocado", "Orange"];
let newArray = [];
for (let i = 0; i < words.length; i++) {
    let tempArray = words[i];
    if (tempArray[0] == "a" || tempArray[0] == "A") {
        newArray.push(tempArray);
    }
}
console.log(newArray);
export {};
