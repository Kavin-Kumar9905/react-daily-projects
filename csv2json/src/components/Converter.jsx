import { useState } from "react";

function Converter() {
  const [jsonText, setJsonText] = useState("");
  const [csvText, setCsvText] = useState("");
  const [error, setError] = useState("");

  // ---------------------------
  // Helpers
  // ---------------------------
  const isFlatObject = (obj) => {
    return Object.values(obj).every(
      (value) => typeof value !== "object" || value === null
    );
  };

  // ---------------------------
  // JSON → CSV
  // ---------------------------
  const handleJsonToCsv = () => {
    setError("");
    setCsvText("");

    if (!jsonText.trim()) {
      setError("JSON input cannot be empty.");
      return;
    }

    let data;
    try {
      data = JSON.parse(jsonText);
    } catch {
      setError("Invalid JSON syntax.");
      return;
    }

    if (!Array.isArray(data)) {
      setError("JSON must be an array of objects.");
      return;
    }

    if (data.length === 0) {
      setError("JSON array is empty.");
      return;
    }

    if (!data.every(isFlatObject)) {
      setError("Nested JSON structures are not supported.");
      return;
    }

    const headers = Object.keys(data[0]);

    const rows = data.map((obj) =>
      headers.map((key) => String(obj[key] ?? "")).join(",")
    );

    setCsvText([headers.join(","), ...rows].join("\n"));
  };

  // ---------------------------
  // CSV → JSON
  // ---------------------------
  const handleCsvToJson = () => {
    setError("");
    setJsonText("");

    if (!csvText.trim()) {
      setError("CSV input cannot be empty.");
      return;
    }

    const lines = csvText.trim().split("\n");

    if (lines.length < 2) {
      setError("CSV must contain a header and at least one data row.");
      return;
    }

    const headers = lines[0].split(",");

    if (headers.some((h) => h.trim() === "")) {
      setError("CSV headers cannot be empty.");
      return;
    }

    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");

      if (values.length !== headers.length) {
        setError("CSV rows must match the header column count.");
        return;
      }

      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });

      result.push(obj);
    }

    setJsonText(JSON.stringify(result, null, 2));
  };

  // ---------------------------
  // Clear
  // ---------------------------
  const handleClear = () => {
    setJsonText("");
    setCsvText("");
    setError("");
  };

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div>
      <h2 className="mb-3">CSV ↔ JSON Converter</h2>

      {error && <div className="alert alert-warning">{error}</div>}

      <div className="row mb-3">
        <div className="col">
          <label>JSON</label>
          <textarea
            className="form-control"
            rows="10"
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
          />
        </div>

        <div className="col">
          <label>CSV</label>
          <textarea
            className="form-control"
            rows="10"
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={handleJsonToCsv}>
          Convert to CSV
        </button>
        <button className="btn btn-success" onClick={handleCsvToJson}>
          Convert to JSON
        </button>
        <button className="btn btn-secondary" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Converter;
