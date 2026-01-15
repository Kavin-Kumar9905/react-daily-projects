import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isNewEntry, setIsNewEntry] = useState(true);
  const [error, setError] = useState(false);

  // ---------- Helpers ----------
  const resetAll = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setIsNewEntry(true);
    setError(false);
  };

  const exceedsLimit = (value) => {
    return value.toString().replace("-", "").length > 8;
  };

  const calculate = (a, b, op) => {
    let result;

    switch (op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "/":
        if (b === 0) return "ERR";
        result = Math.trunc(a / b);
        break;
      default:
        return b;
    }

    if (exceedsLimit(result)) return "ERR";
    return result.toString();
  };

  // ---------- Handlers ----------
  const handleDigitClick = (digit) => {
    if (error) return;

    if (isNewEntry) {
      setDisplay(digit);
      setIsNewEntry(false);
      return;
    }

    if (display.length >= 8) return;

    setDisplay(display + digit);
  };

  const handleOperatorClick = (op) => {
    if (error) return;

    if (operator && !isNewEntry) {
      const result = calculate(
        Number(previousValue),
        Number(display),
        operator
      );

      if (result === "ERR") {
        setError(true);
        return;
      }

      setPreviousValue(result);
      setDisplay(result);
    } else {
      setPreviousValue(display);
    }

    setOperator(op);
    setIsNewEntry(true);
  };

  const handleEquals = () => {
    if (error || operator === null) return;

    const result = calculate(
      Number(previousValue),
      Number(display),
      operator
    );

    if (result === "ERR") {
      setError(true);
      return;
    }

    setDisplay(result);
    setPreviousValue(null);
    setOperator(null);
    setIsNewEntry(true);
  };

  const handleClear = () => {
    if (error) {
      resetAll();
      return;
    }

    if (!isNewEntry) {
      setDisplay("0");
      setIsNewEntry(true);
    } else if (operator) {
      setOperator(null);
      setDisplay(previousValue);
      setPreviousValue(null);
    }
  };

  // ---------- UI ----------
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-4">
        <div className="card shadow">
          {/* Display */}
          <div className="card-body bg-dark text-white text-end fs-3">
            {error ? "ERR" : display}
          </div>

          {/* Buttons */}
          <div className="card-body">
            <div className="row g-2">
              <div className="col-6">
                <button
                  className="btn btn-secondary w-100"
                  onClick={resetAll}
                >
                  AC
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-secondary w-100"
                  onClick={handleClear}
                >
                  C
                </button>
              </div>

              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("7")}>7</button>
              </div>
              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("8")}>8</button>
              </div>
              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("9")}>9</button>
              </div>
              <div className="col-3">
                <button className="btn btn-warning w-100" onClick={() => handleOperatorClick("/")}>/</button>
              </div>

              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("4")}>4</button>
              </div>
              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("5")}>5</button>
              </div>
              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("6")}>6</button>
              </div>
              <div className="col-3">
                <button className="btn btn-warning w-100" onClick={() => handleOperatorClick("-")}>-</button>
              </div>

              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("1")}>1</button>
              </div>
              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("2")}>2</button>
              </div>
              <div className="col-3">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("3")}>3</button>
              </div>
              <div className="col-3">
                <button className="btn btn-warning w-100" onClick={() => handleOperatorClick("+")}>+</button>
              </div>

              <div className="col-6">
                <button className="btn btn-light w-100" onClick={() => handleDigitClick("0")}>0</button>
              </div>
              <div className="col-6">
                <button className="btn btn-success w-100" onClick={handleEquals}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
