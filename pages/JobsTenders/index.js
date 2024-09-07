import styles from "./JobsTenders.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const jobs = [
  {
    id: 1,
    title: "Project Manager",
    description:
      "We are looking for a Project Manager to lead our upcoming community development project. The ideal candidate should have 5+ years of experience in project management and a background in community-based work.",
    deadline: "October 15, 2024",
    link: "/jobs/project-manager.pdf",
  },
  {
    id: 2,
    title: "Finance Officer",
    description:
      "We need a skilled Finance Officer to manage our financial operations. The candidate must be proficient in financial planning, budgeting, and financial reporting.",
    deadline: "September 30, 2024",
    link: "/jobs/finance-officer.pdf",
  },
  // Add more jobs as needed
];

const tenders = [
  {
    id: 1,
    title: "Supply of IT Equipment",
    description:
      "We are inviting bids for the supply of IT equipment for our new offices. Please refer to the tender document for more details on the requirements and submission process.",
    deadline: "November 10, 2024",
    link: "/tenders/it-equipment-tender.pdf",
  },
  {
    id: 2,
    title: "Construction of Community Center",
    description:
      "We are seeking proposals for the construction of a community center in Location X. Interested contractors are requested to submit their bids as per the tender guidelines.",
    deadline: "October 20, 2024",
    link: "/tenders/community-center-tender.pdf",
  },
  // Add more tenders as needed
];

const JobsTenders = () => {
  return (
    <div className={styles.jobsTendersPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Jobs and Tenders</h1>
        <p>Explore our latest job openings and tender opportunities.</p>
      </section>

      {/* Jobs Section */}
      <section className={styles.jobsSection}>
        <h2>Job Openings</h2>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobContent}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.jobDescription}>{job.description}</p>
              <p className={styles.jobDeadline}>
                Application Deadline: {job.deadline}
              </p>
              <a href={job.link} download className={styles.downloadButton}>
                View Details
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Tenders Section */}
      <section className={styles.tendersSection}>
        <h2>Tender Opportunities</h2>
        {tenders.map((tender) => (
          <div key={tender.id} className={styles.tenderCard}>
            <div className={styles.tenderContent}>
              <h3 className={styles.tenderTitle}>{tender.title}</h3>
              <p className={styles.tenderDescription}>{tender.description}</p>
              <p className={styles.tenderDeadline}>
                Submission Deadline: {tender.deadline}
              </p>
              <a href={tender.link} download className={styles.downloadButton}>
                View Details
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobsTenders;
