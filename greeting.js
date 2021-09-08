"use strict";
/* Write a program that asks for a user's name, then greets the user with that name. 
If the user appends a ! to his name (e.g., 'Bill!'), the computer should "yell" its greeting: 
that is, it should log everything to the console in uppercase. 
You can check whether the name ends with a ! using String.prototype.endsWith (ES6 only). 
You can remove the ! from the user's name with String.prototype.slice.
*/

const rlSync = require('readline-sync');

let userName = rlSync.question('What is your name? ');
let response = `Hello ${userName}.`

if (userName[userName.length - 1] === '!') {
  console.log(response.toUpperCase() + ' WHY ARE WE SCREAMING?');
} else {
  console.log(response);
}
