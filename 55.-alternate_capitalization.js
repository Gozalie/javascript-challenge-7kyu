/*
Problem:

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization
*/

/* answer */

// const capitalize = (s) => [[...s].map((a, i) => (i % 2 === 0 ? a.toUpperCase() : a)).join(""), [...s].map((a, i) => (i % 2 === 1 ? a.toUpperCase() : a)).join("")];

const capitalize = (s) => [0, 1].map((r) => [...s].map((a, i) => (i % 2 === r ? a.toUpperCase() : a)).join(""));

console.log(capitalize("codewars"));
