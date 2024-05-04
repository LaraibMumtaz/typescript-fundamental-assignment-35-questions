//26- Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 2, 7, 1, 3];
console.log(isSorted(sortedArray));
console.log(isSorted(unsortedArray));
export {};
