/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
 */

/* asnwer */

function solve(s) {
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }
  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}

//or

// function solve(s) {
//   let upper = [...s].filter((a) => a === a.toUpperCase()).length;
//   let lower = s.length - upper;
//   return upper > lower ? s.toUpperCase() : s.toLowerCase();
// }

// or

// const solve = (s) => ([...s].reduce((a, b) => (b === b.toUpperCase() ? a + 1 : a - 1), 0) > 0 ? s.toUpperCase() : s.toLowerCase());

console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));
