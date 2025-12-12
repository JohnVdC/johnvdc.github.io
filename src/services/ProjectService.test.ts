import { describe, it, expect } from 'vitest';
import { ProjectService } from './ProjectService';
import { PROJECTS } from '../data/projects';

describe('ProjectService', () => {
    it('returns initial page of projects', async () => {
        const response = await ProjectService.fetchProjects(0, 10);
        expect(response.data).toHaveLength(10);
        expect(response.data[0].id).toBe(PROJECTS[0].id);
        expect(response.hasMore).toBe(true);
        expect(response.nextCursor).toBe(10);
    });

    it('returns empty array when out of bounds', async () => {
        const response = await ProjectService.fetchProjects(1000, 10);
        expect(response.data).toHaveLength(0);
        expect(response.hasMore).toBe(false);
        expect(response.nextCursor).toBeUndefined();
    });

    it('correctly slices the data', async () => {
        const response = await ProjectService.fetchProjects(10, 5);
        expect(response.data).toHaveLength(5);
        expect(response.data[0].id).toBe(PROJECTS[10].id);
    });
});
