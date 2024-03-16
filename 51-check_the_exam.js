/*
Problem:

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0


correct = 4
blank = 0
incorrect = -1
*/

/* answer */
const checkExam = (array1, array2) => {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      result += 0;
    } else if (array1[i] === array2[i]) {
      result += 4;
    } else {
      result--;
    }
  }
  return result < 0 ? 0 : result;
};

// const checkExam = (array1, array2) => {
//   const result = array1.map((a, i) => (a === array2[i] ? 4 : array2[i] === "" ? 0 : -1)).reduce((a, b) => a + b);
//   return result > 0 ? result : 0;
// };

// const checkExam = (array1, array2) => Math.max(0,array2.reduce((a,b,i) => a + (b === array1[i] ? 4 : b === '' ? 0 : -1),0))

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
console.log(checkExam(["c", "a", "b", "c", "a"], ["", "b", "a", "b", "a"]));
