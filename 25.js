//25- Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr, element) {
    let count = 0;
    for (const item of arr) {
        if (item === element) {
            count++;
        }
    }
    return count;
}
const array8 = [1, 2, 2, 3, 2, 4, 5, 2];
const elementToCount = 2;
const occurrences = countOccurrences(array8, elementToCount);
console.log(`The element ${elementToCount} appears ${occurrences} times.`);
export {};
