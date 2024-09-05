import styles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul>
        <li className={styles.dropdown}>
          <Link href="#">WHO WE ARE</Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/AboutUs">ABOUT US</Link>
            </li>
            <li>
              <Link href="#our-team">TEAM</Link>
            </li>
            <li>
              <Link href="/partners">PARTNERS</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link href="#">OUR WORK</Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/Projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="/Impact">IMPACT</Link>
            </li>
            <li>
              <Link href="/Approach">APPROACH</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link href="#">MEDIA</Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/news-updates">NEWS & UPDATES</Link>
            </li>
            <li>
              <Link href="/gallery">GALLERY</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link href="#">PUBLICATIONS</Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/reports">REPORTS</Link>
            </li>
            <li>
              <Link href="/resources">RESOURCES</Link>
            </li>
            <li>
              <Link href="/policy-papers">POLICY PAPERS</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/jobs">JOB/TENDERS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT US</Link>
        </li>
        <li className={styles.donate}>
          <Link href="/donate">DONATE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
