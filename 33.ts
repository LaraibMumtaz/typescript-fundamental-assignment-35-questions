//33- Write a function that takes an array of integers and sorts them from smallest to largest.
function sortIntegers(array: number[]): number[] {
    return array.slice().sort((a, b) => a - b);
  }
  
  
  const integers = [5, 2, 8, 1, 3];
  const sortedIntegers = sortIntegers(integers);
  console.log("Sorted integers:", sortedIntegers);
  