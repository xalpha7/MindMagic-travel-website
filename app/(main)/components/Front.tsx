import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import styles from "./styles/Front.module.css";

const Front: React.FC = () => {
  return (
    <>
      <Navbar />

      <section
        className={styles.hero}
        role="banner"
        aria-label="Welcome to MindMagic"
      >
        {/* Background Overlay */}
        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.badge}>
              ✈ Travel • Explore • Discover
            </span>

            <h1 className={styles.title}>
              MindMagic{" "}
              <span className={styles.titleAccent}>
                Travel Blogs
              </span>
            </h1>

            <p className={styles.subtitle}>
              Let's go where the mind leads us. Discover hidden destinations,
              unforgettable adventures, and stories that inspire your next
              journey.
            </p>

            <div className={styles.actions}>
              
              <Link
                href="/blog"
                className={styles.primaryBtn}
                aria-label="Explore travel blogs"
              >
                Explore Blogs
              </Link>

            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Front;