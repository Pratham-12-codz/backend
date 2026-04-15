import { useState } from "react";
import axios from "axios";
import "./styles.css";

function History() {

  const [accountId, setAccountId] = useState("");
  const [data, setData] = useState([]);

  const load = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/transaction/history/${accountId}`
      );

      setData(res.data);
    } catch {
      alert("Error loading history");
    }
  };

  return (
    <div className="container">
      <h2>📜 Transaction History</h2>

      <input
        placeholder="Enter Account ID"
        onChange={(e) => setAccountId(e.target.value)}
      />

      <button onClick={load}>Load</button>

      {/* TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan="5">No transactions</td>
            </tr>
          )}

          {data.map((t, i) => (
            <tr key={i}>
              <td>{t.fromAccount}</td>
              <td>{t.toAccount}</td>
              <td>₹ {t.amount}</td>
              <td>{t.type}</td>
              <td>
                {t.date
                  ? new Date(t.date).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default History;