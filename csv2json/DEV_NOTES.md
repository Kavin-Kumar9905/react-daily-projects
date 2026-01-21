# CSV ↔ JSON Converter – Developer Notes

## 1. Project Goal

The goal of this project is to implement bidirectional conversion between
CSV and JSON formats using pure JavaScript, while practicing refactoring
and extension of an existing application.

---

## 2. Baseline Strategy

The project was implemented in two stages:

1. JSON → CSV conversion
2. Extension to support CSV → JSON conversion

This approach ensured that new functionality was added without breaking
existing features.

---

## 3. JSON → CSV Logic

The JSON → CSV conversion follows these steps:

- Parse JSON safely using `JSON.parse`
- Ensure the input is an array of flat objects
- Extract headers from object keys
- Generate CSV rows by iterating through objects
- Join headers and rows using commas and newlines

Nested objects are explicitly rejected.

---

## 4. CSV → JSON Logic

The CSV → JSON conversion follows these steps:

- Validate that CSV input is not empty
- Split input into rows using newline characters
- Extract headers from the first row
- Validate column count consistency
- Build an array of objects by mapping headers to row values

Malformed rows are rejected with clear error messages.

---

## 5. Validation Strategy

Validation is performed before any conversion:

- Empty input detection
- Syntax validation (JSON)
- Structural validation (arrays only)
- Column mismatch detection (CSV)
- Flat structure enforcement

This prevents invalid data from entering the conversion logic.

---

## 6. Error Handling

All errors are communicated to the user through a single error state.
Only one warning is displayed at a time to keep feedback clear and
actionable.

---

## 7. Key Learnings

- CSV parsing is deceptively complex
- Manual conversion clarifies data structure assumptions
- Validation logic is as important as conversion logic
- Incremental development reduces risk when adding features

---

## 8. Limitations (Intentional)

- Quoted CSV values are not supported
- Escaped delimiters are not handled
- Nested JSON structures are not supported

These limitations keep the implementation readable and aligned with the
project constraints.

---

## 9. Future Enhancements

- Support advanced CSV parsing rules
- Add file open/save functionality
- Improve error reporting per row
- Handle large datasets efficiently
