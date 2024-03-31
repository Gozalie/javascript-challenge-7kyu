/*
Problem:

In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

/* answer */

const solution = (digits) => {
  let result = [];
  for (let i = 0; i < digits.length - 4; i++) {
    result.push(digits.substring(i, i + 5));
  }
  return Math.max(...result);
};

// const solution = (digits) => +Array.from({ length: digits.length - 4 }, (_, i) => digits.substring(i, i + 5)).sort((a, b) => b - a)[0];

console.log(solution("1234567898765"));
