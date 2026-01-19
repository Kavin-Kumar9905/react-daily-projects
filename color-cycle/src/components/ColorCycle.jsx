import { useState, useRef, useEffect } from "react";

function ColorCycle() {
  // RGB hex components (two digits each)
  const [red, setRed] = useState("00");
  const [green, setGreen] = useState("00");
  const [blue, setBlue] = useState("00");

  // Increment values (decimal)
  const [redInc, setRedInc] = useState(1);
  const [greenInc, setGreenInc] = useState(1);
  const [blueInc, setBlueInc] = useState(1);

  // Control state
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState("");

  // Timer reference
  const intervalRef = useRef(null);

  // -------------------------------
  // Helpers
  // -------------------------------
  const isValidHex = (value) => /^[0-9a-fA-F]{0,2}$/.test(value);

  const toHex = (num) => {
    return num.toString(16).toUpperCase().padStart(2, "0");
  };

  const clampColor = (value) => {
    if (value > 255) return value % 256;
    if (value < 0) return 256 + value;
    return value;
  };

  // -------------------------------
  // Input handlers
  // -------------------------------
  const handleHexChange = (setter) => (e) => {
    const value = e.target.value;

    if (!isValidHex(value)) {
      setError("Only hexadecimal digits (0-9, A-F) are allowed.");
      return;
    }

    setError("");
    setter(value.toUpperCase());
  };

  // -------------------------------
  // Color cycling logic
  // -------------------------------
  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(() => {
      const r = clampColor(parseInt(red || "00", 16) + redInc);
      const g = clampColor(parseInt(green || "00", 16) + greenInc);
      const b = clampColor(parseInt(blue || "00", 16) + blueInc);

      setRed(toHex(r));
      setGreen(toHex(g));
      setBlue(toHex(b));
    }, 250);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, red, green, blue, redInc, greenInc, blueInc]);

  // -------------------------------
  // UI
  // -------------------------------
  return (
    <div>
      <h2 className="mb-4">ColorCycle</h2>

      {/* Color Preview */}
      <div
        className="mb-4"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: `#${red}${green}${blue}`,
          border: "1px solid #ccc",
        }}
      />

      {/* Error */}
      {error && <div className="alert alert-warning">{error}</div>}

      {/* RGB Inputs */}
      <div className="row mb-3">
        <div className="col">
          <label>Red (Hex)</label>
          <input
            className="form-control"
            maxLength={2}
            value={red}
            disabled={isRunning}
            onChange={handleHexChange(setRed)}
          />
        </div>
        <div className="col">
          <label>Green (Hex)</label>
          <input
            className="form-control"
            maxLength={2}
            value={green}
            disabled={isRunning}
            onChange={handleHexChange(setGreen)}
          />
        </div>
        <div className="col">
          <label>Blue (Hex)</label>
          <input
            className="form-control"
            maxLength={2}
            value={blue}
            disabled={isRunning}
            onChange={handleHexChange(setBlue)}
          />
        </div>
      </div>

      {/* Increment Inputs */}
      <div className="row mb-4">
        <div className="col">
          <label>Red Increment</label>
          <input
            type="number"
            className="form-control"
            value={redInc}
            disabled={isRunning}
            onChange={(e) => setRedInc(Number(e.target.value))}
          />
        </div>
        <div className="col">
          <label>Green Increment</label>
          <input
            type="number"
            className="form-control"
            value={greenInc}
            disabled={isRunning}
            onChange={(e) => setGreenInc(Number(e.target.value))}
          />
        </div>
        <div className="col">
          <label>Blue Increment</label>
          <input
            type="number"
            className="form-control"
            value={blueInc}
            disabled={isRunning}
            onChange={(e) => setBlueInc(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Start / Stop */}
      <button
        className={`btn ${isRunning ? "btn-danger" : "btn-success"}`}
        onClick={() => setIsRunning((prev) => !prev)}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default ColorCycle;
