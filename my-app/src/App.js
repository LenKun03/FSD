import "./App.css";
import { useState } from "react";

function App() {
  const name = "Sai Srivatsa";
  const amount = [50, 100, 200, 500];
  const [balance, setBalance] = useState(1000);
  const [insufficientBalance, setInsufficientBalance] = useState(false);

  const amountDeduction = (withdrawlAmount) => {
    if (withdrawlAmount > balance) {
      setInsufficientBalance(true);
    } else {
      setBalance(balance - withdrawlAmount);
      setInsufficientBalance(false);
    }
  };

  return (
    <div className="App">
      <div className="main">
        {/* ----------------section1-------------- */}
        {/* ----------------header-------------- */}
        <div className="header">
          <div className="profile">
            <div className="profile-image">
              <h4>S</h4>
            </div>
            <h2 className="profile-name">{name}</h2>
          </div>
          {/* ----------------header2-------------- */}
          <div className="profile-description">
            <div className="balance-section">
              <p className="balance">Your Balance</p>
              <h1 className="amount">{balance}</h1>
            </div>
            <h6 className="currency">In Rupees</h6>
          </div>
        </div>

        {/* ----------------section2-------------- */}
        {/* ----------------withdraw-------------- */}
        <div className="withdraw-section">
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        </div>
        <div className="buttons">
          {amount.map((eachAmount, index) => (
            <button key={index} onClick={() => amountDeduction(eachAmount)}>
              ₹{eachAmount}
            </button>
          ))}
        </div>
        {insufficientBalance && (
          <h4
            className="error-message"
            style={{ color: "red", marginTop: "10px", marginLeft: "30%" }}>
            INSUFFICIENT BALANCE!
          </h4>
        )}
      </div>
    </div>
  );
}

export default App;