/*
**Problem**
We have the following Array of information for some popular bands:

There are problems with this data, though, so we first have to clean it up before we can use it:

  - The band countries are wrong: all the bands should have 'Canada' as the country.
  - The band name should have all words capitalized.
  - Remove all dots from the band names.

  Write a function that can process the input band Array and return an Array that contains the fixed information:

**Examples / Test Cases**


**Data Structures**
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

**Algorithm**
1. use map for transformation on the 'data'
2. for each transformed element
  - call updateCountry
      - use dot notation to update country to 'Canada'
  - call capitalizeName
    - split string into array of words
    - use map to transform array
      - on each word
        - split into string of characters
        - use toUpperCase() on first character
        -rejoin characters
      - return transformed word
    - retjoin words and return
  - call removeDot
    - use replace all to remove all '.' and replace with ''
3. return new array
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silv.er mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
           updateCountry(band);
           capitalizeBandName(band);
           removeDot(band);
           return band;
         });
}

function removeDot(band) {
  band.name = band.name.replaceAll('.', '');
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  let nameArray = band.name.split(' ');
  nameArray = nameArray.map(word => capitalizeWord(word));
  band.name = nameArray.join(' ');
}

function capitalizeWord(word) {
  let letters = word.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]