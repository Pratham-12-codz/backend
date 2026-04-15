import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Dashboard() {

  const navigate = useNavigate();

  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 LOAD ACCOUNT
  const loadAccount = useCallback(async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/account/user/${userId}`
      );

      setAccount(res.data);

      if (res.data) {
        loadTransactions(res.data.accountId);
      }

    } catch (err) {
      console.log("Error loading account:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔥 LOAD TRANSACTIONS
  const loadTransactions = async (accountId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/transaction/history/${accountId}`
      );
      setTransactions(res.data);
    } catch (err) {
      console.log("Error loading transactions:", err);
    }
  };

  // 🔥 LOAD ON PAGE
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/");
    } else {
      loadAccount(user.id);
    }
  }, [loadAccount, navigate]);

  // 🔐 LOGOUT
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

return (
  <div>

    {/* 🔥 TOP NAVBAR */}
   

    {/* MAIN */}
    <div className="main-content">

      {/* SINGLE CLEAN TITLE */}
      <h2>🏠 Dashboard</h2>

      {loading && <p>Loading...</p>}

      {!loading && (
        <div className="dashboard-content">

          {/* BALANCE */}
          {account && (
            <div className="balance-card big">
              <h3>Account ID: {account.accountId}</h3>
              <h1>₹ {account.balance}</h1>
              <p>Available Balance</p>
            </div>
          )}

          {/* TRANSACTIONS */}
          <div className="transaction-card">
            <h3>📊 Recent Transactions</h3>

            {transactions.length === 0 && (
              <p>No transactions yet</p>
            )}

            {transactions.map((t, i) => (
              <div className="tx-row" key={i}>
                <span>{t.fromAccount} → {t.toAccount}</span>
                <span>₹ {t.amount}</span>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  </div>
);
}

export default Dashboard;