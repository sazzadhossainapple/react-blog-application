import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [lodaing, setLoading] = useState();

  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login");
    }
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={lodaing} type="submit" className="loginButton">
          Login
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
