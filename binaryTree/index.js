class Node {
  constructor(item) {
    this.item = item;
    this.left = null;
    this.right = null;
  }

  insert(item) {
    if (!this.item) {
      this.item = item;
      return;
    }

    if (this.item === item) {
      return;
    }

    if (item > this.item) this.toRight(item);
    else this.toLeft(item);
  }

  toRight(item) {
    if (!this.right) this.right = new Node(item);
    else this.right.insert(item);
  }

  toLeft(item) {
    if (!this.left) this.left = new Node(item);
    else this.left.insert(item);
  }

  find(item) {
    if (item === this.item) {
      return this;
    }

    if (item > this.item) return this.right.find(item);
    else return this.left.find(item);
  }
}

function init() {
  const root = new Node(5);
  root.insert(2);
  root.insert(7);
  root.insert(4);
  root.insert(1);
  root.insert(6);
  root.insert(9);
  root.insert(22);
  console.log(root.find(2));
  console.log(root.find(6));
}

init();