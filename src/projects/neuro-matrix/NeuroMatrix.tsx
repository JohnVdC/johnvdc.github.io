import React from "react";

export const NeuroMatrix: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "var(--font-mono)",
      }}
    >
      <h1 style={{ color: "var(--color-neon-green)", fontSize: "3rem" }}>
        NEURO MATRIX
      </h1>
      <p style={{ color: "var(--color-cyan)" }}>
        SYSTEM INITIALIZED. GRID LOADER READY.
      </p>
    </div>
  );
};
