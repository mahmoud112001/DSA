// Node for double linked list
class DLLNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add node to end
  push(val) {
    const node = new DLLNode(val);
    if (!this.head) { this.head = node; this.tail = node; }
    else { node.prev = this.tail; this.tail.next = node; this.tail = node; }
    this.length++;
    return this;
  }

  // Remove node from end
  pop() {
    if (!this.head) return undefined;
    const val = this.tail.val;
    if (this.length === 1) { this.head = null; this.tail = null; }
    else { this.tail = this.tail.prev; this.tail.next = null; }
    this.length--;
    return val;
  }

  // Add node to beginning
  unshift(val) {
    const node = new DLLNode(val);
    
    if (!this.head) { this.head = node; this.tail = node; }
    else { node.next = this.head; this.head.prev = node; this.head = node; }
    this.length++;
    return this;
  }

  // Remove node from beginning
  shift() {
    if (!this.head) return undefined;
    const val = this.head.val;
    if (this.length === 1) { this.head = null; this.tail = null; }
    else { this.head = this.head.next; this.head.prev = null; }
    this.length--;
    return val;
  }

  // Get node by index (optimized: search from nearest end)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let cur, i;
    if (index <= this.length / 2) {
      cur = this.head; i = 0;
      while (i < index) { cur = cur.next; i++; }
    } else {
      cur = this.tail; i = this.length - 1;
      while (i > index) { cur = cur.prev; i--; }
    }
    return cur;
  }

  // Set node value by index
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  // Insert node at index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const node = new DLLNode(val);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = node; node.prev = before;
    node.next = after; after.prev = node;
    this.length++;
    return true;
  }

  // Delete node at index
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return node.val;
  }

  // Search for a value, returns index or -1
  search(val) {
    let cur = this.head, i = 0;
    while (cur) { if (cur.val === val) return i; cur = cur.next; i++; }
    return -1;
  }

  // Print all values forward
  print() {
    const vals = [];
    let cur = this.head;
    while (cur) { vals.push(cur.val); cur = cur.next; }
    console.log("DLL:", vals.join(" <-> "));
    return vals;
  }
}

module.exports = DoubleLinkedList;
