//19- Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function findIndex(arr: any[], element: any): number {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target element
        if (arr[i] === element) {
            // If found, return the index
            return arr.indexOf(element);
        }
    }
    // If the element is not found, return -1
    return -1;
  }
  
  
  const array5: number[] = [1, 2, 3, 4, 5];
  const elementToFind: number = 3;
  const index: number = findIndex(array5, elementToFind);
  console.log("Index of element:", index);