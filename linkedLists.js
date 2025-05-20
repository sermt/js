class Node {
  head;
  tail;
  length;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    let poppedValue;

    if (this.length === 1) {
      poppedValue = this.head.value;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      poppedValue = this.tail.value;
      this.tail = current;
      this.tail.next = null;
    }

    this.length--;
    return poppedValue;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    const shiftedValue = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return shiftedValue;
  }

  getFirst() {
    return this.head ? this.head.value : null;
  }
  getLast() {
    return this.tail ? this.tail.value : null;
  }
  getLength() {
    return this.length;
  }

  getByIndex(index) {
    return this.searchNodeByIndex(index).value;
  }

  setByIndex(index, value) {
    const current = this.searchNodeByIndex(index);
    current.value = value;
  }

  searchNodeByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const previousNode = this.searchNodeByIndex(index - 1);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
    }
  }

  reverseList() {
    if (!this.head || this.length <= 1) return;

    let current = this.head;
    this.tail = current;
    let prev = null;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);

/* list.print();
console.log(list);
console.log("Popped value:", list.pop());
console.log(list); */

/* list.unshift(6);
console.log("Unshifted value:", list);
list.print();
console.log(list.shift());
console.log(list);
list.print(); */

/* console.log(list.getFirst());
console.log(list.getLast());
console.log(list.getLength()); */

/* console.log(list.getByIndex(1));
list.setByIndex(1, 10);
console.log(list.getByIndex(1));
list.insertAtIndex(1, 20);
list.print();
list.clear();
console.log(list); */

console.log("list before reversing:", list);
list.print();
console.log("list after reversing:", list);
list.print();
