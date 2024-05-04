//27- Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names) {
    const formattedNames = names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];
    return formattedNames;
}
const namesArray = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(formatNames(namesArray));
export {};
