/*
Problem:

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

/* answer */
// function stray(numbers) {
//   let num = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]) {
//       num += numbers[i];
//     }
//   }
//   return num;
// }

const stray = (numbers) => +numbers.sort((a, b) => a - b).filter((a) => numbers[1] !== a);

console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([20, 20, 20, 20, 10, 20, 20, 20, 20, 20]));
