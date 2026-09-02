# 🌐 Web Development — 35 Day Learning Roadmap

A structured **35-day Web Development Foundation** covering:

- HTML + CSS — 10 Days
- Basic JavaScript — 15 Days
- Advanced JavaScript — 10 Days
- Conceptual assignments
- Practical coding exercises
- Mini projectsgi
- Final project
- Developer thinking and problem-solving

> **Goal:** Build a strong understanding of how modern web pages and web applications work, instead of only memorizing syntax.

---

# 📌 Learning Philosophy

Throughout this roadmap, every topic will be learned using this pattern:

1. **What is it?**
2. **Why do we need it?**
3. **How does it work?**
4. **Syntax**
5. **Examples**
6. **Common mistakes**
7. **Practice questions**
8. **Conceptual assignment**
9. **Mini project / practical use**
10. **Revision**

The focus is not only on writing code, but also on developing the ability to answer:

> **"If I have to build something, how should I think about it before writing code?"**

---

# 🗺️ Complete Roadmap

```text
WEB DEVELOPMENT
│
├── PART 1 — HTML + CSS
│   └── 10 Days
│
├── PART 2 — BASIC JAVASCRIPT
│   └── 15 Days
│
└── PART 3 — ADVANCED JAVASCRIPT
    └── 10 Days

TOTAL = 35 DAYS
```

---

# 🟢 PART 1 — HTML + CSS

## 🎯 Goal

Learn how to build the **structure, content, layout, styling, and responsive design** of a webpage.

```text
HTML → Structure / Meaning
CSS  → Design / Layout / Appearance
```

---

# Day 1 — HTML Foundation + CSS Introduction

> Existing knowledge: `<h1>` to `<h6>` and `<input>` are already introduced.

## HTML Topics

- What is HTML?
- HTML = HyperText Markup Language
- HTML is a markup language, not a programming language
- HTML document structure
- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<title>`
- `<body>`
- Tags
- Elements
- Opening and closing tags
- Void elements
- Attributes

### HTML Tags

```text
<p>
<br>
<hr>
<strong>
<em>
<a>
<img>
<ul>
<ol>
<li>
```

### Existing Tags

```text
<h1>
<h2>
<h3>
<h4>
<h5>
<h6>

<input>
```

## CSS Topics

- What is CSS?
- Why do we need CSS?
- HTML vs CSS
- Inline CSS
- Internal CSS
- External CSS
- `color`
- `background-color`
- `font-size`
- `font-family`
- `text-align`

## Practice

Build a personal introduction page containing:

- Name
- Heading
- Paragraph
- Link
- Image
- List

## Conceptual Assignment

Explain:

1. Why is HTML called a markup language?
2. Why do we need CSS?
3. Difference between a tag and an element.
4. Difference between an attribute and a value.
5. Why does `<img>` not normally need a closing tag?

---

# Day 2 — CSS Selectors + Box Model

## HTML

- `<div>`
- `<span>`

## CSS Selectors

- Universal selector
- Element selector
- Class selector
- ID selector
- Group selector
- Descendant selector

## CSS Box Model

```text
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

Learn:

```css
width
height
margin
padding
border
box-sizing
```

## Conceptual Assignment

Given a webpage, identify:

- Content
- Padding
- Border
- Margin

Then explain why two elements appear farther apart.

## Practice Project

Create a profile card using:

- `div`
- `h2`
- `p`
- `img`
- CSS box model

---

# Day 3 — Semantic HTML + Text Styling

## Semantic HTML

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

## CSS Text Styling

```css
font-family
font-size
font-weight
font-style
line-height
letter-spacing
text-decoration
text-transform
```

## Learn

- Semantic vs non-semantic HTML
- Why semantic HTML matters
- Document structure
- Heading hierarchy

## Assignment

Build a blog page:

```text
Header
   ↓
Navigation
   ↓
Main
 ┌───────────────┬───────────────┐
 │   Article     │    Sidebar    │
 └───────────────┴───────────────┘
   ↓
Footer
```

## Conceptual Questions

- Why use `<header>` instead of a generic `<div>`?
- When should `<section>` be used?
- What is the purpose of `<article>`?
- What is the difference between `<div>` and `<span>`?

---

# Day 4 — Forms + CSS Forms

## HTML Form Elements

```text
<form>
<label>
<input>
<textarea>
<select>
<option>
<button>
```

## Input Types

```text
text
email
password
number
date
checkbox
radio
file
submit
button
search
tel
url
```

## Important Attributes

```text
id
class
name
value
placeholder
required
disabled
readonly
min
max
maxlength
```

## CSS

- Input styling
- Button styling
- `:hover`
- `:focus`
- `:active`

## Assignment

Build a complete registration form:

```text
Name
Email
Password
Age
Date of Birth
Gender
Skills
Profile Photo
Submit
```

## Conceptual Assignment

Explain the difference between:

```text
id
class
name
value
placeholder
```

---

# Day 5 — CSS Display + Positioning

## Display

```css
display: block;
display: inline;
display: inline-block;
display: none;
```

Understand:

- Block elements
- Inline elements
- Inline-block elements

## Position

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

And:

```css
top
right
bottom
left
z-index
```

## Conceptual Assignment

Explain:

- Why does `position: absolute` behave differently inside a positioned parent?
- Difference between `fixed` and `sticky`.
- Difference between `display: none` and making something invisible.

## Practice

Build:

- Fixed navbar
- Notification badge
- Positioned card element

---

# Day 6 — Flexbox

## Core Concept

```css
display: flex;
```

Learn:

```css
flex-direction
justify-content
align-items
gap
flex-wrap
flex
flex-grow
flex-shrink
flex-basis
align-self
```

## Important Concepts

```text
Main Axis
Cross Axis
```

Understand:

```text
justify-content → Main Axis
align-items     → Cross Axis
```

## Assignment

Build:

- Responsive navbar
- Three-card layout
- Centered login box

## Conceptual Questions

- Why does `justify-content` behave differently when `flex-direction` changes?
- What is the main axis?
- What is the cross axis?

---

# Day 7 — CSS Grid + Responsive Design

## CSS Grid

```css
display: grid;
grid-template-columns
grid-template-rows
gap
grid-column
grid-row
```

## Responsive Design

- What is responsive design?
- Desktop vs tablet vs mobile
- Media queries
- `@media`
- Mobile-first thinking

Example:

```css
@media (max-width: 768px) {
    /* mobile/tablet styles */
}
```

## Assignment

Build a responsive product page:

```text
Desktop:
Card | Card | Card | Card

Mobile:
Card
Card
Card
Card
```

## Conceptual Assignment

Given a desktop layout, decide:

- What should change on mobile?
- Flexbox or Grid?
- Which dimensions should be flexible?

---

# Day 8 — Modern CSS Basics

## CSS Topics

```text
background
background-image
gradient
box-shadow
text-shadow
border-radius
opacity
overflow
cursor
```

## Pseudo-classes

```css
:hover
:focus
:active
:nth-child()
```

## Pseudo-elements

```css
::before
::after
```

## Assignment

Build a modern login page with:

- Card
- Shadow
- Rounded corners
- Hover effect
- Focus state
- Button interaction

---

# Day 9 — Real Website Structure + Debugging

## HTML

- Proper document structure
- Semantic HTML revision
- Accessibility basics
- Meaningful elements

## CSS

- Reusable classes
- CSS organization
- Naming conventions
- Avoiding unnecessary duplication

## Browser DevTools

Learn:

- Inspect Element
- Styles panel
- Computed styles
- Box model inspection
- Responsive mode
- Debugging CSS

## Conceptual Assignment 🔥

You will receive a badly structured webpage.

Your task:

1. Identify HTML problems.
2. Identify CSS problems.
3. Improve semantic structure.
4. Improve layout.
5. Improve responsiveness.
6. Explain every change.

---

# Day 10 — HTML + CSS Final Project

## Project

Build a complete responsive **Portfolio / Landing Page**.

## Required Sections

```text
Header
   ↓
Navbar
   ↓
Hero Section
   ↓
About Section
   ↓
Skills / Cards
   ↓
Projects
   ↓
Contact Form
   ↓
Footer
```

## Must Use

- Semantic HTML
- Forms
- CSS selectors
- Box model
- Flexbox
- Grid
- Positioning
- Responsive design
- Hover/focus states
- Proper typography

## Part 1 Outcome

After Day 10, you should be able to:

- Create webpages from scratch.
- Structure content using HTML.
- Style pages using CSS.
- Build layouts using Flexbox and Grid.
- Create responsive pages.
- Use forms.
- Debug basic HTML/CSS problems.
- Understand how HTML and CSS work together.

---

# 🟡 PART 2 — BASIC JAVASCRIPT

## 🎯 Goal

Make webpages **interactive and dynamic**.

```text
HTML       → Structure
CSS        → Appearance
JavaScript → Behaviour / Logic
```

---

# Day 11 — JavaScript Introduction

Learn:

- What is JavaScript?
- Why JavaScript?
- Browser JavaScript
- `<script>`
- External JS files
- Console
- `console.log()`
- Variables
- `let`
- `const`
- `var`
- Data types

## Data Types

```text
String
Number
Boolean
Undefined
Null
BigInt
Symbol
Object
```

## Practice

Write small programs using variables and different data types.

---

# Day 12 — Operators + Conditions

## Operators

```text
+
-
*
/
%
**
```

Comparison:

```text
>
<
>=
<=
==
===
!=
!==
```

Logical:

```text
&&
||
!
```

Assignment:

```text
=
+=
-=
*=
/=
```

## Conditions

```text
if
else
else if
```

## Conceptual Assignment

Given a real-life decision problem, convert it into conditions.

Examples:

- Login validation
- Age eligibility
- Grade calculation
- Discount calculation

---

# Day 13 — Loops

Learn:

```text
for
while
do...while
```

Also:

```text
break
continue
```

## Practice Problems

- Print 1–100
- Even numbers
- Odd numbers
- Sum of numbers
- Multiplication table
- Reverse counting
- Pattern problems

## Thinking Assignment

Before coding, write:

1. Input
2. Required output
3. Repetition needed?
4. Loop condition
5. Update step

---

# Day 14 — Functions

Learn:

```javascript
function greet() {
    console.log("Hello");
}
```

Concepts:

- Function declaration
- Function call
- Parameters
- Arguments
- Return value
- Local variables
- Scope basics
- Arrow functions introduction

## Assignment

Break a real-world problem into multiple functions.

Example:

```text
Calculate Bill
   ↓
calculateSubtotal()
calculateDiscount()
calculateTax()
calculateFinalAmount()
```

---

# Day 15 — Arrays

Learn:

```text
array
index
length
```

Methods:

```text
push
pop
shift
unshift
slice
splice
```

## Practice

- Find largest number
- Find smallest number
- Calculate sum
- Search for an item
- Reverse array
- Remove duplicates

---

# Day 16 — Array Methods

Learn deeply:

```text
forEach
map
filter
find
findIndex
includes
some
every
reduce
```

## Conceptual Focus

Understand:

```text
map       → transform
filter    → select
find      → find one
some      → at least one
every     → all
reduce    → combine
forEach   → perform action
```

## Assignment

Given an array of products:

```javascript
[
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
]
```

Perform filtering, mapping and total calculation.

---

# Day 17 — Strings

Learn:

```text
length
toUpperCase()
toLowerCase()
includes()
indexOf()
slice()
substring()
replace()
split()
trim()
charAt()
```

## Practice

- Reverse string
- Count characters
- Check palindrome
- Search text
- Remove extra spaces
- Convert sentence to words

---

# Day 18 — Objects

Example:

```javascript
const user = {
    name: "Ankit",
    age: 25
};
```

Learn:

- Properties
- Values
- Methods
- Dot notation
- Bracket notation
- Add property
- Modify property
- Delete property
- Nested objects

## Assignment

Create a product object and manipulate its data.

---

# Day 19 — DOM Introduction

Now connect JavaScript with HTML.

Learn:

```text
document
getElementById()
querySelector()
querySelectorAll()
```

Understand:

```text
HTML
  ↓
DOM
  ↓
JavaScript
```

## Practice

Select:

- Heading
- Paragraph
- Button
- Input
- Multiple elements

---

# Day 20 — DOM Manipulation

Learn:

```text
textContent
innerHTML
value
style
classList
createElement
append
remove
```

## Assignment

Create a dynamic webpage where JavaScript changes:

- Heading
- Text
- Classes
- Content
- Elements

---

# Day 21 — Events

Learn:

```text
click
input
change
submit
mouseover
keydown
keyup
```

Main method:

```javascript
addEventListener()
```

## Assignment

Build interactive UI:

- Button click
- Counter
- Show/hide content
- Input preview

---

# Day 22 — Forms + Validation

Learn:

- Form data
- Input values
- Validation
- Error messages
- `preventDefault()`
- Submit event

## Assignment

Build a working registration form with JavaScript validation.

Validate:

- Name
- Email
- Password
- Age

---

# Day 23 — Modern JavaScript

Learn:

```text
Template Literals
Destructuring
Spread Operator
Rest Operator
Default Parameters
Optional Chaining
Nullish Coalescing
```

Example concepts:

```javascript
const message = `Hello ${name}`;
```

---

# Day 24 — Error Handling + Debugging

Learn:

```text
try
catch
finally
throw
```

Also:

- Syntax errors
- Runtime errors
- Logical errors
- Console debugging
- Breakpoints
- Reading error messages
- Debugging process

## Conceptual Assignment 🔥

Given broken JavaScript:

1. Find the error.
2. Explain why it happens.
3. Fix it.
4. Explain how you found it.

---

# Day 25 — Basic JavaScript Project

## Project: To-Do App

Features:

```text
Add Task
Delete Task
Mark Complete
Count Tasks
```

Technologies:

```text
HTML
CSS
JavaScript
DOM
Events
Arrays
Objects
Functions
```

## Thinking Before Coding

Answer:

1. What data does one task contain?
2. Where will tasks be stored?
3. What happens when Add is clicked?
4. What happens when Delete is clicked?
5. How will the UI update?
6. What happens when there are no tasks?

---

# 🔴 PART 3 — ADVANCED JAVASCRIPT

## 🎯 Goal

Understand how JavaScript actually works internally and become comfortable with asynchronous programming, OOP, prototypes, APIs and modular code.

---

# Day 26 — Scope + Execution Context

Learn:

```text
Global Scope
Function Scope
Block Scope
Lexical Scope
Execution Context
```

Understand:

- Variable lookup
- Scope chain
- Global execution context
- Function execution context

## Conceptual Assignment

Predict which variables are accessible from different parts of a program before running it.

---

# Day 27 — Hoisting + Closures

Learn:

```text
Hoisting
Closure
Lexical Environment
```

Understand why:

```javascript
var
let
const
function
```

behave differently before initialization.

## Closure Assignment

Explain how an inner function can remember variables from an outer function even after the outer function has finished.

---

# Day 28 — `this` + Object Behaviour

Learn:

```text
this
method
call()
apply()
bind()
```

Understand how the value of `this` changes depending on how a function is called.

## Conceptual Assignment

Predict the value of `this` in multiple situations before executing the code.

---

# Day 29 — Prototypes + Prototype Chain

Learn:

```text
prototype
__proto__
prototype chain
constructor
inheritance through prototypes
```

Understand:

```text
Object
   ↓
Prototype
   ↓
Prototype's Prototype
   ↓
...
   ↓
null
```

## Conceptual Assignment

Explain where JavaScript looks when you access a property that does not exist directly on an object.

---

# Day 30 — Classes + OOP

Learn:

```text
class
constructor
extends
super
inheritance
encapsulation
```

Understand:

- Objects
- Classes
- Instance
- Constructor
- Inheritance

## Assignment

Build an object-oriented model such as:

```text
User
 ├── Admin
 └── Customer
```

---

# Day 31 — Asynchronous JavaScript

Very important conceptual day.

Learn:

```text
Synchronous
Asynchronous
Call Stack
Web APIs
Callback Queue
Event Loop
```

Understand the execution flow:

```text
JavaScript
    ↓
Call Stack
    ↓
Web APIs
    ↓
Task Queue
    ↓
Event Loop
    ↓
Call Stack
```

## Conceptual Assignment 🔥

Predict the output order of asynchronous JavaScript programs.

Do not simply run the code first.

---

# Day 32 — Promises

Learn:

```text
Promise
Pending
Fulfilled
Rejected
```

Methods:

```text
then()
catch()
finally()
```

Understand:

```text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
```

## Assignment

Create a Promise that represents a delayed operation and handle success/failure.

---

# Day 33 — Async/Await + Fetch API

Learn:

```text
async
await
fetch()
```

Understand APIs:

```text
Browser
   ↓
JavaScript
   ↓
API
   ↓
JSON
   ↓
JavaScript
   ↓
DOM
   ↓
UI
```

Learn:

- HTTP request basics
- JSON
- Fetching data
- Handling responses
- Handling errors
- Async functions

## Assignment

Build an app that fetches data from a public API and displays it.

---

# Day 34 — Modules + Advanced Data Handling

Learn:

```text
export
import
```

Understand:

- Module structure
- Separating code into files
- Reusable functions
- Code organization

Revision:

```text
map
filter
reduce
destructuring
spread
rest
optional chaining
```

## Assignment

Split a JavaScript project into multiple modules.

---

# Day 35 — Final Web Development Project 🔥

## Final Project

Build a complete **API-based Web Application**.

Possible examples:

- Weather Dashboard
- Movie Search App
- GitHub Profile Explorer
- Product Explorer
- News Dashboard
- Recipe Finder

## Project Architecture

```text
                    WEB APP
                       │
          ┌────────────┴────────────┐
          │                         │
         UI                    JavaScript
          │                         │
       HTML/CSS                     │
                                    ↓
                                  API
                                    │
                                    ↓
                                  JSON
                                    │
                                    ↓
                                  State/Data
                                    │
                                    ↓
                                   DOM
                                    │
                                    ↓
                                    UI
```

## Requirements

The final project should include:

- Semantic HTML
- Responsive CSS
- Flexbox/Grid
- Forms or search
- JavaScript logic
- DOM manipulation
- Events
- Arrays/objects
- Async/Await
- Fetch API
- API data handling
- Error handling
- Loading state
- Empty state
- Modular JavaScript

---

# 🧠 Conceptual Assignment System

Conceptual assignments are a major part of this roadmap.

They will be divided into levels.

## Level 1 — Understand

Example:

> What is the difference between `padding` and `margin`?

## Level 2 — Predict

Example:

> What will this code output before running it?

## Level 3 — Explain

Example:

> Why does this code behave this way?

## Level 4 — Design

Example:

> You need to build a login page. What HTML, CSS and JS components will you need?

## Level 5 — Debug

Example:

> Here is broken code. Find and explain the problem.

## Level 6 — Build

Example:

> Build the feature from scratch without following a tutorial.

---

# 🔥 Developer Thinking Framework

Before writing code, always ask:

```text
1. What is the problem?
       ↓
2. What is the required output?
       ↓
3. What data do I have?
       ↓
4. What data do I need?
       ↓
5. How should I represent that data?
       ↓
6. What steps are required?
       ↓
7. Can I break the problem into smaller functions/components?
       ↓
8. What edge cases can happen?
       ↓
9. How will I test it?
       ↓
10. How will I debug it if it fails?
```

This process is more important than memorizing syntax.

---

# 🧪 Practice Strategy

For every topic:

### Step 1 — Learn

Understand the concept.

### Step 2 — Copy

Type a small example yourself.

### Step 3 — Modify

Change the example.

### Step 4 — Build Without Looking

Recreate it from memory.

### Step 5 — Solve a Problem

Apply the concept to a new problem.

### Step 6 — Explain

Explain the concept in your own words.

### Step 7 — Debug

Intentionally break the code and fix it.

---

# 📚 Projects Across the Roadmap

## HTML + CSS

### Project 1
Personal Introduction Page

### Project 2
Blog Page

### Project 3
Registration Form

### Project 4
Responsive Product Page

### Project 5
Portfolio / Landing Page

---

## Basic JavaScript

### Project 6
Interactive UI

### Project 7
Registration Form Validation

### Project 8
To-Do App

---

## Advanced JavaScript

### Project 9
API-based Application

### Project 10
Final Web Application

---

# 📋 Important HTML Tags Checklist

```text
[ ] html
[ ] head
[ ] title
[ ] body

[ ] h1
[ ] h2
[ ] h3
[ ] h4
[ ] h5
[ ] h6

[ ] p
[ ] br
[ ] hr

[ ] strong
[ ] em

[ ] a
[ ] img

[ ] ul
[ ] ol
[ ] li

[ ] div
[ ] span

[ ] header
[ ] nav
[ ] main
[ ] section
[ ] article
[ ] aside
[ ] footer

[ ] form
[ ] label
[ ] input
[ ] textarea
[ ] select
[ ] option
[ ] button

[ ] table
[ ] tr
[ ] th
[ ] td
```

---

# 🎨 Important CSS Checklist

```text
[ ] Inline CSS
[ ] Internal CSS
[ ] External CSS

[ ] Selectors
[ ] Classes
[ ] IDs

[ ] color
[ ] background
[ ] font
[ ] text

[ ] width
[ ] height
[ ] margin
[ ] padding
[ ] border

[ ] box-sizing

[ ] display
[ ] block
[ ] inline
[ ] inline-block
[ ] none

[ ] position
[ ] relative
[ ] absolute
[ ] fixed
[ ] sticky
[ ] z-index

[ ] Flexbox
[ ] Grid

[ ] Responsive Design
[ ] Media Queries

[ ] border-radius
[ ] box-shadow
[ ] text-shadow
[ ] opacity
[ ] overflow
[ ] cursor

[ ] :hover
[ ] :focus
[ ] :active
[ ] :nth-child()

[ ] ::before
[ ] ::after

[ ] DevTools
[ ] CSS Debugging
[ ] Accessibility Basics
```

---

# 🟨 Basic JavaScript Checklist

```text
[ ] JavaScript Introduction
[ ] script
[ ] console.log

[ ] Variables
[ ] let
[ ] const
[ ] var

[ ] Data Types

[ ] Operators
[ ] Conditions
[ ] if
[ ] else
[ ] else if

[ ] Loops
[ ] for
[ ] while
[ ] do while
[ ] break
[ ] continue

[ ] Functions
[ ] Parameters
[ ] Arguments
[ ] return
[ ] Arrow Functions

[ ] Arrays
[ ] push
[ ] pop
[ ] shift
[ ] unshift
[ ] slice
[ ] splice

[ ] forEach
[ ] map
[ ] filter
[ ] find
[ ] findIndex
[ ] includes
[ ] some
[ ] every
[ ] reduce

[ ] Strings
[ ] String Methods

[ ] Objects
[ ] Properties
[ ] Methods
[ ] Nested Objects

[ ] DOM
[ ] document
[ ] getElementById
[ ] querySelector
[ ] querySelectorAll

[ ] textContent
[ ] innerHTML
[ ] value
[ ] style
[ ] classList
[ ] createElement
[ ] append
[ ] remove

[ ] Events
[ ] addEventListener

[ ] Form Validation

[ ] Template Literals
[ ] Destructuring
[ ] Spread
[ ] Rest
[ ] Default Parameters
[ ] Optional Chaining
[ ] Nullish Coalescing

[ ] Error Handling
[ ] try
[ ] catch
[ ] finally
[ ] throw
```

---

# 🔴 Advanced JavaScript Checklist

```text
[ ] Scope
[ ] Global Scope
[ ] Function Scope
[ ] Block Scope
[ ] Lexical Scope

[ ] Execution Context
[ ] Scope Chain

[ ] Hoisting
[ ] Temporal Dead Zone

[ ] Closures
[ ] Lexical Environment

[ ] this
[ ] call
[ ] apply
[ ] bind

[ ] Prototype
[ ] __proto__
[ ] Prototype Chain
[ ] Constructor

[ ] Classes
[ ] constructor
[ ] extends
[ ] super
[ ] Inheritance
[ ] Encapsulation

[ ] Synchronous JS
[ ] Asynchronous JS
[ ] Call Stack
[ ] Web APIs
[ ] Callback Queue
[ ] Event Loop

[ ] Promises
[ ] Pending
[ ] Fulfilled
[ ] Rejected
[ ] then
[ ] catch
[ ] finally

[ ] async
[ ] await

[ ] Fetch API
[ ] HTTP Request Basics
[ ] JSON
[ ] API Data Handling

[ ] ES Modules
[ ] import
[ ] export

[ ] Code Organization
[ ] Error Handling
[ ] Loading States
[ ] Empty States
```

---

# 🏁 Final Learning Outcome

After completing all 35 days, the target is to understand this complete flow:

```text
                    WEB DEVELOPMENT
                           │
          ┌────────────────┼────────────────┐
          │                │                │
         HTML              CSS         JavaScript
          │                │                │
      Structure          Design          Logic
          │                │                │
          └────────────────┼────────────────┘
                           │
                         DOM
                           │
                           ↓
                    User Interaction
                           │
                           ↓
                       API / Data
                           │
                           ↓
                    Dynamic Web App
```

You should be able to look at a website and think:

```text
"What is the HTML structure?"
        ↓
"How should I design the layout?"
        ↓
"Should I use Flexbox or Grid?"
        ↓
"What data does this feature need?"
        ↓
"What JavaScript logic is required?"
        ↓
"What events will happen?"
        ↓
"Do I need an API?"
        ↓
"How should I handle errors?"
        ↓
"How should I break this into smaller pieces?"
```

That is the **developer mindset** this roadmap is designed to build.

---

# 📌 Rules for This 35-Day Journey

1. Don't just copy code.
2. Type the examples yourself.
3. Try exercises before seeing solutions.
4. Explain concepts in your own words.
5. For conceptual assignments, think before running code.
6. Don't skip debugging exercises.
7. Build projects without blindly following tutorials.
8. Ask **"why?"**, not only **"how?"**
9. Revise previous concepts regularly.
10. Keep all projects in Git/GitHub.
11. Maintain a README for important projects.
12. Commit your work regularly.

---

# 🚀 After Day 35

This roadmap gives you a **strong Web Development foundation**.

The next logical technologies can be:

```text
35-Day Foundation
       ↓
Git + GitHub
       ↓
React.js
       ↓
Advanced Frontend
       ↓
Node.js
       ↓
Express.js
       ↓
Databases
       ↓
Backend Development
       ↓
Full-Stack Development
```

> **Important:** Completing these 35 days does not mean you have mastered professional web development. It means you have built the conceptual foundation required to move into modern frontend and full-stack development with much better understanding.

---

# ✅ Progress Tracker

## HTML + CSS

- [ ] Day 1 — HTML Foundation + CSS Introduction
- [ ] Day 2 — Selectors + Box Model
- [ ] Day 3 — Semantic HTML + Text Styling
- [ ] Day 4 — Forms + CSS Forms
- [ ] Day 5 — Display + Positioning
- [ ] Day 6 — Flexbox
- [ ] Day 7 — Grid + Responsive Design
- [ ] Day 8 — Modern CSS
- [ ] Day 9 — Website Structure + Debugging
- [ ] Day 10 — HTML + CSS Final Project

## Basic JavaScript

- [ ] Day 11 — JavaScript Introduction
- [ ] Day 12 — Operators + Conditions
- [ ] Day 13 — Loops
- [ ] Day 14 — Functions
- [ ] Day 15 — Arrays
- [ ] Day 16 — Array Methods
- [ ] Day 17 — Strings
- [ ] Day 18 — Objects
- [ ] Day 19 — DOM Introduction
- [ ] Day 20 — DOM Manipulation
- [ ] Day 21 — Events
- [ ] Day 22 — Forms + Validation
- [ ] Day 23 — Modern JavaScript
- [ ] Day 24 — Error Handling + Debugging
- [ ] Day 25 — To-Do App

## Advanced JavaScript

- [ ] Day 26 — Scope + Execution Context
- [ ] Day 27 — Hoisting + Closures
- [ ] Day 28 — `this` + Object Behaviour
- [ ] Day 29 — Prototypes + Prototype Chain
- [ ] Day 30 — Classes + OOP
- [ ] Day 31 — Asynchronous JavaScript
- [ ] Day 32 — Promises
- [ ] Day 33 — Async/Await + Fetch API
- [ ] Day 34 — Modules + Advanced Data Handling
- [ ] Day 35 — Final Web Development Project

---

# 🎯 Final Goal

> **Don't aim to memorize Web Development. Aim to understand it well enough that you can build something, break it, debug it, explain it, and rebuild it yourself.**
