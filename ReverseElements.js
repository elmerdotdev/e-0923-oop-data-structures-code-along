// Reverse a Stack

const Stack = require('./Stack')

function reverseElements(stack) {
  const secondStack = new Stack()

  while (!stack.isEmpty()) {
    let currentLastItem = stack.pop() // get the last item from our main stack
    secondStack.push(currentLastItem) // place current last item on top of second stack
  }

  return secondStack
}


const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(`Original stack: ${stack.printStack()}`)
let reversedStack = reverseElements(stack)
console.log(`Reversed stack: ${reversedStack.printStack()}`)