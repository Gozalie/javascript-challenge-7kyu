/*
Problem:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

/* answer */

// function XO(str) {
//   const strg = str.toLowerCase();
//   let result = [];
//   let result1 = [];
//   for (let i = 0; i < strg.length; i++) {
//     if (strg[i] === "x" || !"x") {
//       result.push(strg[i]);
//     } else if (strg[i] === "o" || !"o") {
//       result1.push(strg[i]);
//     }
//   }
//   return result.length === result1.length;
// }

// or

function XO(str) {
  const strg = str.toLowerCase();
  let sum = 0;
  for (let i = 0; i < strg.length; i++) {
    if (strg[i] === "x") sum++;
    if (strg[i] === "o") sum--;
  }
  return sum === 0;
}

// or

// function XO(str) {
//   const strg = str.toLowerCase().split("");
//   return strg.filter((a) => a === "x").length === strg.filter((a) => a === "o").length;
// }

// or

//oneliner
// const XO = (str) => str.toLowerCase().split("x").length === str.toLowerCase().split("o").length;

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("zpzpzpp"));
