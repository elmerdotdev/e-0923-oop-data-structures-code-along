// Remove Elements from a Stack

const Stack = require('./Stack')

function removeElements(stack) {
  while (!stack.isEmpty()) {
    // While stack is not empty, remove last item from array
    stack.pop()
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(`Elements before removing: ${stack.printStack()}`)
removeElements(stack)
console.log(`Elements after removing: ${stack.printStack()}`)