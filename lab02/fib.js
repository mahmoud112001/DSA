// ─── Fibonacci Implementations ────────────────────────────────────────────

// Recursive (simple but slow, exponential time)
function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Iterative (fast, O(n) time, O(1) space)
function fibIterative(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) { [a, b] = [b, a + b]; }
  return b;
}

// Memoized recursive (O(n) time, O(n) space, caches results)
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
}

// Returns full series as array up to n terms
function fibSeries(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) series.push(series[i - 1] + series[i - 2]);
  return series.slice(0, n);
}

// ─── Demo ──────────────────────────────────────────────────────────────────
console.log("Recursive  fib(10):", fibRecursive(10));
console.log("Iterative  fib(10):", fibIterative(10));
console.log("Memoized   fib(10):", fibMemo(10));
console.log("Series (15 terms) :", fibSeries(15).join(", "));