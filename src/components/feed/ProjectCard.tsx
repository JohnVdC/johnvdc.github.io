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
      <div className={styles.monitorWrapper}>
        <img
          src="/assets/monitor-frame.png"
          alt="CRT Frame"
          className={styles.frame}
        />
        <div className={styles.thumbnailContainer}>
          {/* Placeholder for now, eventually project.thumbnail */}
          <div
            className={styles.thumbnail}
            style={{
              background:
                "repeating-linear-gradient(45deg, #050505 0px, #050505 10px, #111 10px, #111 20px)",
            }}
          />
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>

      <button className={styles.button} onClick={handleExecute}>
        [ EXECUTE ]
      </button>
    </article>
  );
};
