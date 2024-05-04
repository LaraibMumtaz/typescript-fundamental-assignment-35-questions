//18- Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr: number[], isEven: boolean): number {
    // Initialize sum
    let sum: number = 0;
  
    // Loop through each element in the array
    for (const num of arr) {
        // Check if the number is even or odd based on the isEven parameter
        if ((isEven && num % 2 === 0) || (!isEven && num % 2 !== 0)) {
            // Add the number to the sum if it matches the condition
            sum += num;
        }
    }
  
    // Return the sum
    return sum;
  }
  
  
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenSum: number = sumOfElements(numbers, true);
  const oddSum: number = sumOfElements(numbers, false);
  console.log("Sum of even elements:", evenSum); 
  console.log("Sum of odd elements:", oddSum); 