# Lab 02 — Linked Lists

This folder contains two linked list implementations in JavaScript and a demo file that exercises the main operations.

## Files

- `SingleLinkedList.js`
  - Singly linked list implementation.
  - Each node contains a `val` and a `next` pointer.
  - Supported methods:
    - `push(val)` — append a value to the end of the list.
    - `pop()` — remove and return the last value.
    - `unshift(val)` — add a value to the beginning.
    - `shift()` — remove and return the first value.
    - `get(index)` — retrieve the node at a given index.
    - `set(index, val)` — update a node value by index.
    - `insert(index, val)` — insert a new node at a given index.
    - `delete(index)` — remove a node by index and return its value.
    - `search(val)` — find the index of the first matching value.
    - `print()` — log the list values in order.

- `DoubleLinkedList.js`
  - Doubly linked list implementation.
  - Each node contains `val`, `prev`, and `next` pointers.
  - Supports the same operations as the singly linked list, with additional bidirectional traversal.
  - The `get(index)` method is optimized to start from the nearest end (`head` or `tail`).

- `demo.js`
  - Demonstrates both `SingleLinkedList` and `DoubleLinkedList`.
  - Shows how to chain `push()` calls, use insertion and deletion methods, and print the list state.

- `fib.js`
  - Fibonacci helper and demo file.
  - Contains four implementations:
    - `fibRecursive(n)` — simple recursive solution.
    - `fibIterative(n)` — efficient O(n) iterative solution.
    - `fibMemo(n)` — memoized recursion with caching.
    - `fibSeries(n)` — returns the first `n` Fibonacci numbers as an array.
  - Prints example results for `fib(10)` and a 15-term series.

## How to run

From the `lab02` folder, run:

```bash
node demo.js
node fib.js
```

This will print example operations for both list types, including push, unshift, pop, shift, insert, get, set, search, and delete, plus Fibonacci results for recursive, iterative, memoized, and series implementations.

## Complexity summary

- `push()` and `unshift()` — O(1)
- `pop()` and `shift()` — O(n) for singly linked list, O(1) for doubly linked list when removing from beginning or end
- `get(index)` — O(n), optimized to O(n/2) on average in the doubly linked list
- `insert(index, val)` and `delete(index)` — O(n)
- `search(val)` — O(n)

## Notes

- The singly linked list is simpler and uses less memory per node.
- The doubly linked list requires extra pointers but allows efficient traversal from both ends.
- The demo is a practical way to verify that both list implementations behave correctly.
