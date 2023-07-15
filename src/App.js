import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import your custom CSS file for styling

const App = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [splitAmount, setSplitAmount] = useState(0);

  const handleBillChange = (e) => {
    setTotalBill(parseFloat(e.target.value));
  };

  const handlePeopleChange = (e) => {
    setNumPeople(parseInt(e.target.value));
  };

  const calculateSplitAmount = () => {
    const amount = totalBill / numPeople;
    setSplitAmount(isNaN(amount) ? 0 : amount.toFixed(2));
  };

  return (
    <div className="container content-container">
      <h1>Bill Splitter</h1>
      <div className="form-group">
        <label htmlFor="totalBill">Total Bill:</label>
        <input
          type="number"
          className="form-control"
          id="totalBill"
          value={totalBill}
          onChange={handleBillChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="numPeople">Number of People:</label>
        <input
          type="number"
          className="form-control"
          id="numPeople"
          value={numPeople}
          onChange={handlePeopleChange}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={calculateSplitAmount}>
        Calculate
      </button>

      <div className="mt-3">
        <h2>Split Amount:</h2>
        <p>{splitAmount}</p>
      </div>
    </div>
  );
};

export default App;
