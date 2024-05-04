//29- Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array must not be empty");
    }
    let min = numbers[0];
    let max = numbers[0];
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const num = numbers[i];
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        sum += num;
    }
    const average = sum / numbers.length;
    return {
        min,
        max,
        average
    };
}
// Example usage:
const numbersArray = [3, 8, 1, 6, 10];
const result = minMaxAverage(numbersArray);
console.log(result);
export {};
