import React from "react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/Project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleExecute = () => {
    if (project.route) {
      navigate(project.route);
    } else {
      console.log("EXECUTE:", project.id);
    }
  };

  return (
    <article className={styles.card}>
      {/* Header Bar */}
      <div className={styles.header}>
        <span>ID: {project.id}</span>
        <span>{project.status.toUpperCase()}</span>
      </div>

      {/* Image Area */}
      <div className={styles.imageArea}>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className={styles.thumbnailImage}
          />
        ) : (
          <span className={styles.missingData}>[IMAGE DATA MISSING]</span>
        )}
      </div>

      {/* Body */}
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        <div className={styles.descriptionWrapper}>
          <div className={styles.metaInfo}>
            [SYS]: Recursive reference detected.
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <button className={styles.button} onClick={handleExecute}>
          EXECUTE
        </button>
      </div>
    </article>
  );
};
