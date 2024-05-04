//26- Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
  }
  
  
  const sortedArray: number[] = [1, 2, 3, 4, 5];
  const unsortedArray: number[] = [5, 2, 7, 1, 3];
  
  console.log(isSorted(sortedArray)); 
  console.log(isSorted(unsortedArray));