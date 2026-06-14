import { TreeNode } from "./Node.js";

export class BST {
  #root = null;

  // ── Recursive insert ──────────────────────────────────────────────────
  insertR(value) {
    this.#root = this.#insertRec(this.#root, value);
  }

  #insertRec(node, value) {
    if (node === null) return new TreeNode(value);   

    if (value < node.value)
      node.left  = this.#insertRec(node.left,  value);
    else if (value > node.value)
      
      node.right = this.#insertRec(node.right, value);
    // duplicate → ignore

    return node;
  }

  // ── Iterative insert ──────────────────────────────────────────────────
  insertI(value) {
    const node = new TreeNode(value);

    if (!this.#root) { this.#root = node; return; }

    let cur = this.#root;
    while (true) {
      if (value < cur.value) {
        if (cur.left === null) { cur.left  = node; break; }
        cur = cur.left;
      } else if (value > cur.value) {
        if (cur.right === null) { cur.right = node; break; }
        cur = cur.right;
      } else {
        break; // duplicate → ignore
      }
    }
  }

  // ── In-order traversal (Left → Root → Right) ─────────────────────────
  // Visits nodes in ascending sorted order for a BST.
  inOrder() {
    const result = [];
    this.#traverse(this.#root, result);
    console.log("BST in-order:", result.join(" → ") || "(empty)");
  }

  #traverse(node, result) {
    if (node === null) return;
    this.#traverse(node.left,  result);
    result.push(node.value);
    this.#traverse(node.right, result);
  }
}
