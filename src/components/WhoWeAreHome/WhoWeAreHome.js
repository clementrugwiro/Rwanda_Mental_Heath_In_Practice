import styles from "./WhoWeAreHome.module.scss";

const WhoWeAreHome = () => {
  return (
    <section className={styles.whoWeAreHome}>
      <div className={styles.textContainer}>
        <div className={styles.smallTitle}>
          <span>ABOUT</span>
          <hr />
        </div>
        <h1 className={styles.bigTitle}>WHO WE ARE</h1>
        <p className={styles.paragraph}>
          We are a dedicated non-profit organization focused on improving mental
          health among young people. Our mission is to provide support,
          resources, and education to empower youth in navigating their mental
          health challenges. Through community engagement, workshops, and
          advocacy, we strive to create a safe and inclusive environment where
          every young person can thrive and find the help they need. Together,
          we aim to break the stigma surrounding mental health and foster
          resilience in the next generation.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/WhoWeAre/image.svg" alt="Who We Are" />
      </div>
    </section>
  );
};

export default WhoWeAreHome;
