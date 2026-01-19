# ColorCycle – Developer Notes

## 1. Project Goal

The goal of this project is to explore how RGB colors behave when their
individual components are modified incrementally over time, while also
practicing timer-based state updates in React.

---

## 2. State Design

The application uses separate state variables for each concern:

- `red`, `green`, `blue`  
  Hexadecimal string values representing the current RGB color.

- `redInc`, `greenInc`, `blueInc`  
  Decimal numbers representing how much each color component changes per cycle.

- `isRunning`  
  Controls whether the color cycling timer is active.

- `error`  
  Stores validation messages for invalid hex input.

This separation keeps logic readable and predictable.

---

## 3. Hexadecimal Validation

Hex inputs are validated using a regular expression that allows only
valid hexadecimal characters.

Validation occurs before updating state to prevent invalid color values
from entering the system.

---

## 4. Color Conversion Logic

Each cycle performs the following steps:

1. Convert hex strings to decimal values using `parseInt(value, 16)`
2. Add the increment value
3. Wrap values to stay within the 0–255 range
4. Convert back to hexadecimal strings using `toString(16)`

This conversion loop is the core of the application.

---

## 5. Timer Management

The color cycling is implemented using `setInterval` inside a `useEffect`
hook.

- The interval starts when `isRunning` becomes `true`
- The interval is cleared when `isRunning` becomes `false`
- Cleanup logic prevents memory leaks and duplicate timers

A `useRef` is used to store the interval ID without triggering re-renders.

---

## 6. Input Locking Strategy

All color and increment inputs are disabled while the cycle is running.
This prevents inconsistent state updates during active color changes and
simplifies logic.

---

## 7. Visual Feedback

The color preview box updates automatically whenever the RGB state
changes, providing immediate visual feedback.

This reinforces the relationship between numeric RGB values and perceived
color.

---

## 8. Key Learnings

- Hexadecimal and decimal color representations are closely related
- Timers must be carefully managed in React
- Controlled inputs simplify validation and state consistency
- Breaking state into small pieces improves clarity

---

## 9. Future Enhancements

- Customizable cycle interval
- Support for alternative color models (HSL)
- Multiple color boxes cycling simultaneously
- Save and load color presets
