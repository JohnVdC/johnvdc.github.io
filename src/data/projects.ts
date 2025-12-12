import type { Project } from '../types/Project';

export const PROJECTS: Project[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `proj-${i}`,
  title: i === 0 ? 'NEURO MATRIX' : `PROJECT_SEQUENCE_${i.toString().padStart(3, '0')}`,
  description: i === 0 ? 'Grid-based cryptographic puzzle solver. Version 1.0.' : `CLASSIFIED DEVELOPMENT. SUB-ROUTINE ${i * 1337} ACTIVE. WAITING FOR INPUT.`,
  status: i % 3 === 0 ? 'active' : 'development',
  tags: i === 0 ? ['PUZZLE', 'CRYPTOGRAPHY', 'GRID'] : ['REACT', 'CYBERPUNK', 'VITE'],
  route: i === 0 ? '/neuro-matrix' : undefined,
}));
