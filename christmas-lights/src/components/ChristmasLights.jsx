import { useEffect, useState, useRef } from "react";

function ChristmasLights() {
  const LIGHT_COUNT = 7;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalMs, setIntervalMs] = useState(500);

  const intervalRef = useRef(null);

  // Start / Stop the lights
  const toggleLights = () => {
    setIsRunning((prev) => !prev);
  };

  // Handle interval change
  const handleIntervalChange = (e) => {
    setIntervalMs(Number(e.target.value));
  };

  // Effect to control the timer
  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === LIGHT_COUNT - 1 ? 0 : prevIndex + 1
      );
    }, intervalMs);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, intervalMs]);

  return (
    <div className="text-center">
      <h2 className="mb-4">Christmas Lights</h2>

      {/* Lights */}
      <div className="d-flex justify-content-center mb-4">
        {Array.from({ length: LIGHT_COUNT }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              margin: "0 8px",
              backgroundColor: "red",
              opacity: index === activeIndex ? 1 : 0.3,
              transition: "opacity 0.2s ease",
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mb-3">
        <button className="btn btn-primary me-3" onClick={toggleLights}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Interval (ms): {intervalMs}
        </label>
        <input
          type="range"
          className="form-range"
          min="100"
          max="2000"
          step="100"
          value={intervalMs}
          onChange={handleIntervalChange}
        />
      </div>
    </div>
  );
}

export default ChristmasLights;
