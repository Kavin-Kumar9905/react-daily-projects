import { useState, useEffect, useRef } from "react";

function CountdownTimer() {
  // -----------------------------
  // Input state
  // -----------------------------
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  // -----------------------------
  // Countdown state
  // -----------------------------
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState("");

  const intervalRef = useRef(null);

  // -----------------------------
  // Helpers
  // -----------------------------
  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return null;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  // -----------------------------
  // Start countdown
  // -----------------------------
  const handleStart = () => {
    setError("");

    if (!eventName.trim()) {
      setError("Event name cannot be empty.");
      return;
    }

    if (!eventDate) {
      setError("Event date is required.");
      return;
    }

    const dateTimeString = eventTime
      ? `${eventDate}T${eventTime}`
      : `${eventDate}T00:00`;

    const targetDate = new Date(dateTimeString);

    if (isNaN(targetDate.getTime())) {
      setError("Invalid date or time entered.");
      return;
    }

    // Prevent extremely large countdowns (overflow safety)
    const maxFuture = new Date();
    maxFuture.setFullYear(maxFuture.getFullYear() + 50);

    if (targetDate > maxFuture) {
      setError("Event date is too far in the future.");
      return;
    }

    const initialTimeLeft = calculateTimeLeft(targetDate);

    if (!initialTimeLeft) {
      setError("Event time must be in the future.");
      return;
    }

    setTimeLeft(initialTimeLeft);
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      const updated = calculateTimeLeft(targetDate);
      if (!updated) {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTimeLeft(null);
        alert(`🎉 ${eventName} has arrived!`);
      } else {
        setTimeLeft(updated);
      }
    }, 1000);
  };

  // -----------------------------
  // Cleanup
  // -----------------------------
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div>
      <h2 className="mb-4">Countdown Timer</h2>

      {/* Error */}
      {error && <div className="alert alert-warning">{error}</div>}

      {/* Input Form */}
      <div className="mb-4">
        <div className="mb-2">
          <label>Event Name</label>
          <input
            className="form-control"
            value={eventName}
            disabled={isRunning}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label>Event Date</label>
          <input
            type="date"
            className="form-control"
            value={eventDate}
            disabled={isRunning}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Event Time (optional)</label>
          <input
            type="time"
            className="form-control"
            value={eventTime}
            disabled={isRunning}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </div>

        <button
          className={`btn ${isRunning ? "btn-secondary" : "btn-primary"}`}
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
      </div>

      {/* Countdown Display */}
      {timeLeft && (
        <div className="text-center">
          <h4 className="mb-3">{eventName}</h4>
          <div className="d-flex justify-content-center gap-4">
            <div>
              <h3>{timeLeft.days}</h3>
              <small>Days</small>
            </div>
            <div>
              <h3>{timeLeft.hours}</h3>
              <small>Hours</small>
            </div>
            <div>
              <h3>{timeLeft.minutes}</h3>
              <small>Minutes</small>
            </div>
            <div>
              <h3>{timeLeft.seconds}</h3>
              <small>Seconds</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;
