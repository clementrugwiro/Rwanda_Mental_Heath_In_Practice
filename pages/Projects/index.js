// File: src/components/Projects/Projects.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Projects.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("API",JSON.stringify(process.env));
    // Fetch data from the API
    axios
      .get(`http://127.0.0.1:8000/api/our-work/`)
      .then((response) => {
        // Set the projects data from the API response
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects data:", error);
      });
  }, []);
    console.log(projects)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id} // Use project.id as the key
            name={project.title}
            location={project.location || "Unknown Location"} // Adjust if location is not in the API data
            image={project.image} // Adjust this if needed based on your API response
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};


export default Projects;
