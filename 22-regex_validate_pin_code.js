/*
Problem:

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

/* answer */
// const validatePIN = (pin) => [...pin].map((a) => parseInt(a)).reduce((a, b) => a + b, 0);
// function validatePIN(pin) {
//   return [...pin].map((a) => parseInt(a));

// }

function validatePIN(pin) {
  const length = pin.length;
  if (length !== 4 && length !== 6) return false;
  for (const i in pin) {
    if (pin[i] > "9" || pin[i] < "0") return false;
  }
  return true;
}

// const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin);

console.log(validatePIN("a234"));
console.log(validatePIN("1234"));
console.log(validatePIN("123456"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("0000"));
