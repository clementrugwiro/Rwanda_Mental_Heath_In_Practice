import { useState, useEffect } from "react";
import styles from "./LandingHome.module.scss";
import Link from "next/link";

const images = [
  "/images/LandingHome/image.png",
  "/images/LandingHome/image1.png",
  "/images/LandingHome/image2.png",
];

const LandingHome = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Clean up on component unmount
    }, []); 
  return (
    <section className={styles.LandingHome}>
      <div className={styles.imageContainer}>
        <img
          src={images[currentImageIndex]}
          alt={`Feature Image ${currentImageIndex + 1}`}
        />
        <div className={styles.dotContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2>Your Heading</h2>
        <p>
          Your text content goes here. You can describe your feature, service,
          or anything relevant.
        </p>
        <Link href="/donate" className={styles.donateButton}>
          DONATE
        </Link>
      </div>
    </section>
  );
};

export default LandingHome;
