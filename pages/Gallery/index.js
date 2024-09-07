import styles from "./Gallery.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const galleryImages = [
  { src: "/images/gallery/gallery1.jpg", alt: "Community Event" },
  { src: "/images/gallery/gallery2.jpg", alt: "Vocational Training Session" },
  { src: "/images/gallery/gallery3.jpg", alt: "New Project Site" },
  { src: "/images/gallery/gallery4.jpg", alt: "Volunteer Team" },
  { src: "/images/gallery/gallery5.jpg", alt: "Local Partnership Meeting" },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className={styles.galleryPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Gallery</h1>
        <p>
          Explore the moments captured from our projects, events, and community
          interactions.
        </p>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
