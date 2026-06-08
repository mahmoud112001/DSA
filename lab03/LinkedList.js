// ─── Stack &  Queue withing LinkedList.js ─────────────────────────────────────────────────────────
// Stack  → LIFO  (push / pop  from the HEAD)
// Queue  → FIFO  (enqueue at TAIL, dequeue from HEAD)

import { ListNode } from "./Node.js";

// ── Stack ──────────────────────────────────────────────────────────────────
export class Stack {
  #head = null;
  #size = 0;

  push(value) {
    const node = new ListNode(value);
    node.next = this.#head;
    this.#head = node;
    this.#size++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#size--;
    return value;
  }

  peek() {
    return this.#head ? this.#head.value : null;
  }

  isEmpty() { return this.#size === 0; }
  get size() { return this.#size; }

  print() {
    const items = [];
    let cur = this.#head;
    while (cur) { items.push(cur.value); cur = cur.next; }
    console.log("Stack (top→bottom):", items.join(" → ") || "(empty)");
  }
}

// ── Queue ──────────────────────────────────────────────────────────────────
export class Queue {
  #head = null;   
  #tail = null;   
  #size = 0;

  enqueue(value) {
    const node = new ListNode(value);
    if (this.#tail) this.#tail.next = node;
    this.#tail = node;
    if (!this.#head) this.#head = node;
    this.#size++;
  }

  /** Remove from front and return its value */
  dequeue() {
    if (this.isEmpty()) return null;
    const value = this.#head.value;
    this.#head = this.#head.next;
    if (!this.#head) this.#tail = null;   // queue became empty
    this.#size--;
    return value;
  }

  /** Peek at front without removing */
  peek() {
    return this.#head ? this.#head.value : null;
  }

  isEmpty() { return this.#size === 0; }
  get size() { return this.#size; }

  print() {
    const items = [];
    let cur = this.#head;
    while (cur) { items.push(cur.value); cur = cur.next; }
    console.log("Queue (front→back):", items.join(" → ") || "(empty)");
  }
}
