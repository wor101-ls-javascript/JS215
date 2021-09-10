function foo(list) {
  return list.map(function (word) {
      return word.match(/[aeiou]/ig) || [];
    }).reduce(function (acc, letterList) {
      return acc + letterList.length;
    }, 0);
}

let list1 = ['cart', 'truck', 'cart', 'train'];
let list2 = ['apple', 'banana', 'orange'];
let list3 = ['a', 'b', 'c'];
let list4 = ['a', 'e', 'i', 'o', 'u'];


console.log(foo(list1));
console.log(foo(list2));
console.log(foo(list3));
console.log(foo(list4));
