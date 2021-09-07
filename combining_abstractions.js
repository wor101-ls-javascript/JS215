let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

/* steps
For each name in the list, determine its first letter.
Count the occurrences of each first letter.
Find the first letter that occurs most often.
*/

let letters = names.map(name => name[0]);
console.log(letters);
// letters is [ "H", "G", "K", "H", "K", "K", "O" ]
let counts = letters.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});

console.log(counts);

let letter = Object.keys(counts).reduce((lastLetter, currentLetter) => {
  if (counts[lastLetter] > counts[currentLetter]) {
    return lastLetter;
  } else {
    return currentLetter;
  }
});

console.log(letter);      // k
