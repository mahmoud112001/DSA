// ─── Node.js ───────────────────────────────────────────────────────────────
// Shared building block used by LinkedList, Stack, Queue, and BST.

export class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    
    this.right = null;
  }
}
