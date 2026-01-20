# Countdown Timer – Developer Notes

## 1. Project Goal

The goal of this project is to build a real-time countdown timer using
only native JavaScript Date APIs, while practicing safe timer management
and state-driven UI updates in React.

---

## 2. State Design

The application separates concerns using the following state variables:

- `eventName`  
  Stores the user-defined event name.

- `eventDate` and `eventTime`  
  Store user input values used to construct the target Date object.

- `timeLeft`  
  An object containing the remaining days, hours, minutes, and seconds.

- `isRunning`  
  Indicates whether the countdown timer is active.

- `error`  
  Stores validation and warning messages.

---

## 3. Target Date Construction

The target event time is constructed using:

- The provided date
- The provided time (or midnight if omitted)

This ensures predictable behavior in the local time zone.

---

## 4. Countdown Calculation Logic

The remaining time is calculated by:

1. Subtracting the current time from the target time
2. Converting the difference from milliseconds to seconds
3. Deriving days, hours, minutes, and seconds using division and modulo

This approach avoids reliance on any external libraries.

---

## 5. Timer Management

The countdown updates every second using `setInterval`.

- The interval starts only after successful validation
- A `useRef` stores the interval ID to prevent unnecessary re-renders
- Cleanup logic ensures the interval is cleared when the component unmounts
  or when the countdown completes

This prevents memory leaks and duplicate timers.

---

## 6. Validation Strategy

The app validates:
- Empty event name
- Missing or invalid date/time
- Events scheduled in the past
- Events scheduled too far in the future (overflow protection)

Errors are shown to the user before the countdown begins.

---

## 7. Countdown Completion

When the remaining time reaches zero:
- The interval is cleared
- The countdown stops
- A user alert indicates that the event has arrived

---

## 8. Key Learnings

- Native Date APIs are sufficient for many real-world use cases
- Time-based UI updates require careful cleanup
- Separating calculation logic from UI improves clarity
- Validations prevent invalid state transitions

---

## 9. Future Enhancements

- Persist countdown data across sessions
- Support multiple simultaneous countdowns
- Extract countdown logic into reusable hooks
