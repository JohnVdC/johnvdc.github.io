import React, { useEffect, useState, useRef, useCallback } from "react";
import { ProjectService } from "../../services/ProjectService";
import type { Project } from "../../types/Project";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectFeed.module.css";

export const ProjectFeed: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [cursor, setCursor] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);

  // Callback to attach to the last element
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCursor((prev) => prev + 10);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const loadProjects = async () => {
      if (loading || !hasMore) return;

      setLoading(true);
      try {
        const response = await ProjectService.fetchProjects(cursor, 10);
        setProjects((prev) => {
          // Simple deduping check if StrictMode causes double invoked effect
          const newIds = new Set(response.data.map((p) => p.id));
          const filteredPrev = prev.filter((p) => !newIds.has(p.id));
          return [...filteredPrev, ...response.data];
        });
        setHasMore(response.hasMore);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor]);

  return (
    <div className={styles.feed}>
      {projects.map((project, index) => {
        if (projects.length === index + 1) {
          return (
            <div ref={lastElementRef} key={project.id}>
              <ProjectCard project={project} />
            </div>
          );
        } else {
          return <ProjectCard key={project.id} project={project} />;
        }
      })}

      {loading && (
        <div className={styles.loading}>RECEIVING DATA STREAM...</div>
      )}
      {!hasMore && <div className={styles.end}>END OF TRANSMISSION</div>}
    </div>
  );
};
