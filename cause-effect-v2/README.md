# Cause & Effect v2 (React)

Cause & Effect v2 is a React implementation of the classic
**master–detail UI pattern**, rebuilt from the v1 (vanilla JavaScript)
version using React state and declarative rendering.

This version demonstrates how React simplifies UI updates and state
management while preserving the same behavior and user experience.

---

## Problem Statement

A list of people is displayed in a summary pane.
When a user clicks on a name, detailed information about that person is
shown in an adjacent detail pane.

This is a common UI pattern used in dashboards, admin panels, and data
management applications.

---

## Features

- Vertical list of person names
- Click a name to display detailed information:
  - Full name
  - Address
  - Phone number
  - Birthday
- Clicking another name refreshes the detail pane
- Hover highlight on list items
- Visual selection indicator for the active item

---

## Tech Stack

- React
- Vite
- JavaScript
- Bootstrap (for layout and spacing)

---

## How to Run

```bash
npm install
npm run dev
