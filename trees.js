const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild = (node) => {
    if (this.children.length <= 2) this.children.push(node);
  };

  removeChild = (node) => this.children.filter((child) => child !== node);

  traverse = (child) => {
    let nodes = [this];
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      if (child.name.split(" ")[1] === currentNode.name.split(" ")[0]) {
        return currentNode;
      }
      nodes = [...nodes, ...currentNode.children];
    }
  };
}

let childName = prompt(`enter child full name (done if finished)`);
let tree = new TreeNode();

while (childName !== "done") {
  tree.addChild(childName);
}
if (childName === "done") tree.traverse;

console.log(tree.addChild);
