import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">Money Tracker</Link>
        </li>

        {user ? (
          <>
            <li style={{ marginRight: "10px" }}>Hello, {user.displayName}</li>
            <li>
              <Link to="/" className={`${styles.logout} btn`} onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className={`${styles.signup} btn`} to="/sign-up">
                Signup
              </Link>
            </li>
            <li>
              <Link className={`${styles.login} btn`} to="/log-in">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
