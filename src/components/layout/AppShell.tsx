import React, { type ReactNode } from "react";
import { SystemMenu } from "../navigation/SystemMenu";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className={styles.shell}>
      <SystemMenu />
      <main className={styles.content}>{children}</main>
    </div>
  );
};
