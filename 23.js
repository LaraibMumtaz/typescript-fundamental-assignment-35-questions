//23- Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr) {
    const duplicates = [];
    const seen = {};
    for (const item of arr) {
        if (seen[item]) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        }
        else {
            seen[item] = true;
        }
    }
    if (duplicates.length === 0) {
        console.log("No duplicates found.");
    }
    else {
        console.log("Duplicates found:", duplicates);
    }
}
const array6 = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 5];
findDuplicates(array6);
export {};
