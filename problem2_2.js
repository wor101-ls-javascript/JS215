/*
**Problem**
Write a function that can add a check digit to make the number valid per the LUhn formula
and return the original number plus that digit.  This shoulld give
"2323 2005 7766 3554" in response to "2323 2005 7766 355"

Understanding the Problem

- input:
  - string


- output:
  - sting
- model of problem:
  - pushing
**Examples / Test Cases**


**Data Structures**


**Algorithm**
git check sum
*/

function validLuhn(stringNum) {
  stringNum = stringNum.replace(/\D/g, '');
  let digits = stringNum.split('').reverse().map(str => Number(str));
  let doubledDigits = digits.map((dig, index) => {
                        if (index % 2 === 0) {
                          return dig;
                        } else {
                          return dig * 2 < 10 ? (dig * 2) : ((dig * 2) - 9);
                        }
                 });
  let checksum = doubledDigits.reduce((total, dig) => total + dig);
  return checksum % 10 === 0;
}


function createChecksum(str) {
  let validChecksum = validLuhn(str);
  let newNumber = '';

  let addNum = 0;
  while(!validChecksum) {
    if (validLuhn(str + String(addNum))) {
      return str + String(addNum);
    } else {
      addNum += 1;
    }
  }
  return str;
}

console.log(createChecksum("2323 2005 7766 355") === "2323 2005 7766 3554");
console.log(createChecksum('876') === '8763');
console.log(createChecksum('11111'));
console.log(createChecksum('8767'));
console.log(createChecksum('1111'));
console.log(createChecksum('2323az- 2005 pp7766[] 3554'));
console.log(createChecksum('2323az- 2005 pp7766[] 355'));
console.log(createChecksum('6541762821'));