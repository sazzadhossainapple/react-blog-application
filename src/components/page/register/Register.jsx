import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState();
  const [lodaing, setLoading] = useState();

  const { singup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmPassword) {
      return setError("Password don't match");
    }
    try {
      setError("");
      setLoading(true);
      await singup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Comfirm Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your confirm password..."
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button disabled={lodaing} type="submit" className="registerButton">
          Register
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
