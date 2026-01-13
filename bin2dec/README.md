# Bin2Dec – Binary to Decimal Converter

Bin2Dec is a simple React application that converts a binary number (base 2)
into its decimal (base 10) equivalent.

This project is part of a **daily React practice series**, focusing on
problem-solving, clean logic, and fundamental React concepts.

---

## Problem Statement

Binary is the number system used internally by digital computers.
Understanding binary-to-decimal conversion is an essential skill
for developers.

The application allows users to enter a binary number and view its
decimal equivalent.

---

## Features

- Accepts up to **8 binary digits**
- Validates input (only `0` and `1` allowed)
- Displays clear error messages
- Converts binary to decimal using mathematical logic
- Clean and responsive UI using Bootstrap

---

## Constraints Followed

- Arrays are **not used** to store or process binary digits
- Built-in conversion methods like `parseInt(binary, 2)` are avoided
- Conversion is done using `Math.pow` and positional calculation
- Validation is handled before computation

---

## Tech Stack

- React
- Vite
- JavaScript
- Bootstrap

---

## How to Run the Project

```bash
npm install
npm run dev
