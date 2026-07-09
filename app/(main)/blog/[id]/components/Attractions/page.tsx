import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import {
  FiStar,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";


interface Props {
  blog: TravelExperience;
}

export default function Attractions({ blog }: Props) {
  return (
    <section className={styles.section}>

      <div className={styles.header}>

        <span>TOP ATTRACTIONS</span>

        <h2>Must Visit Places</h2>

        <p>
          Explore the most iconic landmarks,
          cultural sites and unforgettable
          experiences during your trip.
        </p>

      </div>

      <div className={styles.grid}>

        {blog.attractions.map((place) => (

          <article
            key={place.id}
            className={styles.card}
          >

            <div className={styles.imageWrapper}>

              <Image
                src={place.media[0].url}
                alt={place.name}
                fill
                className={styles.image}
              />

              <span className={styles.category}>
                {place.category}
              </span>

            </div>

            <div className={styles.body}>

              <div className={styles.rating}>

                <FiStar
                  size={16}
                  fill="currentColor"
                />

                <span>{place.rating}</span>

              </div>

              <h3>{place.name}</h3>

              <p>{place.description}</p>

              <Link
                href={`https://www.google.com/maps?q=${place.location.latitude},${place.location.longitude}`}
                target="_blank"
                className={styles.location}
              >

                <FiMapPin size={16} />

                <span>View Location</span>

                <FiArrowUpRight size={16} />

              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}