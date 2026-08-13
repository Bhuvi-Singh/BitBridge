# BitBridge

### Learn. Build. Master.

**BitBridge** is a free, gamified computer science learning platform designed to make programming and computer science concepts more interactive, visual, and approachable. The purpose of this project is to provide everyone with a free and accessible way to learn the basics of Computer Science, whether you are interested in the field or just want to learn some skills. This project is still developing and is open to different requests and feedback.

The platform currently focuses on **AP Computer Science A** and **Data Structures & Algorithms**, with plans to expand into (AP) cybersecurity and additional areas of computer science.

**[Launch BitBridge](https://bhuvi-singh.github.io/BitBridge/)**

---

## What is BitBridge?

BitBridge combines structured lessons, interactive visualizations, progress tracking, and gamification into one learning platform.

Instead of simply reading about an algorithm or data structure, students can learn a concept, visualize how it works, practice it, and track their progress.

### Core Features

* **Structured Learning Paths**
  * Organized AP CSA and DSA curricula with units, lessons, and progress tracking.

* **Interactive Algorithm Visualizers**
  * Explore algorithms and data structures step-by-step through interactive visualizations.

* **Gamification**
  * Earn XP, level up, maintain learning streaks, and unlock achievements.

* **Customizable Profile**
  * Personalize an avatar and unlock additional customization through progress.

* **Progress Tracking**
  * Track completed lessons, XP, streaks, achievements, and overall course progress.

* **Searchable Course Map**
  * Quickly find lessons and navigate through the curriculum.

* **Local Progress Storage**
  * Progress is saved directly in the browser, with support for exporting and importing progress.

---

## Current Courses

### AP Computer Science A

BitBridge is currently being developed toward a **complete AP Computer Science A curriculum**.

**Goal: Complete the full CSA curriculum by December 2026.**

The course covers core Java programming, object-oriented programming, arrays, `ArrayList`, recursion, algorithms, and other topics aligned with AP CSA.

### Data Structures & Algorithms

A complementary DSA track introduces concepts including:

* Algorithm analysis
* Big-O complexity
* Recursion
* Sorting
* Trees
* Graphs
* Heaps
* Tries
* Dynamic programming
* Other foundational data structures and algorithms

### Future: (AP) Cybersecurity

After the AP CSA curriculum is complete, BitBridge will expand into a dedicated (AP) cybersecurity learning track covering foundational cybersecurity concepts, networking, cryptography, security, and interactive challenges.

---

## Project Structure

```text
BitBridge/
│
├── index.html              # Main single-page application entry
├── app.js                  # Application routing, state, and event handling
├── lesson-renderer.js      # Dynamic lesson content renderer & tab manager
├── styles.css              # Custom styling, medium badges, and responsive embeds
├── syllabus-data.js        # Curriculum data and lesson content definitions
│
├── lessons/                # Markdown lesson articles
│   ├── apcsa-1-1.md        # Example lesson file
│   └── ...                 # Additional lesson content files
│
└── visualizers/            # Interactive algorithm visualizations
    ├── VisualizerEngine.js # Core visualization animation engine
    ├── visualizer-init.js  # Registry and initialization script
    └── algorithms/         # Individual visualizer modules (ArrayList, BST, etc.)
```

The project is built as a lightweight client-side web application using **HTML, CSS, and JavaScript**, with no backend currently required.

---

## Development Roadmap

### 2026

* [x] Core BitBridge platform
* [x] Dashboard and course navigation
* [x] XP, levels, streaks, and achievements
* [x] Avatar customization
* [x] Progress persistence
* [x] Algorithm visualization framework
* [ ] Complete AP CSA curriculum
* [ ] Expand AP CSA interactive content
* [ ] Expand DSA visualizers

### 2027+

* [ ] Interactive coding exercises
* [ ] Expanded assessment and mastery system
* [ ] Personalized learning recommendations
* [ ] Expanded DSA curriculum
* [ ] Cybersecurity course
* [ ] Additional algorithm and data-structure visualizers
* [ ] Improved accessibility and mobile experience
* [ ] Automated testing and CI
* [ ] Optional cross-device progress synchronization

The long-term goal is to build BitBridge into a **comprehensive, interactive computer science learning platform**, rather than simply a collection of online lessons.

---

## Visualizer Acknowledgment

The algorithm visualization component of BitBridge was inspired by **CSVisTool (CS Visualizer)** developed at the **Georgia Institute of Technology**.

CSVisTool demonstrated the educational value of interactively visualizing algorithms and data structures. BitBridge's visualizer system is independently implemented and integrated into its own curriculum, progress, and gamification systems.

---

## Technology

* HTML5
* CSS3
* JavaScript
* HTML Canvas
* SVG
* Browser `localStorage`
* GitHub Pages

---

## Author

**Bhuvi Singh**

BitBridge is an independent project focused on making computer science education more interactive, accessible, and engaging.  I have many goals with this project but I am a also the sole developer of this project, and am solely doing this project for fun and to help others. Feel free to contact me if you have any questions, comments, or concerns.

---

## License

MIT License.
