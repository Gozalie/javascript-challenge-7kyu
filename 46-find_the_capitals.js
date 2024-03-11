/*
Problem:

nstructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/

/* asnwer */
// const capitals = (word) => {
//   let arrIndex = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] >= "A" && word[i] <= "Z") {
//       arrIndex.push(i);
//     }
//   }
//   return arrIndex;
// };

const capitals = (word) => {
  return [...word].map((a, i) => (a === a.toUpperCase() ? i : -1)).filter((a) => a >= 0);
};
console.log(capitals("CodEWaRs"));
