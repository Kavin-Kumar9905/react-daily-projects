# Cause & Effect v2 (React) – Developer Notes

## 1. Project Goal

The goal of this version is to rebuild the Cause & Effect (master–detail)
UI pattern using React, after first implementing it in vanilla JavaScript
(v1).

This highlights how React abstracts manual DOM manipulation while keeping
the same underlying UI logic.

---

## 2. Data Modeling

The application uses a hardcoded array of person objects, identical in
structure to v1.

Each object contains:
- id
- firstName
- lastName
- address
- phone
- birthday

This allows a direct comparison between v1 and v2.

---

## 3. State Design

The entire selection logic is handled with a single piece of state:

```js
const [selectedPerson, setSelectedPerson] = useState(null);
