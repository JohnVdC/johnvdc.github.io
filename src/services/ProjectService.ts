import type { Project } from '../types/Project';
import { PROJECTS } from '../data/projects';

const DELAY_MS = 500;

export interface ProjectResponse {
  data: Project[];
  hasMore: boolean;
  nextCursor?: number;
}

export const ProjectService = {
  fetchProjects: async (cursor: number = 0, limit: number = 10): Promise<ProjectResponse> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, DELAY_MS));

    const start = cursor;
    const end = start + limit;
    const data = PROJECTS.slice(start, end);
    const hasMore = end < PROJECTS.length;

    return {
      data,
      hasMore,
      nextCursor: hasMore ? end : undefined,
    };
  },
};
