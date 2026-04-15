import { useState, useEffect } from "react";
import axios from "axios";

function Home() {

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      loadAccount(user.id);
    }
  }, []);

  const loadAccount = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/account/user/${userId}`
      );
      setAccount(res.data);
    } catch {
      alert("Error loading account");
    }
  };

  return (
    <div className="dashboard">
      <h2>🏦 Dashboard</h2>

      {account && (
        <div className="card">
          <p><b>Account ID:</b> {account.accountId}</p>
          <p><b>Balance:</b> ₹{account.balance}</p>
        </div>
      )}

      <div className="card">
        <a href="/transfer">
          <button>Transfer Money</button>
        </a>
      </div>
    </div>
  );
}

export default Home;