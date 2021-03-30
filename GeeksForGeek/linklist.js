// User defined class node

class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
    }
    this.size++;
  }

  // Helper methods
  isEmpty() {
    return this.size === 0;
  }

  size_of_list() {
    return this.size;
  }

  printList() {
    let curr = this.head;
    console.log(JSON.stringify(curr, null, 2));

    let str = "The string is : ";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    return str;
  }
}

let ll = new LinkedList();

console.log(ll.isEmpty());
console.log(ll.size_of_list());
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log(ll.isEmpty());
console.log(ll.size_of_list());
console.log(ll.printList());
