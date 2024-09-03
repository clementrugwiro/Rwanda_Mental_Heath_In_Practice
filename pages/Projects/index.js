import styles from "./Projects.module.scss";
import NavBar from "@/components/NavBar/NavBar";
const projects = [
  {
    name: "Project One",
    location: "Location One",
    image: "/images/Projects/project1.jpg",
  },
  {
    name: "Project Two",
    location: "Location Two",
    image: "/images/Projects/project2.jpg",
  },
  {
    name: "Project Two",
    location: "Location Two",
    image: "/images/Projects/project3.jpg",
  },
  {
    name: "Project Two",
    location: "Location Two",
    image: "/images/Projects/project4.jpg",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <h2 className={styles.title}>Our Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.hexagon}>
            <div className={styles.hexagonContent}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.image}
              />
              <div className={styles.info}>
                <h3>{project.name}</h3>
                <p>{project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
