// File: src/components/StatisticsSection/StatisticsSection.js

import React from "react";
import styles from "./StatisticsSection.module.scss";

const StatisticsSection = () => {
  return (
    <section className={styles.statisticsSection}>
      {/* Section Title */}
      <h2 className={styles.title}>What we have achieved so far</h2>

      {/* Statistics Blocks */}
      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <h3>120</h3> {/* Number of Projects */}
          <p>Projects</p>
        </div>
        <div className={styles.stat}>
          <h3>5,000+</h3> {/* Number of Beneficiaries */}
          <p>Beneficiaries</p>
        </div>
        <div className={styles.stat}>
          <h3>200+</h3> {/* Number of Volunteers */}
          <p>Volunteers</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
