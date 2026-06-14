// ─── main.js ───────────────────────────────────────────────────────────────


import { Stack }  from "./LinkedList.js";
import { Queue }  from "./LinkedList.js";
import { BST }    from "./BST.js";

// ══════════════════════════════════════════════════════════════════════════
//  STACK demo
// ══════════════════════════════════════════════════════════════════════════
console.log("=== STACK ===");

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();                          // Stack (top→bottom): 30 → 20 → 10

console.log("peek  →", stack.peek());  // 30
console.log("pop   →", stack.pop());   // 30
console.log("pop   →", stack.pop());   // 20
stack.print();                          // Stack (top→bottom): 10
console.log("size  →", stack.size);    // 1

// ══════════════════════════════════════════════════════════════════════════
//  QUEUE demo
// ══════════════════════════════════════════════════════════════════════════
console.log("\n=== QUEUE ===");
const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.print();                              // Queue (front→back): A → B → C

console.log("peek    →", queue.peek());    // A
console.log("dequeue →", queue.dequeue()); // A
console.log("dequeue →", queue.dequeue()); // B
queue.print();                              // Queue (front→back): C
console.log("size    →", queue.size);      // 1

// ══════════════════════════════════════════════════════════════════════════
//  BST demo
// ══════════════════════════════════════════════════════════════════════════
console.log("\n=== BST ===");
const tree = new BST();

//  Recursive inserts
tree.insertR(50);
tree.insertR(30);
tree.insertR(70);

//  Iterative inserts
tree.insertI(20);
tree.insertI(40);
tree.insertI(60);
tree.insertI(80);

//        50
//       /  \
//      30   70
//     / \  / \
//    20 40 60 80

tree.inOrder();   // BST in-order: 20 → 30 → 40 → 50 → 60 → 70 → 80
