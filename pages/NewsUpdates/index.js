import styles from "./NewsUpdates.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const newsItems = [
  {
    title: "New Community Center Opened",
    date: "September 1, 2024",
    image: "/images/NewsUpdates/project5.jpg",
    description:
      "We are excited to announce the opening of a new community center in Location X. This center will serve as a hub for various community activities and vocational training programs.",
  },
  {
    title: "Successful Completion of Vocational Training Program",
    date: "August 15, 2024",
    image: "/images/NewsUpdates/project6.jpg",
    description:
      "Our vocational training program has successfully equipped over 100 participants with skills in carpentry, tailoring, and more. We celebrate their achievements and look forward to their future successes.",
  },
  {
    title: "Partnership with Local NGOs",
    date: "July 28, 2024",
    image: "/images/NewsUpdates/project7.jpg",
    description:
      "We have partnered with several local NGOs to strengthen our community-based interventions. This collaboration aims to bring more resources and expertise to our programs.",
  },
  // Add more news items as needed
];

const NewsUpdates = () => {
  return (
    <div className={styles.newsUpdatesPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>News & Updates</h1>
        <p>
          Stay informed with the latest news and updates from our organization.
        </p>
      </section>

      {/* News Section */}
      <section className={styles.newsSection}>
        {newsItems.map((newsItem, index) => (
          <div key={index} className={styles.newsCard}>
            <div className={styles.imageContainer}>
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{newsItem.title}</h2>
              <p className={styles.date}>{newsItem.date}</p>
              <p className={styles.description}>{newsItem.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewsUpdates;
