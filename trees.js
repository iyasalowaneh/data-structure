const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild = (node) => {
    if (this.children.length < 2) {
      this.children.push(node);
      console.log(`child ${child.name}`);
    } else console.log("orphrn");
  };

  //removeChild = (node) => this.children.filter((child) => child !== node);

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      console.log(currentNode.name);
      nodes = [...nodes, ...currentNode.children];
    }
  };

  search = (child) => {
    let nodes = [this];
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      if (child.name.split(" ")[1] === currentNode.name.split(" ")[0]) {
        return currentNode;
      }
      nodes = [...nodes, ...currentNode.children];
    }
    return " no parent";
  };
}
let childName = prompt(`please enter child full name (done if finished)`);
let root = new TreeNode("family");

while (childName !== "done") {
  let tree = new TreeNode(childName);
  let parent = root.search(tree);

  if (parent !== " no parent") {
    parent.addChild(tree);
  } else console.log(parent);
  childName = prompt(`please enter child full name (done if finished)`);
}
//if (childName === "done") tree.traverse;
root.traverse();
