//34-Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function logArrayReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}
const array12 = [1, 2, 3, 4, 5];
logArrayReverse(array12);
export {};
