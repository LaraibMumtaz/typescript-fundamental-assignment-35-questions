
// 10- Write a function that takes an array of numbers and returns the count of positive numbers in the array.
const numberArrays = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];

const checkNumberPositive = (numberArray: number[]) => {
  let count = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      count = count + 1;
    }
  }
  return count;
};

console.log("count", checkNumberPositive(numberArrays));