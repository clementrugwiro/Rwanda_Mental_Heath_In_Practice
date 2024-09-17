import { useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the hamburger and close icons

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
        <FaBars />
      </div>
      <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""}`}>
        {isMobileMenuOpen && (
          <div className={styles.closeIcon} onClick={toggleMobileMenu}>
            <FaTimes />
          </div>
        )}
        <li>
          <Link href="/">HOME</Link>
        </li>
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
              <Link href="/NewsUpdates">NEWS & UPDATES</Link>
            </li>
            <li>
              <Link href="/Gallery">GALLERY</Link>
            </li>
            <li>
              <Link href="/Blog">BLOG</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link href="#">PUBLICATIONS</Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/Reports">REPORTS</Link>
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
          <Link href="/JobsTenders">JOB/TENDERS</Link>
        </li>
        <li>
          <Link href="/ContactUs">CONTACT US</Link>
        </li>
        <li className={styles.donate}>
          <Link href="/donate">DONATE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
