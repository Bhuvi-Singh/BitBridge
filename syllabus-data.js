/* =========================================================================
   SYLLABUS DATA — full AP CS A and Data Structures & Algorithms course maps.
   Parsed directly from the provided syllabus outlines. Consumed by the
   Course Map renderer in app.js (renderCourseMap / buildUnitCard etc).

   Lesson ids are namespaced per track (apcsa-<unit>-<lesson>,
   dsa-<unit>-<lesson>) and are DIFFERENT from the ids used by the
   Dashboard's COURSE_DATA mock (e.g. 'java-basics'). Both id schemes
   currently live in the same progress.completedLessons array in
   localStorage without colliding, but they describe the same underlying
   lesson content twice under two names — worth unifying in a future pass
   rather than in this same diff.
   ========================================================================= */
const SYLLABUS_DATA = {
  "ap-csa": {
    "id": "ap-csa",
    "label": "AP Computer Science A",
    "phases": [
      {
        "number": 1,
        "title": "Using Objects and Methods",
        "units": [
          {
            "number": 1,
            "title": "Primitive Types & Variables",
            "subtitle": "The Building Blocks",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-1-1",
                "number": "1.1",
                "title": "Java Basics: Compiling, Running, and the main Method"
              },
              {
                "id": "apcsa-1-2",
                "number": "1.2",
                "title": "Primitives: int, double, and boolean Machine Representations"
              },
              {
                "id": "apcsa-1-3",
                "number": "1.3",
                "title": "Declaring vs. Initializing Variables and Memory Assignment"
              },
              {
                "id": "apcsa-1-4",
                "number": "1.4",
                "title": "Arithmetic Expressions: Operators (+, -, *, /, %) and Precedence"
              },
              {
                "id": "apcsa-1-5",
                "number": "1.5",
                "title": "Compound Assignment Operators (+=, -=, *=, /=, %=)"
              },
              {
                "id": "apcsa-1-6",
                "number": "1.6",
                "title": "Widening and Narrowing Conversions: Implicit vs. Explicit Casting"
              }
            ]
          },
          {
            "number": 2,
            "title": "Objects & The String Class",
            "subtitle": "The Digital Blueprints",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-2-1",
                "number": "2.1",
                "title": "Objects vs. Primitives: Reference Types and Reference Memory Addresses"
              },
              {
                "id": "apcsa-2-2",
                "number": "2.2",
                "title": "Instantiating Objects: Constructors and the new Keyword"
              },
              {
                "id": "apcsa-2-3",
                "number": "2.3",
                "title": "Calling Methods: Parameters, Return Values, and Side Effects"
              },
              {
                "id": "apcsa-2-4",
                "number": "2.4",
                "title": "String Literals and the String Pool Structure"
              },
              {
                "id": "apcsa-2-5",
                "number": "2.5",
                "title": "String Methods: Indexing, length(), and substring() Mechanics"
              },
              {
                "id": "apcsa-2-6",
                "number": "2.6",
                "title": "String Methods: indexOf(), equals(), and compareTo()"
              },
              {
                "id": "apcsa-2-7",
                "number": "2.7",
                "title": "Immutability: What Happens to Strings in Memory During Modification"
              }
            ]
          },
          {
            "number": 3,
            "title": "Wrapper Classes & The Math Class",
            "subtitle": "The Utility Belt",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-3-1",
                "number": "3.1",
                "title": "Wrapper Classes: Integer and Double Core Architecture"
              },
              {
                "id": "apcsa-3-2",
                "number": "3.2",
                "title": "Autoboxing and Unboxing Mechanics"
              },
              {
                "id": "apcsa-3-3",
                "number": "3.3",
                "title": "Static Utility Methods: Integer.MIN_VALUE and Integer.MAX_VALUE"
              },
              {
                "id": "apcsa-3-4",
                "number": "3.4",
                "title": "The Math Class: Non-Random Operations (abs(), pow(), sqrt())"
              },
              {
                "id": "apcsa-3-5",
                "number": "3.5",
                "title": "Randomization: Mastering Math.random() and Custom Range Scaling"
              }
            ]
          }
        ]
      },
      {
        "number": 2,
        "title": "Selection and Iteration",
        "units": [
          {
            "number": 4,
            "title": "Boolean Expressions & Conditionals",
            "subtitle": "The Decision Makers",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-4-1",
                "number": "4.1",
                "title": "Relational Operators (==, !=, <, >, <=, >=)"
              },
              {
                "id": "apcsa-4-2",
                "number": "4.2",
                "title": "Logical Operators: AND (&&), OR (||), and NOT (!) Evaluation"
              },
              {
                "id": "apcsa-4-3",
                "number": "4.3",
                "title": "Short-Circuit Evaluation Mechanics in Boolean Expressions"
              },
              {
                "id": "apcsa-4-4",
                "number": "4.4",
                "title": "De Morgan's Laws: Simplifying Complex Logical Negations"
              },
              {
                "id": "apcsa-4-5",
                "number": "4.5",
                "title": "One-Way and Two-Way Selection: if and if-else Statements"
              },
              {
                "id": "apcsa-4-6",
                "number": "4.6",
                "title": "Multi-Way Selection: Nested if and if-else if Chains"
              },
              {
                "id": "apcsa-4-7",
                "number": "4.7",
                "title": "Object Equality: == vs. .equals() for Reference Variables"
              }
            ]
          },
          {
            "number": 5,
            "title": "Iteration & Loops",
            "subtitle": "The Repeaters",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-5-1",
                "number": "5.1",
                "title": "The while Loop: Condition-Driven Iteration Mechanics"
              },
              {
                "id": "apcsa-5-2",
                "number": "5.2",
                "title": "Infinite Loops and Off-by-One Loop Bounds Errors"
              },
              {
                "id": "apcsa-5-3",
                "number": "5.3",
                "title": "The Standard for Loop: Initialization, Condition, and Increment"
              },
              {
                "id": "apcsa-5-4",
                "number": "5.4",
                "title": "Interchanging Loops: Converting while Loops to for Loops"
              },
              {
                "id": "apcsa-5-5",
                "number": "5.5",
                "title": "Nested Loops: Row-Column Mechanics and Execution Tracking"
              },
              {
                "id": "apcsa-5-6",
                "number": "5.6",
                "title": "Algorithmic Iteration: String Traversals and Character Analysis"
              }
            ]
          }
        ]
      },
      {
        "number": 3,
        "title": "Class Creation",
        "units": [
          {
            "number": 6,
            "title": "Class Structure & Encapsulation",
            "subtitle": "The Blueprint",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-6-1",
                "number": "6.1",
                "title": "Object-Oriented Design: Designing Instance Variables and States"
              },
              {
                "id": "apcsa-6-2",
                "number": "6.2",
                "title": "Access Modifiers: The Philosophy of public vs. private"
              },
              {
                "id": "apcsa-6-3",
                "number": "6.3",
                "title": "Data Encapsulation: Implementing Backing Fields and Modifiers"
              },
              {
                "id": "apcsa-6-4",
                "number": "6.4",
                "title": "Writing Constructors: Default, No-Argument, and Parameterized"
              },
              {
                "id": "apcsa-6-5",
                "number": "6.5",
                "title": "Local Variables vs. Instance Variables: Scope and Shadowing"
              },
              {
                "id": "apcsa-6-6",
                "number": "6.6",
                "title": "The this Keyword: Self-Reference and Disambiguation"
              }
            ]
          },
          {
            "number": 7,
            "title": "Methods & Static Operations",
            "subtitle": "The Mechanics",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-7-1",
                "number": "7.1",
                "title": "Accessor (Getter) Methods and Safe Return Types"
              },
              {
                "id": "apcsa-7-2",
                "number": "7.2",
                "title": "Mutator (Setter) Methods and Validating State Changes"
              },
              {
                "id": "apcsa-7-3",
                "number": "7.3",
                "title": "Methods with Parameters: Pass-by-Value Mechanics in Java"
              },
              {
                "id": "apcsa-7-4",
                "number": "7.4",
                "title": "Overloading Constructors and Methods: Signatures and Resolution"
              },
              {
                "id": "apcsa-7-5",
                "number": "7.5",
                "title": "Static Variables: Class-Level State Shared Across Instances"
              },
              {
                "id": "apcsa-7-6",
                "number": "7.6",
                "title": "Static Methods: Constraints and Inability to Access this"
              },
              {
                "id": "apcsa-7-7",
                "number": "7.7",
                "title": "Documenting Code: Writing and Reading Javadoc Comments"
              }
            ]
          },
          {
            "number": 8,
            "title": "Inheritance & Polymorphism",
            "subtitle": "The Family Tree",
            "note": "not tested anymore",
            "lessons": [
              {
                "id": "apcsa-8-1",
                "number": "8.1",
                "title": "Hierarchy Design: Superclasses, Subclasses, and the extends Keyword"
              },
              {
                "id": "apcsa-8-2",
                "number": "8.2",
                "title": "Subclass Constructors and Implicit/Explicit super() Calls"
              },
              {
                "id": "apcsa-8-3",
                "number": "8.3",
                "title": "Method Overriding: Redefining Superclass Behavior"
              },
              {
                "id": "apcsa-8-4",
                "number": "8.4",
                "title": "Polymorphism: Compile-Time vs. Run-Time Rules"
              },
              {
                "id": "apcsa-8-5",
                "number": "8.5",
                "title": "Polymorphic References: Declaring Superclass, Instantiating Subclass"
              },
              {
                "id": "apcsa-8-6",
                "number": "8.6",
                "title": "Object Casting: Upcasting vs. Downcasting and ClassCastException"
              },
              {
                "id": "apcsa-8-7",
                "number": "8.7",
                "title": "The Universal Object Class and Overriding .toString()"
              }
            ]
          }
        ]
      },
      {
        "number": 4,
        "title": "Data Collections",
        "units": [
          {
            "number": 9,
            "title": "1D Arrays",
            "subtitle": "The Fixed Lockers",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-9-1",
                "number": "9.1",
                "title": "Array Memory Allocation: Declaring and Creating Fixed-Size Arrays"
              },
              {
                "id": "apcsa-9-2",
                "number": "9.2",
                "title": "Element Access: Brackets [], Zero-Indexing, and Array Bounds"
              },
              {
                "id": "apcsa-9-3",
                "number": "9.3",
                "title": "Traversing 1D Arrays: Using Standard for Loops"
              },
              {
                "id": "apcsa-9-4",
                "number": "9.4",
                "title": "The Enhanced for Loop (For-Each): Mechanics and Copy Trade-offs"
              },
              {
                "id": "apcsa-9-5",
                "number": "9.5",
                "title": "Fundamental Array Algorithms: Finding Min, Max, and Calculating Averages"
              },
              {
                "id": "apcsa-9-6",
                "number": "9.6",
                "title": "Transforming Arrays: Reversing Elements and Shifting Indices"
              }
            ]
          },
          {
            "number": 10,
            "title": "ArrayLists",
            "subtitle": "The Flexible Trains",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-10-1",
                "number": "10.1",
                "title": "The ArrayList Class: Dynamic Resizing vs. Fixed Arrays"
              },
              {
                "id": "apcsa-10-2",
                "number": "10.2",
                "title": "Generics and Type Parameters: Enforcing Type Safety"
              },
              {
                "id": "apcsa-10-3",
                "number": "10.3",
                "title": "Core Methods: add(element), size(), and get(index)"
              },
              {
                "id": "apcsa-10-4",
                "number": "10.4",
                "title": "Positional Methods: add(index, element) and set(index, element)"
              },
              {
                "id": "apcsa-10-5",
                "number": "10.5",
                "title": "Removing Data: remove(index) and Index-Shifting Side Effects"
              },
              {
                "id": "apcsa-10-6",
                "number": "10.6",
                "title": "Concurrent Modification Errors during ArrayList Traversals"
              },
              {
                "id": "apcsa-10-7",
                "number": "10.7",
                "title": "Linear Search and Selection Sort Mechanics on ArrayLists"
              }
            ]
          },
          {
            "number": 11,
            "title": "2D Arrays",
            "subtitle": "The Grid Systems",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-11-1",
                "number": "11.1",
                "title": "2D Array Memory Structure: Arrays of Arrays Architecture"
              },
              {
                "id": "apcsa-11-2",
                "number": "11.2",
                "title": "Initializing and Accessing Elements via Row-Major Indices [r][c]"
              },
              {
                "id": "apcsa-11-3",
                "number": "11.3",
                "title": "Determining Dimensions: grid.length vs. grid[0].length"
              },
              {
                "id": "apcsa-11-4",
                "number": "11.4",
                "title": "Row-Major Traversal using Nested Loops"
              },
              {
                "id": "apcsa-11-5",
                "number": "11.5",
                "title": "Column-Major Traversal using Nested Loops"
              },
              {
                "id": "apcsa-11-6",
                "number": "11.6",
                "title": "Advanced 2D Grid Algorithms: Sub-grid Searching and Neighbor Checking"
              }
            ]
          },
          {
            "number": 12,
            "title": "Recursion",
            "subtitle": "The Mirror Reflections",
            "note": "",
            "lessons": [
              {
                "id": "apcsa-12-1",
                "number": "12.1",
                "title": "Recursive Logic: Identifying Base Cases and Recursive Steps"
              },
              {
                "id": "apcsa-12-2",
                "number": "12.2",
                "title": "Tracing Simple Recursive Methods and the Call Stack Execution"
              },
              {
                "id": "apcsa-12-3",
                "number": "12.3",
                "title": "String and Array Manipulations Using Recursion"
              },
              {
                "id": "apcsa-12-4",
                "number": "12.4",
                "title": "Divide-and-Conquer Sorting Foundations: Merge Sort Concept"
              },
              {
                "id": "apcsa-12-5",
                "number": "12.5",
                "title": "Binary Search: Iterative vs. Recursive Scaling Comparison"
              }
            ]
          }
        ]
      }
    ]
  },
  "dsa": {
    "id": "dsa",
    "label": "Data Structures & Algorithms",
    "phases": [
      {
        "number": 1,
        "title": "Foundations & Core Linear Structures",
        "units": [
          {
            "number": 1,
            "title": "Complexity Analysis",
            "subtitle": "The Measuring Tape",
            "note": "",
            "lessons": [
              {
                "id": "dsa-1-1",
                "number": "1.1",
                "title": "Introduction to Algorithm Analysis & Growth Rates"
              },
              {
                "id": "dsa-1-2",
                "number": "1.2",
                "title": "Big O Notation: Upper Bounds and Worst-Case Analysis"
              },
              {
                "id": "dsa-1-3",
                "number": "1.3",
                "title": "Big Theta and Big Omega Notations"
              },
              {
                "id": "dsa-1-4",
                "number": "1.4",
                "title": "Analyzing Time Complexity of Iterative Loops"
              },
              {
                "id": "dsa-1-5",
                "number": "1.5",
                "title": "Space Complexity and Memory Footprints"
              }
            ]
          },
          {
            "number": 2,
            "title": "Bit Operations",
            "subtitle": "The Low-Level Tools",
            "note": "",
            "lessons": [
              {
                "id": "dsa-2-1",
                "number": "2.1",
                "title": "Binary Number Foundations and Two's Complement Representation"
              },
              {
                "id": "dsa-2-2",
                "number": "2.2",
                "title": "Bitwise Logical Operators: AND, OR, XOR, and NOT"
              },
              {
                "id": "dsa-2-3",
                "number": "2.3",
                "title": "Bit Shifting Mechanics: Left Shifts, Logical Right, and Arithmetic Right Shifts"
              },
              {
                "id": "dsa-2-4",
                "number": "2.4",
                "title": "Bit Masking Techniques: Setting, Clearing, and Toggling Specific Bits"
              },
              {
                "id": "dsa-2-5",
                "number": "2.5",
                "title": "Algorithmic Optimization Tricks (e.g., Checking Parity, Power of Two, Bit Counting)"
              }
            ]
          },
          {
            "number": 3,
            "title": "Arrays & Matrices",
            "subtitle": "Contiguous Memory",
            "note": "",
            "lessons": [
              {
                "id": "dsa-3-1",
                "number": "3.1",
                "title": "Memory Architecture: Contiguous Allocation & Addressing Mechanics"
              },
              {
                "id": "dsa-3-2",
                "number": "3.2",
                "title": "Static Arrays: Operations, Time Complexities, and Limitations"
              },
              {
                "id": "dsa-3-3",
                "number": "3.3",
                "title": "Dynamic Arrays (e.g., Vectors/ArrayLists) and Amortized Analysis"
              },
              {
                "id": "dsa-3-4",
                "number": "3.4",
                "title": "Two-Pointer Techniques and Sliding Window Foundations"
              },
              {
                "id": "dsa-3-5",
                "number": "3.5",
                "title": "Common Array In-Place Manipulations"
              },
              {
                "id": "dsa-3-6",
                "number": "3.6",
                "title": "Two-Dimensional Arrays and Row-Major vs. Column-Major Memory Layout"
              },
              {
                "id": "dsa-3-7",
                "number": "3.7",
                "title": "Matrix Traversal: Row-by-Row, Column-by-Column, and Diagonal"
              },
              {
                "id": "dsa-3-8",
                "number": "3.8",
                "title": "Spiral Traversal and Layer-by-Layer Matrix Rotations"
              },
              {
                "id": "dsa-3-9",
                "number": "3.9",
                "title": "Matrix Arithmetic: Addition, Transposition, and Multiplication Algorithms"
              },
              {
                "id": "dsa-3-10",
                "number": "3.10",
                "title": "Representing Sparse Matrices"
              }
            ]
          },
          {
            "number": 4,
            "title": "Linked Lists",
            "subtitle": "Node-Based Memory",
            "note": "",
            "lessons": [
              {
                "id": "dsa-4-1",
                "number": "4.1",
                "title": "Node-Based Architecture vs. Contiguous Memory Arrays"
              },
              {
                "id": "dsa-4-2",
                "number": "4.2",
                "title": "Singly Linked Lists: Insertion, Deletion, and Traversal Mechanics"
              },
              {
                "id": "dsa-4-3",
                "number": "4.3",
                "title": "Doubly Linked Lists: Two-Way Traversal and Bidirectional Nodes"
              },
              {
                "id": "dsa-4-4",
                "number": "4.4",
                "title": "Circular Linked Lists and Sentinel Nodes"
              },
              {
                "id": "dsa-4-5",
                "number": "4.5",
                "title": "Structural Transformations: Reversing a Linked List and Cycle Detection (Floyd's Tortoise and Hare)"
              }
            ]
          },
          {
            "number": 5,
            "title": "Stacks & Queues",
            "subtitle": "Linear ADTs",
            "note": "",
            "lessons": [
              {
                "id": "dsa-5-1",
                "number": "5.1",
                "title": "The LIFO Principle and Abstract Data Type (ADT) Interface"
              },
              {
                "id": "dsa-5-2",
                "number": "5.2",
                "title": "Implementing Stacks Using Arrays vs. Linked Lists"
              },
              {
                "id": "dsa-5-3",
                "number": "5.3",
                "title": "Delimiter Matching and Parentheses Validation"
              },
              {
                "id": "dsa-5-4",
                "number": "5.4",
                "title": "Monotonic Stacks and Next Greater Element Problems"
              },
              {
                "id": "dsa-5-5",
                "number": "5.5",
                "title": "The FIFO Principle and Abstract Data Type (ADT) Interface"
              },
              {
                "id": "dsa-5-6",
                "number": "5.6",
                "title": "Array-Based Circular Queues and Linked List Implementations"
              },
              {
                "id": "dsa-5-7",
                "number": "5.7",
                "title": "Double-Ended Queues (Deques) and Monotonic Queues"
              }
            ]
          }
        ]
      },
      {
        "number": 2,
        "title": "Core Algorithmic Frameworks",
        "units": [
          {
            "number": 6,
            "title": "Recursion",
            "subtitle": "The Algorithmic Engine",
            "note": "",
            "lessons": [
              {
                "id": "dsa-6-1",
                "number": "6.1",
                "title": "The Philosophy of Recursion: Base Cases and Recursive Steps"
              },
              {
                "id": "dsa-6-2",
                "number": "6.2",
                "title": "The System Call Stack and Stack Overflow Risks"
              },
              {
                "id": "dsa-6-3",
                "number": "6.3",
                "title": "Linear Recursion vs. Tree Recursion"
              },
              {
                "id": "dsa-6-4",
                "number": "6.4",
                "title": "Tail Recursion and Compiler Optimizations"
              },
              {
                "id": "dsa-6-5",
                "number": "6.5",
                "title": "Asymptotic Analysis of Recursive Functions & Recurrence Relations (Moved from Module 1 to here where it's contextually relevant)"
              },
              {
                "id": "dsa-6-6",
                "number": "6.6",
                "title": "Designing Recursive Solutions: Divide and Conquer Foundations"
              }
            ]
          },
          {
            "number": 7,
            "title": "Searching & Sorting",
            "subtitle": "Divide and Conquer",
            "note": "",
            "lessons": [
              {
                "id": "dsa-7-1",
                "number": "7.1",
                "title": "Linear Search: Implementation and Use Cases"
              },
              {
                "id": "dsa-7-2",
                "number": "7.2",
                "title": "Binary Search: Divide-and-Conquer on Sorted Arrays"
              },
              {
                "id": "dsa-7-3",
                "number": "7.3",
                "title": "Binary Search Variations: Finding First/Last Occurrences"
              },
              {
                "id": "dsa-7-4",
                "number": "7.4",
                "title": "Searching on Answers: Binary Search in Unconventional Spaces"
              },
              {
                "id": "dsa-7-5",
                "number": "7.5",
                "title": "Elementary Sorts: Bubble, Selection, and Insertion Sort"
              },
              {
                "id": "dsa-7-6",
                "number": "7.6",
                "title": "Divide-and-Conquer Sorts: Merge Sort Mechanics and Space Trade-offs"
              },
              {
                "id": "dsa-7-7",
                "number": "7.7",
                "title": "Quicksort: Partitioning Strategies, Pivot Selection, and Worst-Case Pitfalls"
              },
              {
                "id": "dsa-7-8",
                "number": "7.8",
                "title": "Non-Comparison Sorts: Counting Sort and Radix Sort"
              },
              {
                "id": "dsa-7-9",
                "number": "7.9",
                "title": "Sorting Stability, Adaptive Sorting, and Algorithmic Selection (Note: Heapsort has been moved to the Heaps module)."
              }
            ]
          }
        ]
      },
      {
        "number": 3,
        "title": "Associative & Hierarchical Structures",
        "units": [
          {
            "number": 8,
            "title": "Hash Tables",
            "subtitle": "Constant Time Lookups",
            "note": "",
            "lessons": [
              {
                "id": "dsa-8-1",
                "number": "8.1",
                "title": "Core Concepts: Keys, Values, and Associative Mapping"
              },
              {
                "id": "dsa-8-2",
                "number": "8.2",
                "title": "Designing Effective Hash Functions & Compression Functions"
              },
              {
                "id": "dsa-8-3",
                "number": "8.3",
                "title": "Collision Resolution: Separate Chaining (Open Hashing)"
              },
              {
                "id": "dsa-8-4",
                "number": "8.4",
                "title": "Collision Resolution: Open Addressing (Linear, Quadratic, & Double Hashing)"
              },
              {
                "id": "dsa-8-5",
                "number": "8.5",
                "title": "Load Factors, Rehashing, and Amortized Constant-Time Performance"
              }
            ]
          },
          {
            "number": 9,
            "title": "Strings & Pattern Matching",
            "subtitle": "",
            "note": "Placed here because complex string algorithms rely on pointers, sliding windows, and hashing",
            "lessons": [
              {
                "id": "dsa-9-1",
                "number": "9.1",
                "title": "String Representations: Immutability vs. Mutability"
              },
              {
                "id": "dsa-9-2",
                "number": "9.2",
                "title": "Fundamental String Operations: Concatenation, Reversal, and Substrings"
              },
              {
                "id": "dsa-9-3",
                "number": "9.3",
                "title": "Palindrome and Anagram Manipulation Techniques"
              },
              {
                "id": "dsa-9-4",
                "number": "9.4",
                "title": "Naive Substring Searching vs. Rabin-Karp Hashing"
              },
              {
                "id": "dsa-9-5",
                "number": "9.5",
                "title": "Introduction to Advanced Pattern Matching (KMP Algorithm concept)"
              }
            ]
          },
          {
            "number": 10,
            "title": "Trees & Binary Search Trees",
            "subtitle": "",
            "note": "",
            "lessons": [
              {
                "id": "dsa-10-1",
                "number": "10.1",
                "title": "Hierarchical Structures: Terminology (Root, Parent, Child, Leaf, Height)"
              },
              {
                "id": "dsa-10-2",
                "number": "10.2",
                "title": "Binary Tree Properties and Array vs. Node Representations"
              },
              {
                "id": "dsa-10-3",
                "number": "10.3",
                "title": "Depth-First Tree Traversals: Preorder, Inorder, and Postorder"
              },
              {
                "id": "dsa-10-4",
                "number": "10.4",
                "title": "Breadth-First Tree Traversal: Level-Order Iteration"
              },
              {
                "id": "dsa-10-5",
                "number": "10.5",
                "title": "Multi-Way Trees (Introduction to N-ary Trees)"
              },
              {
                "id": "dsa-10-6",
                "number": "10.6",
                "title": "The BST Property: Left-Child < Root < Right-Child"
              },
              {
                "id": "dsa-10-7",
                "number": "10.7",
                "title": "Searching, Inserting, and Deleting Nodes in a BST"
              },
              {
                "id": "dsa-10-8",
                "number": "10.8",
                "title": "Complexity Degeneration: Skewed Trees and the Need for Balance"
              },
              {
                "id": "dsa-10-9",
                "number": "10.9",
                "title": "Introduction to Self-Balancing Trees: AVL Tree Rotations"
              },
              {
                "id": "dsa-10-10",
                "number": "10.10",
                "title": "Introduction to Red-Black Tree Concepts"
              }
            ]
          },
          {
            "number": 11,
            "title": "Heaps & Priority Queues",
            "subtitle": "",
            "note": "",
            "lessons": [
              {
                "id": "dsa-11-1",
                "number": "11.1",
                "title": "The Heap Invariant: Max-Heaps vs. Min-Heaps"
              },
              {
                "id": "dsa-11-2",
                "number": "11.2",
                "title": "Array Representation of Binary Heaps"
              },
              {
                "id": "dsa-11-3",
                "number": "11.3",
                "title": "Heap Operations: Sift-Up, Sift-Down, Insertion, and Extraction"
              },
              {
                "id": "dsa-11-4",
                "number": "11.4",
                "title": "Linear-Time Heap Construction (Heapify Algorithm)"
              },
              {
                "id": "dsa-11-5",
                "number": "11.5",
                "title": "Tree-Based Sorting: Heapsort Mechanics (Moved here so students actually understand the underlying data structure first)"
              },
              {
                "id": "dsa-11-6",
                "number": "11.6",
                "title": "The Priority Queue ADT and Real-World Scheduling Applications"
              }
            ]
          },
          {
            "number": 12,
            "title": "Tries",
            "subtitle": "The Prefix Tree",
            "note": "",
            "lessons": [
              {
                "id": "dsa-12-1",
                "number": "12.1",
                "title": "Trie Architecture: Node Structuring for Character Alphabets"
              },
              {
                "id": "dsa-12-2",
                "number": "12.2",
                "title": "Key Insertion and Retrieval Mechanics in Prefix Trees"
              },
              {
                "id": "dsa-12-3",
                "number": "12.3",
                "title": "Prefix-Based Searching and Auto-Complete Feature Design"
              },
              {
                "id": "dsa-12-4",
                "number": "12.4",
                "title": "Space Optimization Strategies in Tries (Compressed Tries / Radix Trees)"
              }
            ]
          }
        ]
      },
      {
        "number": 4,
        "title": "Graphs & Advanced Algorithmic Paradigms",
        "units": [
          {
            "number": 13,
            "title": "Backtracking & Dynamic Programming",
            "subtitle": "State-Space Exploration",
            "note": "Grouped together because they are both extensions of recursive optimization; Backtracking is the prerequisite mindset for DP",
            "lessons": [
              {
                "id": "dsa-13-1",
                "number": "13.1",
                "title": "The Core Concept of Backtracking: State Space Tree Exploration"
              },
              {
                "id": "dsa-13-2",
                "number": "13.2",
                "title": "Decision Trees and Pruning Infeasible Branches"
              },
              {
                "id": "dsa-13-3",
                "number": "13.3",
                "title": "Classical Problems: The N-Queens Puzzle"
              },
              {
                "id": "dsa-13-4",
                "number": "13.4",
                "title": "Subset Generation and Permutation Algorithms"
              },
              {
                "id": "dsa-13-5",
                "number": "13.5",
                "title": "Combinatorial Search and Constraint Satisfaction Problems"
              },
              {
                "id": "dsa-13-6",
                "number": "13.6",
                "title": "Identifying DP Problems: Overlapping Subproblems and Optimal Substructure"
              },
              {
                "id": "dsa-13-7",
                "number": "13.7",
                "title": "Top-Down DP: Recursion with Memoization"
              },
              {
                "id": "dsa-13-8",
                "number": "13.8",
                "title": "Bottom-Up DP: Iterative Tabulation and Space Optimization"
              },
              {
                "id": "dsa-13-9",
                "number": "13.9",
                "title": "Classic DP Patterns: The 0/1 Knapsack Problem"
              },
              {
                "id": "dsa-13-10",
                "number": "13.10",
                "title": "Classic DP Patterns: Longest Common Subsequence & Edit Distance"
              }
            ]
          },
          {
            "number": 14,
            "title": "Graph Foundations & Basic Traversals",
            "subtitle": "",
            "note": "",
            "lessons": [
              {
                "id": "dsa-14-1",
                "number": "14.1",
                "title": "Graph Foundations: Vertices, Edges, Directed, Undirected, and Weighted Networks"
              },
              {
                "id": "dsa-14-2",
                "number": "14.2",
                "title": "Representing Graphs: Adjacency Matrices vs. Adjacency Lists"
              },
              {
                "id": "dsa-14-3",
                "number": "14.3",
                "title": "Trade-offs in Storage, Edge Lookup, and Neighborhood Iteration"
              },
              {
                "id": "dsa-14-4",
                "number": "14.4",
                "title": "Graph Connectivity, Degrees, and Path Concepts"
              },
              {
                "id": "dsa-14-5",
                "number": "14.5",
                "title": "Breadth-First Search (BFS): Shortest Paths in Unweighted Graphs"
              },
              {
                "id": "dsa-14-6",
                "number": "14.6",
                "title": "Depth-First Search (DFS): Backtracking and Pathfinding on Graphs"
              },
              {
                "id": "dsa-14-7",
                "number": "14.7",
                "title": "Stack Applications: Expression Evaluation (Infix, Postfix, Prefix) (Moved late to serve as a bridge to parsing or graph/tree expression evaluation, or can remain a standalone stack topic)"
              },
              {
                "id": "dsa-14-8",
                "number": "14.8",
                "title": "Queue Applications: Task Scheduling, Buffer Management, and Intro to Breadth-First Search (Moved here to natively attach to BFS)"
              }
            ]
          },
          {
            "number": 15,
            "title": "Advanced Graph Algorithms & Structures",
            "subtitle": "",
            "note": "",
            "lessons": [
              {
                "id": "dsa-15-1",
                "number": "15.1",
                "title": "Detecting Cycles in Directed and Undirected Graphs"
              },
              {
                "id": "dsa-15-2",
                "number": "15.2",
                "title": "Topological Sorting: Kahn's Algorithm vs. DFS Approaches"
              },
              {
                "id": "dsa-15-3",
                "number": "15.3",
                "title": "Single-Source Shortest Paths: Dijkstra's Algorithm for Non-Negative Weights"
              },
              {
                "id": "dsa-15-4",
                "number": "15.4",
                "title": "Handling Negative Weights: The Bellman-Ford Algorithm"
              },
              {
                "id": "dsa-15-5",
                "number": "15.5",
                "title": "Disjoint-Set Abstract Data Type: MakeSet, Union, and Find Interfaces (Union-Find moved right before MSTs where it is critically used)"
              },
              {
                "id": "dsa-15-6",
                "number": "15.6",
                "title": "Naive Disjoint-Set Implementations and Linked-List Reps"
              },
              {
                "id": "dsa-15-7",
                "number": "15.7",
                "title": "Optimization 1: Union by Rank / Size"
              },
              {
                "id": "dsa-15-8",
                "number": "15.8",
                "title": "Optimization 2: Path Compression Mechanics"
              },
              {
                "id": "dsa-15-9",
                "number": "15.9",
                "title": "Complexity Analysis: The Inverse Ackermann Function"
              },
              {
                "id": "dsa-15-10",
                "number": "15.10",
                "title": "Spanning Tree Properties and the Cut Property Lemma"
              },
              {
                "id": "dsa-15-11",
                "number": "15.11",
                "title": "Kruskal's Algorithm: Edge Sorting and Union-Find Integration"
              },
              {
                "id": "dsa-15-12",
                "number": "15.12",
                "title": "Prim's Algorithm: Greedy Vertex Expansion Using Priority Queues"
              },
              {
                "id": "dsa-15-13",
                "number": "15.13",
                "title": "Algorithmic Selection: Dense vs. Sparse Graph MST Performance"
              }
            ]
          }
        ]
      }
    ]
  }
};
