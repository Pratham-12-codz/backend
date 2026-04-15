import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
        role: "USER"
      });

      alert("Account Created");
      navigate("/");
    } catch {
      alert("Error creating account");
    }
  };

return (
  <div className="container">
    <h2>Create Account</h2>
    <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
    <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
    <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={register}>Register</button>
  </div>
);
}

export default Register;