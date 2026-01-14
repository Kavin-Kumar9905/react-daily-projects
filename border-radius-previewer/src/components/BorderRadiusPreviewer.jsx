import { useState } from "react";

function BorderRadiusPreviewer() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);

  const cssCode = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    alert("CSS copied to clipboard!");
  };

  return (
    <div className="row mt-4">
      {/* Preview Box */}
      <div className="col-md-6 d-flex justify-content-center align-items-center mb-4">
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#0d6efd",
            borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
          }}
        />
      </div>

      {/* Controls */}
      <div className="col-md-6">
        <h5 className="mb-3">Border Radius Controls</h5>

        <div className="mb-2">
          <label>Top Left: {topLeft}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={topLeft}
            onChange={(e) => setTopLeft(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label>Top Right: {topRight}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={topRight}
            onChange={(e) => setTopRight(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label>Bottom Right: {bottomRight}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={bottomRight}
            onChange={(e) => setBottomRight(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label>Bottom Left: {bottomLeft}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={bottomLeft}
            onChange={(e) => setBottomLeft(e.target.value)}
          />
        </div>

        {/* CSS Output */}
        <div className="mt-4">
          <label className="form-label">Generated CSS</label>
          <textarea
            className="form-control mb-2"
            rows="2"
            readOnly
            value={cssCode}
          />

          <button className="btn btn-success" onClick={handleCopy}>
            Copy CSS
          </button>
        </div>
      </div>
    </div>
  );
}

export default BorderRadiusPreviewer;
