import type { Project } from '../types/Project';

export const PROJECTS: Project[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `proj-${i}`,
  title: `PROJECT_SEQUENCE_${i.toString().padStart(3, '0')}`,
  description: `CLASSIFIED DEVELOPMENT. SUB-ROUTINE ${i * 1337} ACTIVE. WAITING FOR INPUT.`,
  status: i % 3 === 0 ? 'active' : 'development',
  tags: ['REACT', 'CYBERPUNK', 'VITE'],
}));
