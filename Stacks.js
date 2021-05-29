class Node {
  constructor(color, number, nextNode = null) {
    this.color = color;
    this.number = number;
    this.nextNode = nextNode;
  }
  getData = () => {
    return `${this.color} - ${this.number}`;
  };
}

class Stack {
  constructor(limit = 20) {
    this.topNode = null;
    this.limit = limit;
    this.size = 0;
  }

  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.limit;
  peek = () => this.topNode.getData();

  pop = () => {
    if (this.isEmpty()) return "still no cards yet !!";
    else {
      const removedTop = this.topNode;
      this.topNode = removedTop.nextNode;
      this.size--;
      return removedTop.getData();
    }
  };
  push = (color, number) => {
    if (this.isFull()) console.log("max card limit");
    else {
      const newNode = new Node(color, number);
      newNode.nextNode = this.topNode;
      this.topNode = newNode;
      this.size++;
      //return this.topNode.getData();
    }
  };
  shuffledCards = () => {
    let currnetNode = this.topNode;
    while (currnetNode) {
      console.log(
        `color : ${currnetNode.color} - number : ${currnetNode.number}`
      );
      currnetNode = currnetNode.nextNode;
    }
  };
}

let colors = ["blue", "yellow", "red", "green"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const random = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const cards = new Stack(20);
const cardsArray = [];

while (!cards.isFull()) {
  const color = random(colors);
  const number = random(numbers);
  if (!cardsArray.includes(`${color}, ${number}`)) {
    cards.push(color, number);
    cardsArray.push(`${color}, ${number}`);
  }
}

//while (topNode.color !== color && topNode.number !== number) {
// return cards.push(color, number);
//}

//console.log("deck :", cards);

//console.log(`color : ${color} - number : ${number}`);
cards.shuffledCards();

let player1 = [];
let player2 = [];

let i = 0;
while (i < 5) {
  player1.push(cards.pop());
  player2.push(cards.pop());
  i++;
}
console.log(`player1 : ${player1}`);
console.log(`player2 : ${player2}`);
console.log(cards.peek());
