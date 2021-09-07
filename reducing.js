function add(previousValue, element) {
  let sum = previousValue + element;
  console.log(previousValue, element, sum);
  return sum;
}

let count = [1, 2, 3, 4, 5];
console.log(count.reduce(add));            // 15