# Calculator

A simple calculator built with React that supports basic arithmetic
operations on integers.

This project is part of a **daily React practice series** focused on
understanding UI interactions, state management, and event handling
without relying on shortcuts like `eval()`.

---

## Problem Statement

Calculators are essential tools and a great way to understand how user
input, state transitions, and application logic work together.

This calculator allows users to enter numbers and perform basic
arithmetic operations while respecting strict constraints.

---

## Features

- Display showing the current number or result
- Digit buttons (0–9) with a maximum of 8 digits
- Supported operations:
  - Addition (`+`)
  - Subtraction (`-`)
  - Division (`/`)
- `=` button to compute results
- `C` button to clear the last entry or operation
- `AC` button to reset the calculator completely
- Error handling with `ERR` display when limits are exceeded

---

## Constraints Followed

- `eval()` is **not used**
- All calculations are done using explicit logic
- Maximum of 8 digits allowed in the display
- Integer-based arithmetic only
- Input is blocked when an error occurs until cleared

---

## Tech Stack

- React
- Vite
- JavaScript
- Bootstrap

---

## How to Run

```bash
npm install
npm run dev
