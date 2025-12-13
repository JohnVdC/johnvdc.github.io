import React, { useEffect } from "react";
import styles from "./NeuroMatrix.module.css";
import { useNeuroMatrix } from "./useNeuroMatrix";

export const NeuroMatrix: React.FC = () => {
  const {
    grid,
    currentPos,
    status,
    visitCount,
    startGame,
    makeMove,
    getValidMoves,
    GRID_SIZE,
  } = useNeuroMatrix();

  // Start game on mount
  useEffect(() => {
    startGame();
  }, [startGame]);

  // Handle cell click
  const handleCellClick = (row: number, col: number) => {
    makeMove(row, col);
  };

  // Calculate valid moves for highlighting
  const validMoves = currentPos ? getValidMoves(currentPos, grid) : [];
  const isValid = (r: number, c: number) =>
    validMoves.some((m) => m.row === r && m.col === c);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>NEURO MATRIX</h1>
        <div className={styles.score}>SYNCHRONIZATION: {visitCount}%</div>
      </header>

      <div className={styles.grid}>
        {grid.map((row, rIndex) =>
          row.map((cellValue, cIndex) => {
            const isCurrent =
              currentPos?.row === rIndex && currentPos?.col === cIndex;
            const isVisited = cellValue > 0;
            const isReachable = isValid(rIndex, cIndex);

            let cellClass = styles.cell;
            if (isCurrent) cellClass += ` ${styles.current}`;
            else if (isVisited) cellClass += ` ${styles.visited}`;
            else if (isReachable) cellClass += ` ${styles.valid}`;

            return (
              <div
                key={`${rIndex}-${cIndex}`}
                className={cellClass}
                onClick={() =>
                  isReachable ? handleCellClick(rIndex, cIndex) : undefined
                }
              >
                {cellValue > 0 ? cellValue : ""}
              </div>
            );
          })
        )}
      </div>

      <div className={`${styles.status} ${status === "won" ? styles.won : ""}`}>
        {status === "playing" && ">> AWAITING INPUT <<"}
        {status === "won" && ">> SEQUENCE COMPLETE. SYSTEM UNLOCKED. <<"}
        {status === "lost" && ">> CONNECTION LOST. NO VALID MANEUVERS. <<"}
      </div>

      <div className={styles.footer}>
        {status !== "playing" && (
          <button
            className={styles.retryButton}
            onClick={startGame}
            style={{
              padding: "10px 20px",
              background: "var(--color-neon-green)",
              color: "var(--color-bg)",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
            }}
          >
            {status === "won" ? "RESTART" : "RETRY SEQUENCE"}
          </button>
        )}
      </div>
    </div>
  );
};
