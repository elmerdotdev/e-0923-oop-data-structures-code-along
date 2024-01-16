// Count Elements in a Stack

const Stack = require('./Stack')

function countElements(stack) {
  let counter = 0;
  const secondStack = new Stack() // place all the counted elements

  while (!stack.isEmpty()) {
    let current = stack.pop() // get the last element from main stack
    secondStack.push(current) // put last element into the second stack
    counter++
  }

  while (!secondStack.isEmpty()) {
    let current = secondStack.pop() // get the last element from second stack
    stack.push(current) // put last element into the main stack
  }

  return counter;
}

const stack = new Stack()
stack.push('John')
stack.push('Mary')
stack.push('Joe')

console.log(stack.printStack())
console.log(countElements(stack))