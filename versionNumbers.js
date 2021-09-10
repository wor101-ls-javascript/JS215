/*
**Problem**
While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. 
The following are all legal version numbers

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compares them, 
with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

  - If version1 > version2, we should return 1.
  - If version1 < version2, we should return -1.
  - If version1 === version2, we should return 0.
  - If either version number contains characters other than digits and the . character, we should return null

Example of version number ordering:
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

Understanding the Problem

- input:
  - is it a string? (assume yes)
    - string of numbers separated by periods
      - string always starts and ends with a number (can be 1+ in length)
      - periods sepearte numbers 
    - an input with any non digit or period should return null
- output:
  - a digit (1, -1, 0)

- model of problem:
  - look at each number one by one starting from the left and moving right
  - if at any time the number is less than the other number, it is an eariler version
  - if it any time the number is greater than the other number, it is a later version
  - if the numbers are equal, than you must start comparing the next numbers
    - if one version has more numbers than another, assume the shorter version has 0's for its version numbers
  

**Examples / Test Cases**
compareVersions('0.1', '1') === -1
compareVersions('1', '1.0') === 0
compareVersions('1.0' < '1.1') === -1
compareVersions('1.2' > '1.1') === 1
compareVersions('1.2.0.0' < '1.18.2') === -1
compareVersions('13.37' > '1.18.2') === 1

**Data Structures**
  - an array
    - each element will be one number
    - 0 index will be the farthest left number and move to the right


**Algorithm**
- match the string against all non-numeric characters and periods
  - return null if there is a match
- split the input by periods and convert the elements to integers
- make the arrays of equal length by adding elements with 0 to the shorter array
  - determine longer array using the length property for both arrays
  - find the difference in length between the two arrays
  - loop a number of times equal to the difference
    - on each iteration push an element with '0' to the shorter array
- iterate through one of the arrays
  - on each element, use the index to check it against the element at the same index in the other array
  - if the value is less than the other number, return -1
  - if the value is greater than the other number, return 1
  - if they are equal, continue to the next element of both arrays
- return 0
*/


function compareVersions(version1, version2) {
  if (invalidVersion(version1) || invalidVersion(version2)) {
    return null;
  }
  let versionArray1 = buildVersionArray(version1);
  let versionArray2 = buildVersionArray(version2);

  makeArrayLengthsEqual(versionArray1, versionArray2);
  // console.log(versionArray1);
  // console.log(versionArray2);

  for (let index = 0; index < versionArray1.length; index += 1) {
    if (versionArray1[index] < versionArray2[index]) {
      return -1;
    } else if (versionArray1[index] > versionArray2[index]) {
      return 1;
    }
  }
  return 0;
}

function makeArrayLengthsEqual(versionArray1, versionArray2) {
  let shortArray;
  let longArray;
  
  if (versionArray1.length < versionArray2.length) {
    shortArray = versionArray1;
    longArray = versionArray2;
  } else if (versionArray1.length > versionArray2.length) {
    shortArray = versionArray2;
    longArray = versionArray1;
  } else {
    shortArray = versionArray1;
    longArray = versionArray2;
  }

  let difference = longArray.length - shortArray.length;
  for (let index = 0; index < difference; index += 1) {
    shortArray.push(0);
  }
}

function buildVersionArray(version) {
  return version.split('.').map(num => Number(num));
}

function invalidVersion(version) {
  if (typeof version !== 'string') {
    return true;
  }
  let multiplePeriods = !!version.match(/\.\.+/);
  let includesNonDigitsPeriods = !!version.match(/[^\d.]/g);
  let doesNotStartWithDigit = !version.match(/^\d/);
  if (includesNonDigitsPeriods || doesNotStartWithDigit || multiplePeriods) {
    return true;
  } else {
    return false;
  }
}

console.log(compareVersions('1..5', '1.2.6') === null);
console.log(compareVersions('.1.8', '1.4.5') === null);
console.log(compareVersions(true, '1.0.2') === null);
console.log(compareVersions('0.1.a', '3.*.9') === null);
console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0', '1.1') === -1);
console.log(compareVersions('1.2', '1.1') === 1);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('13.37', '1.18.2') === 1);
console.log(compareVersions('1.0.0', '1.0.2') === -1);
