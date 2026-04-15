import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const login = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      { email, password }
    );

    if (!res.data || !res.data.id) {
      alert("Invalid login");
      return;
    }

    localStorage.setItem("user", JSON.stringify(res.data));

    navigate("/dashboard");

  } catch {
    alert("Login Failed");
  }
};

  return (
    <div className="container">
      <h2>🔐 Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p>
        New user?{" "}
        <span
          style={{ color: "#4facfe", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Create Account
        </span>
      </p>
    </div>
  );
}

export default Login;