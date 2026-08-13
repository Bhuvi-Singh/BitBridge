# Arithmetic Expressions: Operators and Precedence

Java supports the five standard arithmetic operators: `+`, `-`, `*`, `/`, and `%`. Most of these behave the way you'd expect from math class — but two behaviors trip up almost every new Java student.

## Integer Division

When *both* operands are `int`, division truncates toward zero instead of producing a decimal:

```java
int a = 7 / 2;      // a is 3, not 3.5
int b = -7 / 2;     // b is -3, not -3.5 or -4
double c = 7 / 2;   // c is 3.0 — division still happened as ints FIRST
double d = 7.0 / 2; // d is 3.5 — one operand is already a double
```

That third line is the classic bug. Even though the result is being stored in a `double`, the division `7 / 2` still happens with integer math *before* the result is converted.

## The Modulo Operator

`%` returns the **remainder** of division, not a percentage:

- `10 % 3` is `1`
- `9 % 3` is `0`
- `-7 % 3` is `-1` (the sign follows the dividend)

## Order of Operations (Precedence)

Java follows standard PEMDAS-style precedence:

1. Parentheses `()`
2. Multiplication `*`, Division `/`, Modulo `%` — evaluated left to right
3. Addition `+`, Subtraction `-` — evaluated left to right

So `2 + 3 * 4` evaluates to `14`, not `20`.