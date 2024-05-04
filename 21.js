//21- Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(numbers) {
    // Initialize the product with the first element of the array
    let product = numbers[0];
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {
        // Multiply the current element with the product
        product *= numbers[i];
    }
    // Return the product
    return product;
}
const numbers5 = [1, 2, 3, 4, 5];
const product = calculateProduct(numbers5);
console.log("Product:", product);
export {};
