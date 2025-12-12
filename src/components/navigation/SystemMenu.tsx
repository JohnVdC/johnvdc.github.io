import { Link } from "react-router-dom";
import styles from "./SystemMenu.module.css";

export const SystemMenu: React.FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.title}>{"<PROTOCOL 7/>"}</div>
      <Link to="/" className={styles.navLink}>
        [ SYSTEM ROOT ]
      </Link>
    </nav>
  );
};
