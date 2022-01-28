import { useState } from "react";
import AnimatePage from "../../components/AnimatePage/AnimatePage";
import { useLogin } from "../../hooks/useLogin";
// style
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <AnimatePage>
      <form onSubmit={handleSubmit} className={styles["login-from"]}>
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
            Loading...
          </button>
        ) : (
          <button className="btn">Login</button>
        )}
        {error && <p style={{ color: "#FF2E63" }}>{error}</p>}
      </form>
    </AnimatePage>
  );
};

export default Login;
