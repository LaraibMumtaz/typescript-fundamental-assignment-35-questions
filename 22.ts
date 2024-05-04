//22 -Develop a function filterByLength that takes an array of strings and a number n. The function should
// return an array containing only the strings that are longer than n characters.
function filterByLength(strings: string[], n: number): string[] {
    const filteredStrings: string[] = [];
    
    for (const str of strings) {
        if (str.length > n) {
            filteredStrings.push(str);
        }
    }
    
    return filteredStrings;
  }
  
  const strings: string[] = ["apple", "banana", "orange", "kiwi", "pineapple"];
  const n: number = 5;
  const filteredArray1: string[] = filterByLength(strings, n);
  console.log(filteredArray1);