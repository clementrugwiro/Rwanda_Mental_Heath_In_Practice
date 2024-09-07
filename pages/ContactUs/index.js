import styles from "./ContactUs.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const ContactUs = () => {
  return (
    <div className={styles.contactUsPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! Fill out the form below or reach us
          directly.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.formContainer}>
          <h2>Get in Touch</h2>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject">
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className={styles.contactInfoSection}>
        <h2>Contact Information</h2>
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <h3>Address</h3>
            <p>123 Main Street, City, Country</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>info@yourorganization.org</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
