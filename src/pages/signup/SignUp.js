import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
// styles
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { signup, isPending, error } = useSignup();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, username);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signin-from"]}>
      <h2>Signup</h2>
      <label>
        <span>email: </span>
        <input
          type="email"
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>username: </span>
        <input
          type="text"
          placeholder="John Doe"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <label>
        <span>password: </span>
        <input
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {isPending ? (
        <button className="btn" disabled>
          loading...
        </button>
      ) : (
        <button className="btn">Login</button>
      )}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default SignUp;
