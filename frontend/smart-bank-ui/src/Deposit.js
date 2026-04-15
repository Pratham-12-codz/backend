import { useState } from "react";
import axios from "axios";
import "./styles.css";

function Deposit() {

  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");

  const deposit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/account/deposit?accountId=${accountId}&amount=${amount}`
      );

      alert(res.data);
    } catch {
      alert("Error");
    }
  };

  const withdraw = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/account/withdraw?accountId=${accountId}&amount=${amount}`
      );

      alert(res.data);
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h2>💰 Deposit / Withdraw</h2>

      <input placeholder="Account ID" onChange={(e)=>setAccountId(e.target.value)} />
      <input placeholder="Amount" onChange={(e)=>setAmount(e.target.value)} />

      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
}

export default Deposit;