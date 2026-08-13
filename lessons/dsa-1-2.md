# Big O Notation: Upper Bounds and Worst-Case Analysis

Big O notation describes how an algorithm's running time or memory usage grows as the input size grows. It answers one specific question: **in the worst case, how does the cost scale?**

## Why "Worst Case"?

Big O intentionally ignores lucky scenarios. Searching an unsorted array of `n` elements for a target:

- Best case: the target is the first element — `O(1)`
- Worst case: the target is last, or missing entirely — `O(n)`

Big O reports the worst case because it's the only guarantee you can actually rely on when reasoning about performance at scale.

## Common Complexity Classes (fastest to slowest growth)

- `O(1)` — constant time (array index access)
- `O(log n)` — logarithmic (binary search)
- `O(n)` — linear (single loop through the data)
- `O(n log n)` — linearithmic (efficient sorting)
- `O(n²)` — quadratic (nested loops, like bubble sort)
- `O(2ⁿ)` — exponential (naive recursive Fibonacci)

## Dropping Constants and Lower-Order Terms

Big O cares about growth *trends*, not exact operation counts. So:

```java
// This is O(n), not O(2n + 5)
for (int i = 0; i < n; i++) {
    doSomething(i);
    doSomethingElse(i);
}
```

Even though the loop body does two operations per iteration plus setup cost, none of that changes how the runtime scales — so it collapses to `O(n)`.