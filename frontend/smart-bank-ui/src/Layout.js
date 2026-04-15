import { Outlet, useNavigate } from "react-router-dom";
import "./styles.css";

function Layout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="app">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>🏦 Smart Bank</h2>

        <p onClick={() => navigate("/dashboard")}>🏠 Dashboard</p>
        <p onClick={() => navigate("/transfer")}>💸 Transfer</p>
        <p onClick={() => navigate("/history")}>📜 History</p>
        <p onClick={() => navigate("/deposit")}>💰 Deposit</p>
        <p onClick={() => navigate("/profile")}>👤 Profile</p>
        <p onClick={logout}>🔐 Logout</p>
      </div>

      {/* MAIN CONTENT CHANGES HERE */}
      <div className="main">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;