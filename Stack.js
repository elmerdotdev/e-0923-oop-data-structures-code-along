class Stack {
  constructor() {
    this.items = []; // our stack
  }

  isEmpty() {
    // Return true/false is stack is empty
    return this.items.length === 0
  }

  push(element) {
    // Adds a new item to stack
    this.items.push(element)
  }

  pop() {
    // Removes the last item in stack
    if (this.isEmpty()) {
      return 'Stack is empty'
    }
    return this.items.pop()
  }

  peek() {
    // Read the last item in stack
    if (this.isEmpty()) {
      return 'Stack is empty'
    }
    return this.items[this.items.length - 1]
  }

  size() {
    // Returns the number of items in our stack
    return this.items.length
  }

  printStack() {
    // Output all the items in our stack
    let str = ""
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " "
    }
    return str
  }
}

module.exports = Stack