//30-Create a function swapElements that swaps two specified indices in an array.
function swapElements(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
const arrayToSwap = [1, 2, 3, 4, 5];
console.log("Before swap:", arrayToSwap);
swapElements(arrayToSwap, 1, 3);
console.log("After swap:", arrayToSwap);
export {};
