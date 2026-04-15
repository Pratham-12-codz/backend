import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Transfer from "./Transfer";
import History from "./History";
import Deposit from "./Deposit";
import Profile from "./Profile";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD SYSTEM */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="history" element={<History />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;