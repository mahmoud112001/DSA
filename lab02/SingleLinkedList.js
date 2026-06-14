// Node for single linked list
class SLLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  
  // Add node to end
  push(val) {
    const node = new SLLNode(val);
    if (!this.head) { this.head = node; this.tail = node; }
    else { this.tail.next = node; this.tail = node; }
    this.length++;
    return this;
  }

  // Remove node from end
  pop() {
    if (!this.head) return undefined;
    let cur = this.head, prev = null;
    while (cur.next) { prev = cur; cur = cur.next; }
    if (prev) { prev.next = null; this.tail = prev; }
    else { this.head = null; this.tail = null; }
    this.length--;
    return cur.val;
  }

  // Add node to beginning
  unshift(val) {
    const node = new SLLNode(val);
    if (!this.head) { this.head = node; this.tail = node; }
    else { node.next = this.head; this.head = node; }
    this.length++;
    return this;
  }

  // Remove node from beginning
  shift() {
    if (!this.head) return undefined;
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return val;
  }

  // Get node by index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let cur = this.head, i = 0;
    while (i < index) { cur = cur.next; i++; }
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
    const node = new SLLNode(val);
    const prev = this.get(index - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true;
  }

  // Delete node at index
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed.val;
  }

  // Search for a value, returns index or -1
  search(val) {
    let cur = this.head, i = 0;
    while (cur) { if (cur.val === val) return i; cur = cur.next; i++; }
    return -1;
  }

  // Print all values
  print() {
    const vals = [];
    let cur = this.head;
    while (cur) { vals.push(cur.val); cur = cur.next; }
    console.log("SLL:", vals.join(" -> "));
    return vals;
  }
}

module.exports = SingleLinkedList;
