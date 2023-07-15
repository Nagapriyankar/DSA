class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let expression = userInput(0)

  let stack = new Stack();

  for(let i=0; i<expression.length; i++){
    
  }

  //end-here
});