//13- Develop a function that takes an array of numbers and returns a new array with each number squared.
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
export {};
