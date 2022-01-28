// style
import styles from "./Home.module.css";

import React from "react";
import TransactionForm from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";
import AnimatePage from "../../components/AnimatePage/AnimatePage";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );
  return (
    <AnimatePage>
      <div className={styles.container}>
        <div className={styles.content}>
          {error && <p style={{ color: "crimson" }}>{error}</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </AnimatePage>
  );
};

export default Home;
