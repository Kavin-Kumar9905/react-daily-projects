# ColorCycle

ColorCycle is a React application designed to help developers better
understand RGB color composition by cycling through small changes to
individual color components over time.

Users can specify an initial RGB color using hexadecimal values and
control how each color channel changes during the cycle.

---

## Problem Statement

Color plays a crucial role in UI/UX. This application demonstrates how
small changes in individual RGB components affect the overall appearance
of a color over time.

The app visualizes these changes by updating a colored box at fixed
intervals.

---

## Features

- RGB color input using hexadecimal values (two digits each)
- Independent increment value for Red, Green, and Blue components
- Live color preview box
- Automatic color update every 0.25 seconds
- Start / Stop control for the color cycle
- Input validation for hexadecimal values
- Inputs disabled while the cycle is running

---

## Constraints Followed

- Color components must be valid hexadecimal values
- Inputs can only be modified when the app is stopped
- No external color libraries used
- Timer logic handled safely using React hooks

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
