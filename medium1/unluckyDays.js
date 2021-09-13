/*
**Problem**
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. 
You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). 
You may also assume that the same calendar will remain in use for the foreseeable future.

Understanding the Problem

- input:
  - integer representing a year after 1752

- output:
  - integer representing number of friday the 13ths in that year

- model of problem:
  - need to find the day of the week for every 13th day of every month
  - need to add any of those days that is a friday to a count and return that

**Examples / Test Cases**



**Data Structures**
- use Date object to create a year
  - set it at jan 13 of the year given as argument


**Algorithm**
- create friday13th count and set to 0
- loop from 0 to 11
  - set month equal to index and date equal to 13
  - get day (returns integer)
    - if day === 6, add 1 to count of friday the 13ths
- return count
*/

function fridayThe13ths(year) {
  const FRIDAY = 5;
  let friday13ths = 0;
  

  for (let month = 0; month < 12; month += 1) {
    let monthDate = new Date(year, month, 13);
    if (monthDate.getDay() === FRIDAY) {
      friday13ths += 1;
    }
  }
  return friday13ths;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2021));      // 1