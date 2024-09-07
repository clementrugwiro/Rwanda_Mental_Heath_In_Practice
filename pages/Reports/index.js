import styles from "./Reports.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const reports = [
  {
    id: 1,
    title: "Annual Report 2023",
    date: "January 10, 2024",
    description:
      "A comprehensive overview of our achievements, challenges, and future plans in 2023.",
    file: "/reports/annual-report-2023.pdf",
  },
  {
    id: 2,
    title: "Community Impact Report 2023",
    date: "December 15, 2023",
    description:
      "Insights into the impact of our programs and initiatives on local communities in 2023.",
    file: "/reports/community-impact-report-2023.pdf",
  },
  {
    id: 3,
    title: "Financial Report Q4 2023",
    date: "November 30, 2023",
    description:
      "Detailed financial statements and analysis for the fourth quarter of 2023.",
    file: "/reports/financial-report-q4-2023.pdf",
  },
  // Add more reports as needed
];

const Reports = () => {
  return (
    <div className={styles.reportsPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Reports</h1>
        <p>
          Access our latest reports and publications to stay informed about our
          impact and progress.
        </p>
      </section>

      {/* Reports Section */}
      <section className={styles.reportsSection}>
        {reports.map((report) => (
          <div key={report.id} className={styles.reportCard}>
            <div className={styles.reportContent}>
              <h2 className={styles.reportTitle}>{report.title}</h2>
              <p className={styles.reportDate}>{report.date}</p>
              <p className={styles.reportDescription}>{report.description}</p>
              <a href={report.file} download className={styles.downloadButton}>
                Download
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reports;
