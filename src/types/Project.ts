export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'archived' | 'development';
  thumbnail?: string; // URL or placeholder
  route?: string; // Internal route if applicable
  tags: string[];
}
