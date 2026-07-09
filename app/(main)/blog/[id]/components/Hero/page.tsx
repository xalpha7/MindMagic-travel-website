import Image from "next/image";
import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";

interface HeroProps {
  blog: TravelExperience;
}

export default function Hero({ blog }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={blog.thumbnail}
        alt={blog.title}
        fill
        priority
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.badges}>
          <span>{blog.country}</span>
          <span>{blog.city}</span>
        </div>

        <h1>{blog.title}</h1>

        <p>{blog.shortDescription}</p>

        <div className={styles.stats}>
          <div className={styles.card}>
            <h4>Duration</h4>
            <span>{blog.booking.duration}</span>
          </div>

          <div className={styles.card}>
            <h4>Budget</h4>
            <span>
              {blog.booking.estimatedBudget.currency}{" "}
              {blog.booking.estimatedBudget.amount}
            </span>
          </div>

          <div className={styles.card}>
            <h4>Best Season</h4>
            <span>{blog.booking.bestSeason}</span>
          </div>

          <div className={styles.card}>
            <h4>Packages</h4>
            <span>{blog.booking.availablePackages.length}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={"primary"}>
            Book Tour
          </button>
        </div>
      </div>
    </section>
  );
}