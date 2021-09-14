/*
**Problem**
Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining

Examples:

Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them in.

Understanding the Problem

- input:
  - input template (string)
  
- output:
 - string

- model of problem:
  - the input string will have several 'slots' that are defined as: adjective, noun, verb, or adverb
  - our function has a list of strings for each type of slot
  - randomly select a word of the correct type for each slot
  - return that string



  - Math.random() * high end of random #'s, take it to the floor
  - Match to 

**Examples / Test Cases**


**Data Structures**
  

**Algorithm**
- create array of words by splitting input text on whitespace
- transform the array using map / iteration (SAVE or join and return)
  - use match to get an array of 1 element that matches *adjective*, *nouns*, *verbs*, or *adverbs*
  - use switch statement on the string element of the array returned by mathc
    - if adjective (randomly select adjective and replace)
    - if noun (etc)
    - if verb (etc)
    - if adverb (etc)
- rejoin the array
- return the string

- randomWord
  - accept a word type (CONST variable
  - generate a number between 1 and the length of the word type
    - Math.random() * length to the floor
  - use random number to access element from word type and return

*/
const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];


let template1 = "The *adjective* brown *noun* *adverb* *verb* the *adjective* yellow *noun*, who *adverb* *verb* his *noun* and looks around.";

let template2 = "The *noun* *verb* the *noun*'s *noun*.";

function madlibs(template) {
  let words = template.split(' ');
    
  let replaced = words.map(word => {
    let replacementWord = word.match(/\*adjective\*|\*noun\*|\*verb\*|\*adverb\*/);
   
    if (replacementWord) {
      let newText = '';
        switch (replacementWord[0]) {
          case '*adjective*':
            let randomAdjective = getRandomWord(ADJECTIVES);
            newText = word.replace(/\*adjective\*/, randomAdjective);
            return newText;
          case '*noun*':
            let randomNoun = getRandomWord(NOUNS);
            newText = word.replace(/\*noun\*/, randomNoun);
            return newText;
          case '*verb*':
            let randomVerb = getRandomWord(VERBS);
            newText = word.replace(/\*verb\*/, randomVerb);
            return newText;
          case '*adverb*':
            let randomAdverb = getRandomWord(ADVERBS);
            newText = word.replace(/\*adverb\*/, randomAdverb);
            return newText;
          default:
            return word;
      } 
   } else {
    return word;
   }
  });
  replaced = replaced.join(' ');
  console.log(replaced);
  return replaced;
}

function getRandomWord(wordType) {
  let randomNumber = Math.floor((Math.random() * wordType.length)); 
  return wordType[randomNumber];
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.
console.log('');
madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

console.log('');
madlibs(template2);      // The "cat" "pats" the "cat"'s "head".