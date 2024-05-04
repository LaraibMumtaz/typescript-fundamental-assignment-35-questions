//14- Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(arrayRevrse) {
    let reverse = [];
    for (let i = arrayRevrse.length - 1; i >= 0; i--) {
        reverse.push(arrayRevrse[i]);
    }
    return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
export {};
