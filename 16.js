//16- Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
function removeFalsyValues(arr) {
    const newArray = [];
    for (const value of arr) {
        if (value) {
            newArray.push(value);
        }
    }
    return newArray;
}
const array = [false, null, 0, "", undefined, NaN, 42, "hello"];
const filteredArray = removeFalsyValues(array);
console.log(filteredArray);
export {};
