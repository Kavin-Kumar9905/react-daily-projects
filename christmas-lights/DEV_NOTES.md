# Christmas Lights – Developer Notes

## 1. Project Goal

The goal of this project is to understand how to implement
time-based animations in React using state and effects, without
causing memory leaks or uncontrolled behavior.

---

## 2. Core State Variables

The application uses the following state:

- `activeIndex`  
  Tracks which light is currently highlighted.

- `isRunning`  
  Determines whether the animation timer is active.

- `intervalMs`  
  Controls how often the active light changes.

These states fully describe the animation behavior.

---

## 3. Why `useRef` Is Used

A ref is used to store the interval ID:

- Interval IDs should not trigger re-renders
- Storing them in state would be unnecessary and unsafe
- `useRef` allows persistent, mutable storage across renders

This ensures that only one timer runs at a time.

---

## 4. Timer Management with `useEffect`

The animation is controlled using `useEffect`:

- When `isRunning` is `true`, a timer is started
- When `isRunning` is `false`, the timer is cleared
- Cleanup ensures that intervals are always removed

This prevents memory leaks and duplicated timers.

---

## 5. Animation Logic

On each timer tick:
- The active light index is incremented
- When the last light is reached, the index wraps back to zero

This creates a continuous looping ripple effect.

---

## 6. Visual Styling Strategy

Instead of changing colors:
- Opacity is used to represent intensity
- The active light has full opacity
- Inactive lights are dimmed

This keeps the animation simple and smooth.

---

## 7. Key Learnings

- Timers must always be cleaned up in React
- `useEffect` dependencies control behavior precisely
- State-driven animations are predictable and debuggable
- `useRef` is ideal for storing non-UI values

---

## 8. Future Enhancements

- Configurable colors per light
- Adjustable intensity values
- Multiple rows of lights
- Dynamic number of lights
