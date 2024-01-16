const Stack = require('./Stack')

function sortDescending(stack) {
  let secondStack = new Stack()
  while (!stack.isEmpty()) {
    let current = stack.pop() // 5
    while (!secondStack.isEmpty() && secondStack.peek() > current) {
      // If second stack is not empty
      let secondCurrent = secondStack.pop()
      stack.push(secondCurrent)
    }
    secondStack.push(current)
  }

  while (!secondStack.isEmpty()) {
    let current = secondStack.pop()
    stack.push(current)
  }
}

const stack = new Stack()
stack.push(4)
stack.push(5)
stack.push(3)
stack.push(1)
stack.push(2)

console.log(`Original order: ${stack.printStack()}`)
sortDescending(stack)
console.log(`Descending order: ${stack.printStack()}`)