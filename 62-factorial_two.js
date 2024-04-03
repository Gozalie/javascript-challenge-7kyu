/* 
Problem:

Your task is to write function factorial.
*/

/* answer */
// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// or

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
};

console.log(factorial(4));
