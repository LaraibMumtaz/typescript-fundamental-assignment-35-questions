//30-Create a function swapElements that swaps two specified indices in an array.
function swapElements<T>(array: T[], index1: number, index2: number): void {
 
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
  const arrayToSwap = [1, 2, 3, 4, 5];
  console.log("Before swap:", arrayToSwap); 
  swapElements(arrayToSwap, 1, 3);
  console.log("After swap:", arrayToSwap); 