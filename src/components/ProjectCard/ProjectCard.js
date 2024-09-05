// File: src/components/Projects/ProjectCard.js

import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ name, location, image, description }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectLocation}>{location}</p>
      <p className={styles.projectDescription}>{description}</p>
    </div>
  );
};

export default ProjectCard;
