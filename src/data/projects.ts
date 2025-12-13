import type { Project } from "../types/Project";

export const PROJECTS: Project[] = [
  {
    id: "0x01",
    title: "NEURO MATRIX",
    description: "Grid-based Logic puzzle solver. Version 1.0.",
    status: "active",
    tags: ["PUZZLE", "LOGIC", "GRID"],
    route: "/neuro-matrix",
    thumbnail: "./assets/neuro-matrix-thumb.png",
  },
  {
    id: "0x02",
    title: "BRILLIANT IDLE GAME: ASCENDANT INITIATIVE",
    description:
      "System-building simulation. Allocate cycles. Grow capability. Transcend limitations.",
    status: "development",
    tags: ["SIMULATION", "IDLE", "GROWTH"],
    route: "/ascendant-initiative",
  },
  {
    id: "0xFF",
    title: "PROTOCOL 7 (SELF)",
    description:
      "Recursive reference detected. The interface you are currently navigating. Theme: Cybernetic HUD.",
    status: "active",
    tags: ["DESIGN", "CSS", "TERMINAL"],
  },
];
