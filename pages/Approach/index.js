import styles from "./Approach.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const Approach = () => {
  return (
    <div className={styles.approachPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Our Approach</h1>
        <p>
          Discover the methods and strategies that drive our success in making a
          difference.
        </p>
      </section>

      {/* Community-Based Interventions Section */}
      <section className={styles.communitySection}>
        <h2>Community-Based Interventions</h2>
        <p>
          Our community-based interventions focus on empowering local
          communities through participatory approaches. We work closely with
          community members to identify their needs and co-create solutions that
          are both sustainable and impactful. Key strategies include:
        </p>
        <ul>
          <li>
            Engaging community leaders and stakeholders in decision-making
            processes.
          </li>
          <li>
            Organizing workshops and training sessions to build local capacity.
          </li>
          <li>
            Facilitating partnerships with local organizations to leverage
            resources.
          </li>
          <li>
            Implementing feedback mechanisms to continuously improve our
            programs.
          </li>
        </ul>
      </section>

      {/* Vocational Training Section */}
      <section className={styles.vocationalSection}>
        <h2>Vocational Training</h2>
        <p>
          Our vocational training programs are designed to equip individuals
          with practical skills that enhance their employability and economic
          independence. We offer a range of training opportunities tailored to
          meet the needs of different communities. Our approach includes:
        </p>
        <ul>
          <li>Providing hands-on training in various trades and skills.</li>
          <li>Offering certification programs to validate acquired skills.</li>
          <li>
            Creating partnerships with businesses for job placements and
            apprenticeships.
          </li>
          <li>
            Providing ongoing support and mentorship to ensure successful career
            transitions.
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className={styles.callToAction}>
        <h2>Get Involved</h2>
        <p>
          Join us in our efforts to make a lasting impact through
          community-based interventions and vocational training. Your support
          and involvement can help us reach more individuals and communities in
          need.
        </p>
        <button className={styles.ctaButton}>Learn More</button>
      </section>
    </div>
  );
};

export default Approach;
