/*
Problem:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

/* answer */

// function getCount(str) {
//   let string = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       string += str[i];
//     } else if (str[i] === "i") {
//       string += str[i];
//     } else if (str[i] === "u") {
//       string += str[i];
//     } else if (str[i] === "e") {
//       string += str[i];
//     } else if (str[i] === "o") {
//       string += str[i];
//     }
//   }
//   return string.length;
// }

// const getCount = (str) => [...str].map((st) => (st === "a" ? st : st === "i" ? st : st === "u" ? st : st === "e" ? st : st === "o" ? st : [])).join("").length;

//or

const getCount = (str) => [...str].filter((a) => "aiueo".includes(a)).length;

console.log(getCount("abracadabra"));
console.log(getCount("abiabiabi"));
console.log(getCount("fikri gozali"));
