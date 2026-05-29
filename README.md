# 🧠 JavaScript Problem Solving Patterns — Lecture 01

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Patterns](https://img.shields.io/badge/Patterns-3-4ec9b0?style=flat-square)](#-patterns-covered)
[![Problems](https://img.shields.io/badge/Problems-7-3178c6?style=flat-square)](#-problems)
[![ITI](https://img.shields.io/badge/ITI-MEARN%20Track-orange?style=flat-square)](#-credits)

> A hands-on collection of **7 algorithm problems** demonstrating three core problem-solving patterns in JavaScript: **Frequency Counter**, **Multiple Pointers**, and **Sliding Window**.
> Each solution is written with clarity-first code and real test cases to reinforce algorithmic thinking.

---

## 📌 Table of Contents

- [📖 About This Lab](#-about-this-lab)
- [🧩 Patterns Covered](#-patterns-covered)
- [📂 Problems](#-problems)
  - [Frequency Counter](#1--frequency-counter)
  - [Multiple Pointers](#2--multiple-pointers)
  - [Sliding Window](#3--sliding-window)
- [🚀 Getting Started](#-getting-started)
- [🧪 Running the Code](#-running-the-code)
- [📊 Complexity Summary](#-complexity-summary)
- [💡 Key Takeaways](#-key-takeaways)
- [🙏 Credits](#-credits)

---

## 📖 About This Lab

This lab is part of the **ITI ICC — Full-Stack MEARN Track** curriculum.
It focuses on moving beyond brute-force O(n²) solutions by learning to recognize
which pattern fits a given problem, then applying it efficiently.

```
Brute Force  →  O(n²)   nested loops, wasteful
Pattern-Based →  O(n)    single pass, elegant
```

---

## 🧩 Patterns Covered

| # | Pattern | Core Idea | Best For |
|---|---|---|---|
| 1 | **Frequency Counter** | Use an object to count occurrences | Comparing two arrays/strings |
| 2 | **Multiple Pointers** | Two index pointers moving toward each other | Sorted arrays, pairs that satisfy a condition |
| 3 | **Sliding Window** | A moving subarray/substring of fixed or variable size | Contiguous sequences, substrings |

[⬆️ Back to Top](#-table-of-contents)

---

## 📂 Problems

### 1 · Frequency Counter

---

<details>
<summary><strong>📄 same.js</strong> — Check if array2 contains the squares of array1</summary>

**Problem:**
Given two arrays, return `true` if every value in `array1` has its corresponding squared value in `array2` with the same frequency.

**Pattern:** Frequency Counter — builds two lookup objects and compares them in O(n).

```javascript
same([1, 2, 3], [4, 1, 9])  // true
same([1, 2, 1], [4, 4, 1])  // false (wrong frequency)
same([1, 2, 3], [1, 9])     // false (different length)
```

**Why this pattern?**
Without it you'd loop `array1` and call `indexOf` on `array2` for each element — that's O(n²).
The frequency counter reduces it to two separate O(n) loops.

</details>

---

<details>
<summary><strong>📄 Anagram.js</strong> — Valid Anagram checker</summary>

**Problem:**
Given two strings, return `true` if the second is an anagram of the first.

**Pattern:** Frequency Counter — counts each character in `str1`, then decrements when scanning `str2`.

```javascript
validAnagram('anagram', 'nagaram')      // true
validAnagram('qwerty', 'qeywrt')        // true
validAnagram('texttwisttime', 'timetwisttext') // true
validAnagram('rat', 'car')              // false
```

**Key insight:**
If a character in `str2` isn't in the lookup or its count drops to zero, it's not an anagram.
A count of zero is falsy in JavaScript — `if (!lookup[char])` catches both cases cleanly.

</details>

---

[⬆️ Back to Top](#-table-of-contents)

### 2 · Multiple Pointers

---

<details>
<summary><strong>📄 sumzero.js</strong> — Find the first pair that sums to zero</summary>

**Problem:**
Given a sorted array, find the first pair of values whose sum is zero. Return the pair or `undefined`.

**Pattern:** Multiple Pointers — `left` starts at beginning, `right` at end, they move toward each other.

```javascript
sumZero([-3, -2, -1, 0, 1, 2, 3])  // [-3, 3]
sumZero([-2, 0, 1, 3])              // undefined
sumZero([1, 2, 3])                  // undefined
```

**Why sorted arrays?**
Because when the sum is too big, move `right` left (decrease the larger number).
When too small, move `left` right (increase the smaller number).
This only works on a sorted input.

</details>

---

<details>
<summary><strong>📄 countUniqueValues.js</strong> — Count unique values in a sorted array</summary>

**Problem:**
Count how many unique values exist in a sorted array (can include negatives).

**Pattern:** Multiple Pointers — `i` tracks the last unique value, `j` scans ahead.
When `arr[i] !== arr[j]`, a new unique value is found — advance `i` and copy `arr[j]` into it.

```javascript
countUniqueValues([1, 1, 1, 1, 2])            // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 12])  // 7
countUniqueValues([-2, -1, -1, 0, 1])          // 4
countUniqueValues([])                           // 0
```

**Space complexity:** O(1) — modifies the array in-place, no extra data structure needed.

</details>

---

[⬆️ Back to Top](#-table-of-contents)

### 3 · Sliding Window

---

<details>
<summary><strong>📄 maxSubarraySum.js</strong> — Maximum sum of a subarray of length n</summary>

**Problem:**
Given an array and a number `num`, find the maximum sum of any contiguous subarray of length `num`.

**Pattern:** Sliding Window (fixed size) — compute the first window, then slide:
subtract the element falling out of the left side, add the element entering on the right.

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)  // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)  // 17
maxSubarraySum([4, 2, 1, 6], 1)            // 6
maxSubarraySum([], 4)                       // null
```

**Key line:**
```javascript
tempSum = tempSum - arr[i - num] + arr[i];
```
This single operation slides the window — no nested loop needed.

</details>

---

<details>
<summary><strong>📄 minSubArrayLen.js</strong> — Minimum length subarray with sum ≥ target</summary>

**Problem:**
Find the minimum length of a contiguous subarray whose sum is greater than or equal to the target.
Return `0` if no such subarray exists.

**Pattern:** Sliding Window (variable size) — expand window by moving `end`, shrink by moving `start`.

```javascript
minSubArrayLen([2, 3, 1, 2, 4, 3], 7)          // 2
minSubArrayLen([2, 1, 6, 5, 4], 9)              // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9], 95)  // 0
```

**The two rules:**
- `total < target` → expand (move `end` right)
- `total >= target` → record length, shrink (move `start` right)

</details>

---

<details>
<summary><strong>📄 findLongestSubstring.js</strong> — Longest substring without repeating characters</summary>

**Problem:**
Find the length of the longest substring with all unique characters.

**Pattern:** Sliding Window + Frequency Object — `seen` stores the last index of each character.
When a repeat is found, jump `start` forward past the previous occurrence.

```javascript
findLongestSubstring('rithmschool')   // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('bbbbbb')        // 1
findLongestSubstring('')              // 0
```

**Key line:**
```javascript
start = Math.max(start, seen[char]);
```
`Math.max` prevents `start` from moving backwards if the repeated char is before the current window.

</details>

---

[⬆️ Back to Top](#-table-of-contents)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+ installed

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmoud112001/JS-Problem-Solving.git

# Navigate into the folder
cd JS-Problem-Solving/lec01
```

[⬆️ Back to Top](#-table-of-contents)

---

## 🧪 Running the Code

Each file is self-contained with test cases at the bottom. Run any file directly:

```bash
# Frequency Counter
node same.js
node Anagram.js

# Multiple Pointers
node sumzero.js
node countUniqueValues.js

# Sliding Window
node maxSubarraySum.js
node minSubArrayLen.js
node findLongestSubstring.js
```

> All expected outputs are documented as inline comments in each file.

[⬆️ Back to Top](#-table-of-contents)

---

## 📊 Complexity Summary

| File | Pattern | Time | Space |
|---|---|---|---|
| `same.js` | Frequency Counter | O(n) | O(n) |
| `Anagram.js` | Frequency Counter | O(n) | O(n) |
| `sumzero.js` | Multiple Pointers | O(n log n)* | O(1) |
| `countUniqueValues.js` | Multiple Pointers | O(n) | O(1) |
| `maxSubarraySum.js` | Sliding Window | O(n) | O(1) |
| `minSubArrayLen.js` | Sliding Window | O(n) | O(1) |
| `findLongestSubstring.js` | Sliding Window | O(n) | O(n) |

> *O(n log n) includes the `.sort()` call. The pointer logic itself is O(n).

[⬆️ Back to Top](#-table-of-contents)

---

## 💡 Key Takeaways

- ✅ **Frequency Counter** — when you need to compare two collections element-by-element. An object lookup is O(1); `indexOf` inside a loop is O(n).
- ✅ **Multiple Pointers** — when working with a **sorted** array and looking for pairs or unique values.
- ✅ **Sliding Window** — when the problem involves a **contiguous sequence** (subarray or substring). Fixed window = known size; variable window = condition-based shrinking/expanding.
- ⚠️ Always check edge cases first: empty input, single element, `null`.

[⬆️ Back to Top](#-table-of-contents)

---

## 🙏 Credits

| | |
|---|---|
| **Instructor** | Dr. Ayman Lotfy |
| **Role** | Director — Information Technology Institute (ITI), Zagazig Branch |
| **Program** | ITI ICC — Full-Stack MEARN Track |
| **Developer** | Mahmoud Awad Saad |
| **GitHub** | [@mahmoud112001](https://github.com/mahmoud112001) |

---

*Lecture 01 · JavaScript Problem Solving Patterns · ITI ICC Program · 2026*
