/*
Problem:

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

/* answer */

// function accum(s) {
//   let str = [];
//   for (let i = 0; i < s.length; i++) {
//     str += s[i].repeat(i + 1).toLowerCase() + "-";
//   }
//   return str
//     .slice(0, -1)
//     .split("-")
//     .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
//     .join("-");
// }

// or

// oneliner
const accum = (s) => [...s].map((str, i) => str.toUpperCase() + str.toLowerCase().repeat(i)).join("-");

console.log(accum("ZpglnRxqenU"));
