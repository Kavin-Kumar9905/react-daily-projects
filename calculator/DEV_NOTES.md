# Calculator – Developer Notes

## 1. Project Goal

The goal of this project is to build a functional calculator using React
while understanding how real calculators manage state, input flow, and
edge cases.

The project avoids shortcuts like `eval()` to focus on clear logic and
explicit calculations.

---

## 2. State Design

The calculator uses the following state variables:

- `display` (string)  
  Stores the value currently shown on the screen. Stored as a string to
  easily manage digit limits and input concatenation.

- `previousValue` (string | null)  
  Stores the value entered before an operation is selected.

- `operator` (string | null)  
  Stores the selected arithmetic operator (`+`, `-`, `/`).

- `isNewEntry` (boolean)  
  Determines whether the next digit should replace the display or append
  to it.

- `error` (boolean)  
  Indicates an invalid state (e.g., exceeding digit limit), causing the
  display to show `ERR`.

This separation keeps logic predictable and readable.

---

## 3. Digit Input Logic

Digit buttons:
- Replace the display when starting a new entry
- Append digits when continuing an entry
- Ignore input beyond 8 digits
- Are blocked when the calculator is in an error state

This mirrors real calculator behavior.

---

## 4. Operation Handling

When an operator is clicked:
- The current display is stored as `previousValue`
- The selected operator is stored
- The calculator waits for the next number

Chained operations are handled by computing the previous operation before
storing the new operator.

---

## 5. Calculation Logic

All calculations are handled in a dedicated helper function that:
- Takes two numbers and an operator
- Performs the appropriate arithmetic
- Checks for digit overflow
- Returns `"ERR"` if constraints are violated

This centralizes calculation logic and avoids duplication.

---

## 6. Clear vs Clear All

- `C` (Clear):
  - Clears the current entry
  - Or removes the last operation if pressed after an operator

- `AC` (All Clear):
  - Resets all state
  - Clears errors
  - Restores the calculator to its initial state

This distinction improves usability and mirrors real calculators.

---

## 7. Error Handling

If any operation exceeds the 8-digit limit:
- The calculator enters an error state
- `ERR` is displayed
- All input is blocked except `AC`

This prevents invalid calculations and keeps state consistent.

---

## 8. Key Learnings

- Complex UI behavior can be managed with simple, well-defined state
- Early returns simplify event handler logic
- Explicit calculation logic is safer than dynamic evaluation
- Separating concerns makes debugging easier

---

## 9. Future Enhancements

- Floating-point support
- Sign toggle (`+/-`)
- Keyboard support
- Unit tests for calculation logic
