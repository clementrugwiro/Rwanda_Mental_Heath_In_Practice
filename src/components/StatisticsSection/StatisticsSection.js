// File: src/components/StatisticsSection/StatisticsSection.js

import React, { useEffect, useState, useRef } from "react";
import styles from "./StatisticsSection.module.scss";

const StatisticsSection = () => {
  const [stats, setStats] = useState({
    projects: 0,
    beneficiaries: 0,
    volunteers: 0,
  });

  const [isVisible, setIsVisible] = useState(false); // To check if the section is in view
  const sectionRef = useRef(null); // Reference to the statistics section

  const targetStats = {
    projects: 120,
    beneficiaries: 5000,
    volunteers: 200,
  };

  // Function to generate random numbers
  const generateRandomNumber = (max) => Math.floor(Math.random() * max);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true); // Trigger animation when in view
      } else {
        setIsVisible(false); // Reset if out of view
      }
    };

    // Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% of the component must be visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible) {
      // Start showing random numbers
      interval = setInterval(() => {
        setStats({
          projects: generateRandomNumber(200),
          beneficiaries: generateRandomNumber(10000),
          volunteers: generateRandomNumber(300),
        });
      }, 100);

      // Show correct numbers after 2 seconds
      setTimeout(() => {
        clearInterval(interval); // Stop the random number generator
        setStats(targetStats); // Show the correct numbers
      }, 2000); // 2 seconds duration
    }

    return () => clearInterval(interval); // Clear interval on component unmount or visibility change
  }, [isVisible]);

  return (
    <section className={styles.statisticsSection} ref={sectionRef}>
      <h2 className={styles.title}>What we have achieved so far</h2>

      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <h3>+{stats.projects}</h3>
          <p>Projects</p>
        </div>
        <div className={styles.stat}>
          <h3>+{stats.beneficiaries.toLocaleString()}</h3>
          <p>Beneficiaries</p>
        </div>
        <div className={styles.stat}>
          <h3>+{stats.volunteers}</h3>
          <p>Volunteers</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
