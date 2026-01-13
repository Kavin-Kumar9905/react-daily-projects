# Bin2Dec – Developer Notes

## 1. Project Origin

This project is part of a daily React practice challenge.
The goal is to improve logical thinking, React fundamentals,
and clean project structure.

The idea comes from the Bin2Dec challenge, which focuses on
binary to decimal conversion without relying on built-in helpers.

---

## 2. Problem Statement

Convert a binary number (base 2) entered by the user into its
decimal (base 10) equivalent.

---

## 3. Constraints Followed

- Arrays are NOT used to store or process binary digits
- Built-in binary conversion methods (parseInt) are avoided
- Conversion uses mathematical power calculation
- Input validation is handled before conversion

---

## 4. Thought Process

1. Build UI first to ensure layout clarity
2. Add state handling for input, error, and result
3. Validate input early to prevent invalid computation
4. Convert binary to decimal using powers of 2
5. Display result only when input is valid

---

## 5. Conversion Logic Explanation

Binary numbers are converted to decimal by multiplying each
binary digit by 2 raised to the power of its position.

Example:
Binary: 1011

Calculation:
1 × 2³ = 8  
0 × 2² = 0  
1 × 2¹ = 2  
1 × 2⁰ = 1  

Result: 11

This logic is implemented using a loop and Math.pow.

---

## 6. What I Learned

- Handling controlled inputs in React
- Writing early-return validation logic
- Implementing mathematical logic without shortcuts
- Structuring small React projects cleanly

---

## 7. Possible Improvements

- Live conversion on input change
- Support unlimited binary digits
- Improve UI styling
- Add unit tests
