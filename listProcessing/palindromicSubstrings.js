/*
**Problem**
Write a function that returns a list of all substrings of a string that are palindromic. 
That is, each substring must consist of the same sequence of characters forwards as backwards. 
The substrings in the returned list should be sorted by their order of appearance in the input string. 
Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; 
that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. 
In addition, assume that single characters are not palindromes.

**Examples / Test Cases**
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

**Data Structures**


**Algorithm**
1. get all substrings of a string
2. check each substring to see if it is a palindrome
3. return only those that are palindromes
*/

function substrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index += 1) {
    let currentSubstring = string.substring(index);
    substrings = substrings.concat(leadingSubstrings(currentSubstring));
  }
  return substrings;

}

function leadingSubstrings(string) {
  let substrings = [];

  for (let index = 1; index <= string.length; index += 1) {
    substrings.push(string.slice(0, index));
  }
  return substrings;                        //  [ 'a', 'ab', 'abc', 'abcd' ]
}

function palindromes(string) {
  let allSubstrings = substrings(string);

  let palindromes = allSubstrings.filter(substring => {
    if (substring.length === 1) {
      return false;
    } else if (substring === substring.split('').reverse().join('')) {
      return true;
    } else {
      return false;
    }
  });
  return palindromes; 
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye')); 
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]