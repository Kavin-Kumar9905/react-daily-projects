# CSV ↔ JSON Converter

CSV ↔ JSON Converter is a React application that converts data between
CSV (Comma Separated Values) and JSON formats without using any external
conversion libraries.

This project was built by first implementing a JSON → CSV converter and
then extending it to support CSV → JSON conversion, mirroring a real
world refactoring workflow.

---

## Problem Statement

Users often need to convert structured data between CSV and JSON formats.
This application allows users to paste CSV or JSON data into a text box
and convert it to the other format with validation and clear error
messages.

---

## Features

- Paste JSON and convert it to CSV
- Paste CSV and convert it to JSON
- Validation for empty or malformed input
- Clear button to reset both text areas
- Flat data support (nested structures are not supported)

---

## Constraints Followed

- No CSV/JSON conversion libraries used
- Only flat JSON structures supported
- Manual parsing and validation
- Original implementation

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
