import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Profile() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));

    if (!u) {
      navigate("/");
    } else {
      loadUser(u.id);
      loadAccount(u.id);
    }
  }, [navigate]);

  // 🔥 Load user
  const loadUser = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/user/${id}`);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 Load account
  const loadAccount = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/account/user/${id}`);
      setAccount(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔐 Logout
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard">

      <h2>👤 Profile</h2>

      {/* USER CARD */}
      {user && (
        <div className="balance-card">
          <h3>👤 {user.name}</h3>
          <p><b>Email:</b> {user.email}</p>
          <p><b>User ID:</b> {user.id}</p>
          <p><b>Role:</b> {user.role}</p>
        </div>
      )}

      {/* ACCOUNT CARD */}
      {account && (
        <div className="balance-card" style={{ marginTop: "20px" }}>
          <h3>💳 Account Details</h3>
          <p><b>Account ID:</b> {account.accountId}</p>
          <p><b>Balance:</b> ₹ {account.balance}</p>
          <p><b>Type:</b> {account.accountType}</p>
        </div>
      )}

      {/* ACTION BUTTONS */}
      <div style={{ marginTop: "30px" }}>

        <button onClick={() => navigate("/dashboard")}>
          ⬅ Back to Dashboard
        </button>

        <button onClick={logout} style={{ background: "#ff4d4d" }}>
          🔐 Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;