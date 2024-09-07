import styles from "./Blog.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const blogPosts = [
  {
    id: 1,
    title: "Empowering Communities Through Education",
    date: "September 1, 2024",
    excerpt:
      "Learn how our education programs are transforming communities and creating opportunities for the next generation...",
    image: "/images/blog/blog3.jpg",
  },
  {
    id: 2,
    title: "The Importance of Sustainable Development",
    date: "August 15, 2024",
    excerpt:
      "Sustainable development is key to ensuring long-term progress in our communities. Discover our approach and impact...",
    image: "/images/blog/blog2.jpg",
  },
  {
    id: 3,
    title: "Highlights from Our Recent Volunteer Program",
    date: "July 30, 2024",
    excerpt:
      "Our recent volunteer program was a huge success! Read about the amazing work done and the volunteers who made it possible...",
    image: "/images/blog/blog1.jpg",
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <div className={styles.blogPage}>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Blog</h1>
        <p>Stay updated with our latest news, insights, and stories.</p>
      </section>

      {/* Blog Posts Section */}
      <section className={styles.blogPostsSection}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogPost}>
            <div className={styles.imageContainer}>
              <img
                src={post.image}
                alt={post.title}
                className={styles.blogImage}
              />
            </div>
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>{post.title}</h2>
              <p className={styles.blogDate}>{post.date}</p>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className={styles.readMore}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
