/*
Problem:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

/* answer */

/*
A = T
T = A
C = G
G = C

*/

// function dnaStrand(dna) {
//   let result = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "A") {
//       result += "T";
//     } else if (dna[i] === "T") {
//       result += "A";
//     } else if (dna[i] === "C") {
//       result += "G";
//     } else if (dna[i] === "G") {
//       result += "C";
//     }
//   }
//   return result;
// }

// oneliner
// const dnaStrand = (dna) => [...dna].map((str) => (str === "A" ? "T" : str === "T" ? "A" : str === "G" ? "C" : "G")).join("");

// or

function dnaStrand(dna) {
  const pairs = { A: `T`, T: `A`, C: `G`, G: `C` };
  return [...dna].map((str) => pairs[str]).join("");
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("TTTAAAAACCCCGGGG"));
console.log(dnaStrand("TTTTT"));
