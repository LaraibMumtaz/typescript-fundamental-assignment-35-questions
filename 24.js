//24- Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr) {
    const incrementedArray = [];
    for (const num of arr) {
        incrementedArray.push(num + 1);
    }
    return incrementedArray;
}
const numbers9 = [1, 2, 3, 4, 5];
const incrementedNumbers = incrementAll(numbers9);
console.log(incrementedNumbers);
export {};
