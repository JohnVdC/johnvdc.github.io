import React from "react";
import styles from "./SystemMenu.module.css";

export const SystemMenu: React.FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.title}>{"<PROTOCOL 7/>"}</div>
      <div className={styles.status}>
        <span>SYS: ONLINE</span>
        <span>VER: 0.1.0</span>
      </div>
    </nav>
  );
};
