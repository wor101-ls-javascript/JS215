/*
**Problem**
The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. 
The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. 
In mathematical terms, this can be represented as:

  F(1) = 1
  F(2) = 1
  F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can easily be computed using a recursive function. 
A recursive function is one in which the function calls itself. 
For example, the following function is a recursive function that computes the sum of all integers between 1 and n:

  function sum(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sum(n - 1);
    }
  }

A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (n === 1), in the sum function above.
The results of each recursion are used in each step — e.g., n + sum(n - 1) uses sum(n - 1).
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; 
recursion is tricky, and even experienced developers can have difficulty dealing with it.

Understanding the Problem

- input:
  - an integer representing a position in the fib sequence

- output:
  - an integer represening the value at 'n' position in the fib sequence

- model of problem:
  - the first two numbers equal 1
  - After the second number:
    the fib number equals the total of the two previous numbers

  - creat an array with values [1, 1]
  - create a count that starts at 3 and loop until we reach our fib position
    -  pass last two values of array to fibCalc
      - add two values
      - if count not at fib position
      - pass last value and sum to fibcalc
      - else return sum
**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

// function fibonacci(position) {
//   if (position <= 2) {
//     return 1;
//   }

//   let firstNumber = 1;
//   let secondNumber = 1;
//   let count = 3;
//   let fibNumber = generateFibs(firstNumber, secondNumber, count, position);
//   console.log(fibNumber);
//   return fibNumber;
// }

// function generateFibs(firstNumber, secondNumber, count, position) {
//   let nextFib = firstNumber + secondNumber;
//   if (count === position) {
//     return nextFib;
//   } else {
//     count += 1;
//     return generateFibs(secondNumber, nextFib, count, position);
//   }
// }

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n -2);
  }
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
console.log(fibonacci(20));      // 6765