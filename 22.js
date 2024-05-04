//22 -Develop a function filterByLength that takes an array of strings and a number n. The function should
// return an array containing only the strings that are longer than n characters.
function filterByLength(strings, n) {
    const filteredStrings = [];
    for (const str of strings) {
        if (str.length > n) {
            filteredStrings.push(str);
        }
    }
    return filteredStrings;
}
const strings = ["apple", "banana", "orange", "kiwi", "pineapple"];
const n = 5;
const filteredArray1 = filterByLength(strings, n);
console.log(filteredArray1);
export {};
