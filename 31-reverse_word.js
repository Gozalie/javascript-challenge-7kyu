/*
Problem:

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

/* answer */
// const reverseWords = (str) => {
//   const arr = str.split(" ");
//   let string = [];
//   for (let i = 0; i < arr.length; i++) {
//     st = arr[i].split("").reverse().join("");
//     string.push(st);
//   }
//   return string.join(" ");
// };

// oneliner
// const reverseWords = (str) => str.split("").reverse().join("").split(" ").reverse().join(" ");

// or

const reverseWords = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(reverseWords("apple"));
console.log(reverseWords("double  spaced  words"));
