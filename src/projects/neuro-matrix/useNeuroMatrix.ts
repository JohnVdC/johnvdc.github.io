import { useState, useCallback } from "react";

export type Position = { row: number; col: number };
export type GameStatus = "idle" | "playing" | "won" | "lost";

const GRID_SIZE = 10;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;

export const useNeuroMatrix = () => {
  // Grid tracking: 0 = unvisited, >0 = visit order (1, 2, 3...)
  const [grid, setGrid] = useState<number[][]>(
    Array(GRID_SIZE)
      .fill(0)
      .map(() => Array(GRID_SIZE).fill(0))
  );
  const [currentPos, setCurrentPos] = useState<Position | null>(null);
  const [visitCount, setVisitCount] = useState(0);
  const [status, setStatus] = useState<GameStatus>("idle");

  // Initialize game
  const startGame = useCallback(() => {
    const newGrid = Array(GRID_SIZE)
      .fill(0)
      .map(() => Array(GRID_SIZE).fill(0));
    // Start at top-left (0,0)
    newGrid[0][0] = 1;
    setGrid(newGrid);
    setCurrentPos({ row: 0, col: 0 });
    setVisitCount(1);
    setStatus("playing");
  }, []);

  // Check if a move is valid
  const isValidMove = useCallback(
    (from: Position, to: Position, currentGrid: number[][]): boolean => {
      // 1. Check bounds
      if (
        to.row < 0 ||
        to.row >= GRID_SIZE ||
        to.col < 0 ||
        to.col >= GRID_SIZE
      ) {
        return false;
      }

      // 2. Check overlap (must visit empty cell)
      if (currentGrid[to.row][to.col] !== 0) {
        return false;
      }

      const dRow = Math.abs(to.row - from.row);
      const dCol = Math.abs(to.col - from.col);

      // 3. Check Rules
      // Rule A: Straight 3 (dRow=3, dCol=0 OR dRow=0, dCol=3)
      const isStraight3 =
        (dRow === 3 && dCol === 0) || (dRow === 0 && dCol === 3);

      // Rule B: Diagonal 2 (dRow=2, dCol=2)
      const isDiagonal2 = dRow === 2 && dCol === 2;

      return isStraight3 || isDiagonal2;
    },
    []
  );

  // Get all valid moves from a position
  const getValidMoves = useCallback(
    (pos: Position, currentGrid: number[][]): Position[] => {
      const moves: Position[] = [];
      const deltas = [
        // Straight 3
        { r: -3, c: 0 },
        { r: 3, c: 0 },
        { r: 0, c: -3 },
        { r: 0, c: 3 },
        // Diagonal 2
        { r: -2, c: -2 },
        { r: -2, c: 2 },
        { r: 2, c: -2 },
        { r: 2, c: 2 },
      ];

      for (const d of deltas) {
        const target = { row: pos.row + d.r, col: pos.col + d.c };
        if (isValidMove(pos, target, currentGrid)) {
          moves.push(target);
        }
      }
      return moves;
    },
    [isValidMove]
  );

  // Execute a move
  const makeMove = useCallback(
    (row: number, col: number) => {
      if (status !== "playing" || !currentPos) return;

      if (!isValidMove(currentPos, { row, col }, grid)) return;

      // Apply move
      const newGrid = [...grid.map((row) => [...row])];
      const newCount = visitCount + 1;
      newGrid[row][col] = newCount;

      setGrid(newGrid);
      setCurrentPos({ row, col });
      setVisitCount(newCount);

      // Check Win/Loss
      if (newCount === TOTAL_CELLS) {
        setStatus("won");
      } else {
        // Check if any moves remain
        const nextMoves = getValidMoves({ row, col }, newGrid);
        if (nextMoves.length === 0) {
          setStatus("lost");
        }
      }
    },
    [currentPos, grid, status, visitCount, isValidMove, getValidMoves]
  );

  return {
    grid,
    currentPos,
    status,
    visitCount,
    startGame,
    makeMove,
    getValidMoves, // Exposed for UI highlighting
  };
};
