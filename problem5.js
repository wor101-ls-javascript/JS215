/*
**Problem**
Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). 
Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

    3 RAILS
    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . A . . . I . . . V . . . D . . . E . . . N . .


    4 RAILS
    w . . . . . i 
    . e . . . d . 
    . . a . e .
    . . . r .


    5 RAILS
    w . . . . . . . c     [ 0 dot - 7 dot]
    . e . . . . . s       [ 1 dot - 5 dot]
    . . a . . . i         [ 2 dot - 3 dot]
    . . . r . d           [ 3 dot - 1 dot]
    . . . . e .           [ 4 dot - 1 dot]

 - creata are two-dimensional array
 - create a currentRailsIndex and set to 0
 - create an increaseRailIndex and set to true
 - iterate over the rails
  - check if rail index should keep increaseing or decreasing
  - set currentRailsIndex position to 'char'
  - set remaining RailsIndex positions to 'null'
 - once are rail arrays are built with 'char' and  null elements
    - create a count and set to 0
    - iterate over an array of the characters
      - for each char, find the first index of 'char' element in rail array at index of current count in main railsArray
      - set that element to the current char
      - if NO first index of 'char'
        - that rail must be filled
        - increase the count by 1 and repeat process on next rail array
  - once rail arrays are populated create a for loop that goes from 0 to one less than length of a single rail array
    - use the index to check values of each rail
      - if the value is null do nothing
      - if the value is NOT null, add the chara to a decrypted string


Then reads off:

    WECRLTEERDSOEEFEAOCAIVDEN

To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

    ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
    . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
    . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The first row has seven spots taht can be filled with "WECRLTE".

    W . . . E . . . C . . . R . . . L . . . T . . . E
    . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
    . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Now the 2nd row takes "ERDSOEEFEAOC".

    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Leaving "AIVDEN" for the last row.

    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . A . . . I . . . V . . . D . . . E . . . N . .

If you now read along the zig-zag shape you can read the original message.


Understanding the Problem

1) Encoding

    - input: 
      - string
        - represents message to be ciphered
      - integer
        - represents the # of rails to cipher with

    - output:
      - string of ciphered word

    - model of problem:
      - create the rails
        - letters of word to be ciphered need to be re-arranged
        - can cipher letters by adding them to a number of arrays equal to the # of rails
        - each subsequent letter is addede to a subsequent array at an index of 1 greater
        - where there is no letter we need to add a value such as null to make 
      - create ciphered string
        - filter the arrays down to only letters
        - combine into a string

**Examples / Test Cases**

railEncrypt("WE ARE DISCOVERED FLEE AT ONCE", 3) === 'WECRLTEERDSOEEFEAOCAIVDEN'
railEncrypt("ROSIE IS A GOOD DOG");

**Data Structures**
- a two-dimensional array
  - each element (an array) represents one rail

- output is going to be a string

**Algorithm**
RAIL ENCRYPTION
- create an Array called rails
  - use the input integer for # of rails to add that many empty arrays to the array
- strip out whitespace from input message and turn into an array of characters

- set a currentRailIndex variable to 0
- set increaseRailIndex to true
- iterate over the array of characters
  - check if currentRail Index is negative or equal to totalRails value
    - if negative, set increaseRailIndex to true
    - if equal to totalRails value, set increaseRailIndex to false
  - if increaseRailInde is true 
    - add character to element at index equal to currentRailIndex
    - add 1 ot the count
  - if increaseRailIndex is false
    - add character to element at index equal to currentRailIndex
    - subtract 1 from the count


  -****addNullValues***
    - take currentRailIndex that character was added to, total # of rails, and by reference the rails array
    - loop from 0 while less than total # of rails
      - if current index does not equal the currentRailIndex
      - add null to element at current index in rails array

  ***combineRails****
    - iterate through the railsArray and transform using map  [['a', null, null, null, 'b'], [null, 'b', null, null]]
      - on each element use filter to remove all null values and only return characters [['a', 'e'], ['b', etch]]
      - then join the array of characters into a string ['ae', 'b...']
    - reduce the string elements in the array into a single string 'aeb....'


RAIL DECRYPTION
  - Input:
    - string, encrytped
    - integer, represents number of rails

  - Output:
    - string, decrypted

   - creata are two-dimensional array
 - create a currentRailsIndex and set to 0
 - create an increaseRailIndex and set to true
 - iterate over the rails
  - check if rail index should keep increaseing or decreasing
  - set currentRailsIndex position to 'char'
  - set remaining RailsIndex positions to 'null'
 - once are rail arrays are built with 'char' and  null elements
    - create a count and set to 0
    - iterate over an array of the characters
      - for each char, find the first index of 'char' element in rail array at index of current count in main railsArray
      - set that element to the current char
      - if NO first index of 'char'
        - that rail must be filled
        - increase the count by 1 and repeat process on next rail array
  - once rail arrays are populated create a for loop that goes from 0 to one less than length of a single rail array
    - use the index to check values of each rail
      - if the value is null do nothing
      - if the value is NOT null, add the chara to a decrypted string

*/


function railDecrypt(message, numberOfRails){
  let railsArray = [];
  addEmptyRails(railsArray, numberOfRails);

  let currentRailIndex = 0;
  let increaseRailIndex = true;

  for (let index = 0; index < message.length; index += 1) {
    if (currentRailIndex === 0 && increaseRailIndex == false) {
      increaseRailIndex = true;
    } else if ((currentRailIndex === numberOfRails - 1) && increaseRailIndex === true) {
      increaseRailIndex = false;
    }

    railsArray[currentRailIndex].push('char');
    addNullValues(currentRailIndex, railsArray);
    increaseRailIndex ? currentRailIndex += 1 : currentRailIndex -= 1;
  }

   addCharactersToRails(message, railsArray);
   return buildDecryptedMessage(railsArray);
 
}

function buildDecryptedMessage(railsArray) {
  let decryptedString = '';
  for (let index = 0; index < railsArray[0].length; index += 1) {
    railsArray.forEach(rail => {
      if (rail[index] !== null) {
        decryptedString += rail[index];
      }
    });
  }
  console.log(decryptedString);
  return decryptedString;
}


function addNullValues(currentRailIndex, railsArray) {
  for (let index = 0; index < railsArray.length; index += 1) {
    if (index !== currentRailIndex) {
      railsArray[index].push(null);
    }
  }
}


function railEncrypt(message, numberOfRails) {
  let railsArray = [];
  addEmptyRails(railsArray, numberOfRails);
  charArray = message.replace(/ /g, '').split('');

  let currentRailIndex = 0;
  let increaseRailIndex = true
  charArray.forEach(char => {
    if (currentRailIndex === 0 && increaseRailIndex === false) {
      increaseRailIndex = true;
    } else if (currentRailIndex === (numberOfRails - 1) && increaseRailIndex === true) {
      increaseRailIndex = false;
    }
    railsArray[currentRailIndex].push(char);
    increaseRailIndex ? currentRailIndex += 1 : currentRailIndex -= 1;
  });
  
  let encodedMessage = combineRails(railsArray);
  console.log(encodedMessage);
  return encodedMessage;
}

function combineRails(railsArray) {
  railsArray = railsArray.map(rail => rail.join(''));
  return railsArray.reduce((encodedMessage, stringElement) => encodedMessage + stringElement, '');
}

function addEmptyRails(railsArray, numberOfRails) {
  for (let index = 0; index < numberOfRails; index += 1) {
    railsArray.push([]);
  }
}

function addCharactersToRails(message, railsArray){
  let currentRail = 0;

  message.split('').forEach(char => {
    let nextAvailableIndex = -1;

    do {
      nextAvailableIndex = railsArray[currentRail].indexOf('char')
      if (nextAvailableIndex === -1) {
        currentRail +=1;
      }
    } while (nextAvailableIndex === -1)
    railsArray[currentRail][nextAvailableIndex] = char;
  });
}

// console.log(railEncrypt("WE ARE DISCOVERED FLEE AT ONCE", 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
// railEncrypt("ROSIE IS A GOOD DOG", 3);                  //  REGDOIIAODOSSOG
// railEncrypt("abcdefghijklmnopqrstuvwxyz", 3);


// railEncrypt("WE ARE DISCOVERED FLEE AT ONCE", 4);    
// railEncrypt("ROSIE IS A GOOD DOG", 4);
// railEncrypt("abcdefghijklmnopqrstuvwxyz", 4);         // agmsybfhlnrtxzceikoquwdjpv


// railDecrypt("WECRLTEERDSOEEFEAOCAIVDEN", 3) 
railDecrypt("REGDOIIAODOSSOG", 3);                 // 'ROSIEISAGOODDOG'
railDecrypt("agmsybfhlnrtxzceikoquwdjpv", 4);      //'abcdefghijklmnopqrstuvwxyz'