//20-Write a function to find and return the smallest number in an array of integers.
function smallestint(arr6) {
    let small1 = Math.min(...arr6);
    return small1;
}
console.log("smallest number:", smallestint([22, 56, 35, 2, 56, 2, 8, 9]));
export {};
