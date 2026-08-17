# Java Basics: Compiling, Running, and the main Method

Every Java program starts execution in exactly one place: the `main` method. Before your code can run, it has to go through two distinct steps — **compiling** and **running**.

## Compiling vs. Running

Java is not directly interpreted like Python. Instead:

1. You write source code in a `.java` file
2. The compiler (`javac`) translates it into bytecode, stored in a `.class` file
3. The Java Virtual Machine (JVM) runs that bytecode with the `java` command

This two-step process is why a syntax error shows up at _compile time_, while something like dividing by zero shows up at _run time_.

## The main Method Signature

Every runnable Java program needs a method with this exact signature:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

Breaking that down:

- `public` — the JVM must be able to call this method from outside the class first
- `static` — main runs without creating an instance of the class first
- `void` — main doesn't return a value back to the JVM
- `String[] args` — command-line arguments get passed in here

## Common First Errors

- Forgetting the `public class` name must match the filename
- Misspelling `main` as `Main` or `mail` (case matters!)
- Missing a semicolon at the end of a statement
