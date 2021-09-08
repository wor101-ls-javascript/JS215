/*
**Problem**
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. 
As before, the function takes two arguments: an inventory item and a list of transactions. 
The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. 
Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. get all transactions for the item id (transactionsFor method)
2. use reduce on the transactions to count up current quantity (strating from 0)
  - for each transaction:
    - check if movement === 'in'
      - if true, add quantity to current total
      - if false, subtract quantity from current total
*/

function isItemAvailable(itemId, transactions) {
  let itemTransactions = transactionsFor(itemId, transactions);
  let inventory = itemTransactions.reduce((inventory, transaction) => {
                                            if (transaction.movement === 'in') {
                                              return inventory + transaction.quantity;
                                            } else {
                                              return inventory - transaction.quantity;
                                            }
  }, 0);

  return (inventory > 0);
}

function transactionsFor(itemId, transactions) {
  return transactions.filter(transaction => transaction.id === itemId);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true