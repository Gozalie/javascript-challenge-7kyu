/*
Problem:

inish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

/* answer */
// const solution = (nums) => nums === null ? [] : nums.sort((a, b) => a - b);

//or

const solution = (nums) => (nums ? nums.sort((a, b) => a - b) : []);

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
console.log(solution([]));
console.log(solution([3, 1, 5, 8, 2]));
