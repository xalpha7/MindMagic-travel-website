import React from "react";
import Link from "next/link";
import styles from "./styles/Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1: Brand Intro */}
        <div className={styles.brandColumn}>
          <h2 className={styles.logo}>MindMagic</h2>
          <p className={styles.tagline}>
            Let's go where the mind leads us. Crafting guides, sharing stories, and inspiring your next passport stamp.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Threads">🧵</a>
            <a href="#" aria-label="Pinterest">📌</a>
            <a href="#" aria-label="YouTube">📺</a>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className={styles.linkColumn}>
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.list}>
            <li><Link href="/blogs">All Blogs</Link></li>
            <li><Link href="/stories">Travel Stories</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/guides">Travel Guides</Link></li>
          </ul>
        </div>

        {/* Column 3: Company / Legal */}
        <div className={styles.linkColumn}>
          <h3 className={styles.heading}>MindMagic</h3>
          <ul className={styles.list}>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/contact">Work With Us</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar: Copyright and Attribution */}
      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} MindMagic Travel Blogs. All rights reserved.</p>
        <p className={styles.crafted}>Designed for modern explorers.</p>
      </div>
    </footer>
  );
};

export default Footer;