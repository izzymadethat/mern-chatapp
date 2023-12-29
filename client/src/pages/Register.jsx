import { useState } from "react";
import "../utils/styles/registerpage.css";
import LogoSection from "../components/LogoSection";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    await axios.post("/register", { username, password });
  }

  return (
    <div className="form-page">
      <LogoSection />
      <form className="form" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
