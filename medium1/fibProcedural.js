/*
**Problem**
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. 
In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. 
If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Note that JavaScript can accurately compute integers up to 16 digits long; 
this means that fibbonacci(78) is the largest Fibbonacci number that you can accurately compute with simple operations in JavaScript.

Understanding the Problem

- input:
  - input integer representing position in fib sequence

- output:
  - integer representing value at nth position in fib seqeunce

- model of problem:
  - step through each fib number without recursion
  - loop up to our position (use length of array?)

**Examples / Test Cases**


**Data Structures**
- array to hold fib numbers

**Algorithm**
- return 1 if input equals 1 or 2
- create array [1, 1]
- create a loop that runs while length of the array is less than or EQUAL to our input number
  - on each loop, add the last two elements of the array together
  - push them onto the end of the array
- return the last element of the array


*/
function fibonacci(position) {
  if (position <= 2) {
    return 1;
  }

  let fibNumbers = [1, 1];
  while (fibNumbers.length < position) {
    let firstNumber = fibNumbers[fibNumbers.length - 1];
    let secondNumber = fibNumbers[fibNumbers.length - 2];
    fibNumbers.push(firstNumber + secondNumber);
  }
  return fibNumbers[fibNumbers.length - 1];
}

console.log(fibonacci(3));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050