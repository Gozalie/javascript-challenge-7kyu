/*
Problem:

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
*/

/* answer */
const rowWeights = (array) => {
  let result = [0, 0];
  for (let i = 0; i < array.length; i++) {
    i % 2 === 0 ? (result[0] += array[i]) : (result[1] += array[i]);
  }
  return result;
};

// const rowWeights = (array) => [array.map((a, i) => (i % 2 === 0 ? a : 0)).reduce((a, b) => a + b, 0), array.map((a, i) => (i % 2 === 1 ? a : 0)).reduce((a, b) => a + b, 0)];

// const rowWeights = (array) => array.reduce((a, b, i) => ((a[i % 2] += b), a), [0, 0]);

console.log(rowWeights([50, 60, 70, 80]));
