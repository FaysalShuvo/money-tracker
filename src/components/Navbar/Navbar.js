// styles
import styles from "./Navbar.module.css";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">Money Tracker</Link>
        </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
