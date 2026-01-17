# Cause & Effect v1 – Developer Notes

## 1. Project Goal

The goal of this project is to understand and implement the
**master–detail (cause → effect) UI pattern** using plain JavaScript,
without relying on any frameworks.

This helps build a strong foundation before abstracting the pattern
with libraries like React.

---

## 2. Data Modeling

The application uses a hardcoded JavaScript array of objects to
represent people.

Each object contains:
- id
- firstName
- lastName
- address
- phone
- birthday

This simulates real-world data without requiring a backend.

---

## 3. Rendering the Summary Pane

The list of names is generated dynamically by:
- Looping through the data array
- Creating DOM elements for each person
- Appending them to the summary pane

This ensures the UI is data-driven rather than hardcoded.

---

## 4. Cause → Effect Logic

- **Cause:** User clicks on a name in the list
- **Effect:** The detail pane updates with that person's information

This relationship is handled using click event listeners attached to
each list item.

---

## 5. Managing Selection State

Since no framework is used, selection state is managed manually:

- A variable tracks the currently selected list item
- When a new item is clicked:
  - The previous selection is cleared
  - The new selection is highlighted

This mimics how state is managed internally by frameworks.

---

## 6. Detail Pane Updates

When a name is selected:
- The detail pane’s content is replaced using `innerHTML`
- The displayed information always reflects the selected person

This ensures only one person’s details are shown at a time.

---

## 7. Styling Strategy

Two visual states are implemented:
- Hover state → temporary visual feedback
- Selected state → persistent visual feedback

This improves usability and clarity for the user.

---

## 8. Key Learnings

- UI patterns exist independently of frameworks
- Manual DOM manipulation clarifies how frameworks work internally
- Separating cause and effect simplifies UI reasoning
- Clear state management is essential for predictable behavior

---

## 9. Next Steps

- Rebuild the same application using React (v2)
- Replace manual state tracking with React state
- Compare v1 and v2 implementations side by side
