import Image from "next/image";
import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import PageHeading from "@/app/(main)/components/PageHeading";

interface Props {
  blog: TravelExperience;
}

export default function Overview({ blog }: Props) {
  return (
    <section className={styles.section}>

      <div className={styles.left}>


        <PageHeading
          title="ABOUT THIS JOURNEY"
          subtitle={`Discover ${blog.city}, ${blog.country}`}
        />
        <p>{blog.description}</p>

        <div className={styles.highlights}>

          <div className={styles.highlight}>
            {blog.booking.duration}
          </div>

          <div className={styles.highlight}>
            {blog.attractions.length} Attractions
          </div>

          <div className={styles.highlight}>
            {blog.hotels.length} Hotel
          </div>

          <div className={styles.highlight}>
            {blog.food.length} Food Experience
          </div>

          <div className={styles.highlight}>
            {blog.gallery.length} Gallery Days
          </div>

          <div className={styles.highlight}>
            {blog.itinerary.length} Itinerary Days
          </div>

        </div>

      </div>

      <div className={styles.right}>

        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          priority={false}
          className={styles.image}
        />

      </div>

    </section>
  );
}