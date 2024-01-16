// Check if Element exist in Stack
const Stack = require('./Stack')

function checkElement(stack, targetElement) {
  let found = false
  const secondStack = new Stack() // a temporary stack

  while (!stack.isEmpty()) {
    let current = stack.pop() // get the last item from original stack
    if (current === targetElement) {
      found = true
    }
    secondStack.push(current)
  }

  // Restore original stack
  while (!secondStack.isEmpty()) {
    let current = secondStack.pop()
    stack.push(current)
  }

  return found // boolean true or false
}


const stack = new Stack()
stack.push('dog')
stack.push('cat')
stack.push('bird')
stack.push('rat')
stack.push('squirrel')

console.log(stack.printStack())
console.log(`Did you find the bird? ${checkElement(stack, 'bird')}`)