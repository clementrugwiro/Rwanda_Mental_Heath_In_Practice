// File: src/components/Projects/Projects.js

import styles from "./Projects.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const projects = [
  {
    name: "Project One",
    location: "Location One",
    image: "/images/Projects/project1.jpg",
    description: "A brief description of Project One.",
  },
  {
    name: "Project Two",
    location: "Location Two",
    image: "/images/Projects/project2.jpg",
    description: "A brief description of Project Two.",
  },
  {
    name: "Project Three",
    location: "Location Three",
    image: "/images/Projects/project3.jpg",
    description: "A brief description of Project Three.",
  },
  {
    name: "Project Four",
    location: "Location Four",
    image: "/images/Projects/project4.jpg",
    description: "A brief description of Project Four.",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            location={project.location}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
