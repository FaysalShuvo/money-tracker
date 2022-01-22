import { useState } from "react";
// styles
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, username);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signin-from"]}>
      <h2>Login</h2>
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
      <button className="btn">Login</button>
    </form>
  );
};

export default SignUp;