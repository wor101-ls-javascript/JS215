/*
**Problem**
You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off. 
You walk down the row of switches and toggle every one of them. 
You walk back to the beginning of the row and start another pass. 
On this second pass, you toggle switches 2, 4, 6, and so on. 
On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

Understanding the Problem

- input:
  - integer (total # of switches)
- output:
- array of integers (each integer represents a light that is on)

- model of problem:
  - a number of lights from 1 to the input integer
  - all lights start off
  - we are going to iterate through the lights one time for each number of lights
  - on each iteration we toggle the light if it is a multiple of the current light #
  - afer iterating through all the lights we need to create an array of ONLY the lights that are on
  

**Examples / Test Cases**
function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

**Data Structures**
  - an array of booleans [false, false, false]
    - false equals off, and true equals on
  - return array will be the index # + 1 of any element that is true
**Algorithm**
- create an array of length equal to the input integer
  - run a for loop from 0 to 1 less than input integer
  - add false for each element
- for loop from 1 up to and including the input integer
  - iterate over the lights array with index
    - if the lights array index  + 1 is a multiple of the loop index
      - toggle the switch (use ! on the element)
- use transormation on the array to change all true values to integers equal to their index + 1
- use reduce to remove all false elements
- return the array
*/



function lightsOn(switches) {
  let lights = [];
  populateLights(switches, lights);

  for (let index = 1; index <= switches; index += 1) {
    lights.forEach((light, lightIndex) =>{
      if ((lightIndex + 1) % index === 0) {
        lights[lightIndex] = !light;
      }
    });
  }

  lights = lights.map((light, index) => light ? index + 1 : light );
  lights = lights.filter(light => light);
  return lights;
}

function populateLights(switches, lights) {
  for (let index = 0; index < switches; index += 1) {
    lights.push(false);
  }
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]