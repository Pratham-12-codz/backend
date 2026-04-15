import { useState } from "react";
import axios from "axios";

function Transfer() {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");

  const transfer = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/transaction/transfer?fromId=${fromId}&toId=${toId}&amount=${amount}`
      );
      alert(res.data);
    } catch {
      alert("Transfer Failed");
    }
  };

  return (
  <div className="container">
    <h2>Transfer Money</h2>
    <input placeholder="From Account" onChange={(e)=>setFromId(e.target.value)} />
    <input placeholder="To Account" onChange={(e)=>setToId(e.target.value)} />
    <input placeholder="Amount" onChange={(e)=>setAmount(e.target.value)} />
    <button onClick={transfer}>Send</button>
  </div>
);
}

export default Transfer;