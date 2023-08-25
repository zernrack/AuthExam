import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./auth";
import "../assets/styles/login.css";
export default function Login() {
  // Will store user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const success = await login(username, password); // Use the login function
      if (success) {
        navigate("/");
      }
    } catch {
      console.error("Login failed");
    }
  };

  return (
    <>
      <main>
        <div className="centerBox">
          <h1>Login</h1>
          <div className="loginBox">
            <span>Username:</span>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Password:</span>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
