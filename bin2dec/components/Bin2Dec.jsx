import { useState } from "react";

function Bin2Dec() {
    const [binary, setBinary] = useState("");
    const [decimal, setDecimal] = useState(null);
    const [error, setError] = useState("");

    //Validate the input contains only 0 and 1
    const isValidBinary = (value) => {
        for (let i = 0; i < value.length; i++) {
            if (value[i] !== "0" && value[i] !== "1") {
                return false;
            }
        }
        return true;
    };

    //Convert binary string to decimal using math
    const convertToDecimal = (binaryStr) => {
        let result = 0;
        let power = binaryStr.length - 1;

        for (let i = 0; i < binaryStr.length; i++) {
            const digit = binaryStr[i] === "1" ? 1 : 0;
            result += digit * Math.pow(2, power);
            power--;
        }
        return result;
    };

    const handleConvert = () => {
        setError("");
        setDecimal(null);

        if (binary.length === 0) {
            setError("Please enter a binary number");
            return;
        }

        if (binary.length > 8) {
            setError("Maximum 8 binary digits are allowed");
            return;
        }

        if (!isValidBinary(binary)) {
            setError("Only 0 and 1 are allowed");
            return;
        }

        const decimalValue = convertToDecimal(binary);
        setDecimal(decimalValue);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow p-4 mt-5">
                    <h2 className="text-center mb-4">Binary to Decimal</h2>

                    <input 
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter binary number"
                        value={binary}
                        onChange={(e) => setBinary(e.target.value)}
                    />

                    {error && (
                        <div className="text-danger mb-2">{error}</div>
                    )}

                    <button
                        className="btn btn-primary w-100 mb-3"
                        onClick={handleConvert}
                    >
                        Convert
                    </button>

                    {decimal !== null && (
                        <div className="alert alert-success text-center">
                            Decimal Value: <strong>{decimal}</strong>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bin2Dec;