/*
**Problem**
Write a function that generates and returns an acronym from a string of words. 
For example, the function should return "PNG" for the string "Portable Network Graphics". 
Count compound words (words connected with a dash) as separate words.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. split string by spaces and -
2. loop through array
  - add first letter of each element to new string and capitalize
3. return new string

*/


function acronym(string) {
  return string.split(/[ -]/)
               .reduce((acronym, word) => acronym + word[0].toUpperCase(), '');

}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"