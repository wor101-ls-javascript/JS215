function myMap(array, func) {
  let newArray = [];
  // for (let i = 0; i < array.length; i += 1) {
  //   newArray.push(func(array[i]));
  // }
  array.forEach(element => newArray.push(func(element)));
  return newArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));  // [ 2, 3, 4, 5 ]