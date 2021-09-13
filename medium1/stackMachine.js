/*
**Problem**
A stack is a list of values that grows and shrinks dynamically. 
A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. 
Each operation in the language operates on a register, which can be thought of as the current value. 
The register is not part of the stack. An operation that requires two values pops the topmost item from the stack 
(i.e., the operation removes the most recently pushed value from the stack), 
operates on the popped value and the register value, and stores the result back in the register.

Consider a MULT operation in a stack-and-register language. 
It removes the value from the stack, multiplies the removed stack value with the register value, 
then stores the result back in the register. 
For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, 
the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. 
If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

  - n : Place a value, n, in the register. Do not modify the stack.
  - PUSH : Push the register value onto the stack. Leave the value in the register.
  - ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  - DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  - REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  - POP : Remove the topmost item from the stack and place it in the register.
  - PRINT : Print the register value.

All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. 
Your function may assume that all arguments are valid programs — i.e., 
they will not do anything like trying to pop a non-existent value from the stack, 
and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

Understanding the Problem

- input:
  - input is a string
    - consist of ' ' separated integers and words
    - integers need to be converted to Numbers and pushed to the register
    - words are commands that interact with the stack and the register

- output:
  - log to the console the register value whenever the 'PRINT' command is operated on

- model of problem:
  - break the input string into pieces
  - operate on each piece one at a time sequential
  - identify difference between a number and command word
  - command word, we need some sort of switch to direct to a function
  - for numbers we need to update the register

**Examples / Test Cases**


**Data Structures**
- an array of string objects created from the input string

**Algorithm**
- create an array of inputCommands by splitting the inputString
- create a stack and set equal to []
- create a register and set equal 0

- iterate (forEach) over the inputCommands
  - check to see if the current command is a number or commandWord using regex
  - if a number
    - update the register to the number
  - if a command word
    - send it to a switch statement to check each command
      - PUSH : Push the register value onto the stack. Leave the value in the register.
      - ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
      - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
      - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
      - DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
      - REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
      - POP : Remove the topmost item from the stack and place it in the register.
      - PRINT : Print the register value.
*/

function minilang(inputString) {
  let inputCommands = inputString.split(' ');
  let stack = [];
  let register = 0;

  inputCommands.forEach(command => {
    if (command.match(/\d/)) {
       register = parseInt(command, 10);
    } else {
      switch (command) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = parseInt(register / stack.pop(), 10);
          break;
        case 'REMAINDER':
          register = register % stack.pop();
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
      } 
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)