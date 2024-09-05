// File: src/pages/Impact.js

import styles from "./Impact.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import StatisticsSection from "@/components/StatisticsSection/StatisticsSection";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const testimonials = [
  {
    quote: "This organization has truly transformed our community!",
    author: "Jane Doe, Beneficiary",
  },
  {
    quote: "The projects are impactful and sustainable.",
    author: "John Smith, Partner",
  },
  // Add more testimonials as needed
];

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

const Impact = () => {
  return (
    <div className={styles.impactPage}>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Our Impact</h1>
        <p>See how our projects and initiatives are making a difference.</p>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

        {/* Project Highlights Section */}
        <section className={styles.projectHighlights}>
          <h2>Highlighted Projects</h2>
          <div className={styles.projectsContainer}>
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
        </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2>What People Are Saying</h2>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <p className={styles.author}>- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.callToAction}>
        <h2>Join Us in Making a Difference!</h2>
        <p>
          Your support helps us reach more people and create lasting change.
        </p>
        <button className={styles.ctaButton}>Get Involved</button>
      </section>
    </div>
  );
};

export default Impact;
