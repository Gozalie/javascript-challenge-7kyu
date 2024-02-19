/*
Problem:

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

/* answer */
// function longest(...s) {
//   const str = s.join("").split("").sort();
//   const setStr = new Set(str);
//   return Array.from(setStr).join("");
// }

// oneliner
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
