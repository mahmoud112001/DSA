const SingleLinkedList = require("./SingleLinkedList");
const DoubleLinkedList = require("./DoubleLinkedList");

// ─── Single Linked List Demo ───────────────────────────────────────────────
console.log("=== Single Linked List ===");
const sll = new SingleLinkedList();

sll.push(10).push(20).push(30);       // [10 -> 20 -> 30]
sll.print();

sll.unshift(5);                        // [5 -> 10 -> 20 -> 30]
sll.print();

console.log("pop:", sll.pop());        // removes 30
console.log("shift:", sll.shift());   // removes 5
sll.print();                           // [10 -> 20]

sll.insert(1, 15);                     // [10 -> 15 -> 20]
sll.print();

console.log("get(1):", sll.get(1).val); // 15
sll.set(1, 99);                         // [10 -> 99 -> 20]
sll.print();

console.log("search(99):", sll.search(99)); // index 1
console.log("delete(1):", sll.delete(1));   // removes 99
sll.print();                                // [10 -> 20]

// ─── Double Linked List Demo ───────────────────────────────────────────────
console.log("\n=== Double Linked List ===");
const dll = new DoubleLinkedList();

dll.push(10).push(20).push(30);       // [10 <-> 20 <-> 30]
dll.print();

dll.unshift(5);                        // [5 <-> 10 <-> 20 <-> 30]
dll.print();

console.log("pop:", dll.pop());        // removes 30
console.log("shift:", dll.shift());   // removes 5
dll.print();                           // [10 <-> 20]

dll.insert(1, 15);                     // [10 <-> 15 <-> 20]
dll.print();


console.log("get(1):", dll.get(1).val); // 15
dll.set(1, 99);                         // [10 <-> 99 <-> 20]
dll.print();

console.log("search(99):", dll.search(99)); // index 1
console.log("delete(1):", dll.delete(1));   // removes 99
dll.print();                                // [10 <-> 20]
