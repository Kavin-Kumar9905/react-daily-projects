# Countdown Timer

Countdown Timer is a React application that counts down the time remaining
to a user-defined event. It displays the remaining days, hours, minutes,
and seconds until the event occurs.

This project is built using **only native JavaScript Date APIs** without
any external date/time libraries.

---

## Problem Statement

Users can define an event by providing:
- An event name
- A date
- An optional time (defaults to midnight if omitted)

Once started, the application continuously updates the remaining time
until the event is reached.

---

## Features

- Event name, date, and optional time input
- Default event time set to midnight if not provided
- Real-time countdown display (days, hours, minutes, seconds)
- Automatic decrementing with correct rollover
- Start button to initiate the countdown
- Input validation with user-friendly warnings
- Inputs disabled while the countdown is running
- Alert when the event is reached

---

## Constraints Followed

- Uses only built-in JavaScript Date functions
- No external date/time libraries (Moment.js, Day.js, etc.)
- Original implementation (no generators or snippets)

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
