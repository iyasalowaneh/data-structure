class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 10) {
    this.limit = limit;
    this.front = null;
    this.back = null;
    this.size = 0;
    this.waitingTime = 0;
    //console.log(this.waitingTime);
  }
  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.limit;

  peek = () => this.front.groupSize;

  enqueue = (groupSize) => {
    if (this.isFull()) console.log("i'm full");
    else {
      let newNode = new Node(groupSize);
      if (this.isEmpty()) {
        this.front = newNode;
        this.back = newNode;
      } else {
        this.back.next = newNode;
        this.back = newNode;
      }
    }
    this.waitingTime = groupSize * 0.5 + this.waitingTime;
    console.log(` hello  ${this.waitingTime}`);

    this.size++;
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("i'm empty");
    } else {
      let removedNode = this.front;
      if (this.size === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removedNode.next;
      }
      this.waitingTime = this.waitingTime - removedNode.groupSize * 0.5;
      //console.log(this.waitingTime);

      this.size--;
      return removedNode.groupSize;
    }
  };
}

const iyas = new Queue(4);
iyas.enqueue(4);
iyas.enqueue(1);
console.log(iyas.dequeue());
iyas.enqueue(15);

console.log(`next group in line ${iyas.peek()}`);
//let groups = [4, 1, 15, 19];

//let groups = [4, 1, 15, 19];
//let time = 0.5 * groups[i];
//time = (i) => {
// return 0.5 * groups[i];
//};
//console.log(time(0));
//console.log(time(3));

//let groups = [];
//let i = 0;
//while (groups[i] <= 12) {
//console.log(time(i));
//if (groups[i] > 12) {
// return groups[i] - 12;
//}
//}
//console.log(groups(3));
//console.log(groups(12));

const x = (groupSize) => {
  while (groupSize > 12) {
    let reminder = groupSize - 12;
    let current = groupSize - reminder;

    if (current <= 12) {
      iyas.enqueue(current);
      groupSize = groupSize - current;
    }
  }
  iyas.enqueue(groupSize);
};
x(25);
//const x = (groupSize) => {
//while (groupSize < 12) {
// iyas.enqueue(groupSize);
//}
//return groupSize - 12;
//};
//console.log(x(20));
