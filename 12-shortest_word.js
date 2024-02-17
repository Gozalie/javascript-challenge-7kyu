/*
Problem:

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

/* answer */
const findShort = (s) =>
  s
    .split(" ")
    .map((a) => a.length)
    .sort((a, b) => a - b)[0];

//or

// const findShort = (s) => Math.min(...s.split(" ").map((a) => a.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
