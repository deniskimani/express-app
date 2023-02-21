/* eslint-disable consistent-return */
/* eslint-disable no-undef */
function sayHello(string) {
  // your code here
  const world = string;
  const helloText = `Hello, ${world}!`;

  return helloText;
}

function uppercase(string) {
  // your code here
  upperCased = string.toUpperCase();
  return upperCased;
}

function lowercase(string) {
  // your code here
  lowerCase = string.toLowerCase();
  return lowerCase;
}

function countCharacters(string) {
  // your code here
  count = string.length;
  return count;
}

function firstCharacter(string) {
  // your code here
  letter = string.charAt(0);
  return letter;
}

function firstCharacters(string, n) {
  // your code here
  chars = n;

  if (chars > 2 && chars <= 4) {
    firstFour = string.substring(0, 4);
    return firstFour;
  }
  if (chars <= 3) {
    firstTwo = string.substring(0, 2);
    return firstTwo;
  }
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
