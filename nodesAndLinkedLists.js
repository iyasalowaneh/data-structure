const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(age, highlight, nextNode = null) {
    this.age = age;
    this.highlight = highlight;
    this.nextNode = nextNode;
  }
}

class Linkedlist {
  constructor(age, highlight) {
    this.head = new Node(age, highlight);
  }

  insertbegging = (age, highlight) => {
    const node = new Node(age, highlight, this.head);
    this.head = node;
  };

  getlinkedlist = () => {
    let current = this.head;
    while (current) {
      console.log(
        `year: ${current.age}, enter highlight: ${current.highlight}`
      );
      current = current.nextNode;
    }
  };

  inserhighlight = (age) => {
    let current = this.head;
    while (current.age < age) {
      let currentAge = current.age + 1;
      if (current.nextNode && current.nextNode.age === currentAge) {
        current = current.nextNode;
      } else {
        let highlight = prompt(` enter highlight for ${currentAge}`);
        let newNode = new Node(currentAge, highlight, current.nextNode);
        current.nextNode = newNode;
        current = newNode;
      }
    }
  };
}

const agelist = new Linkedlist(7, "I turned seven");
agelist.insertbegging(3, "I started walking");
agelist.insertbegging(1, "I was born");

let age = prompt(` enter your age `);
agelist.inserhighlight(age);

agelist.getlinkedlist();
