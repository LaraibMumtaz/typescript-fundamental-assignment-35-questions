//31-Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countCharacter(inputString, character) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === character) {
            count++;
        }
    }
    return count;
}
const inputString = "hello, world!";
const characterToCount = "o";
const result3 = countCharacter(inputString, characterToCount);
console.log(`The character "${characterToCount}" appears ${result3} times in the string.`);
export {};
