import Image from "next/image";
import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import {
  FiMapPin,
  FiFlag,
  FiNavigation,
} from "react-icons/fi";
interface Props {
  blog: TravelExperience;
}

export default function Route({ blog }: Props) {
  const points = [
    {
      ...blog.route.source,
      type: "source",
    },
    ...blog.route.stops.map((stop) => ({
      ...stop,
      type: "stop",
    })),
    {
      ...blog.route.destination,
      type: "destination",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span>JOURNEY ROUTE</span>

        <h2>Travel Path</h2>

        <p>
          Follow the complete route from your arrival
          to the final destination.
        </p>
      </div>

      <div className={styles.timeline}>
        {points.map((point, index) => (
          <div
            key={point.id}
            className={styles.item}
          >
            <div className={styles.left}>
              <div className={styles.icon}>
                {point.type === "source" && (
                  <FiNavigation size={20} />
                )}

                {point.type === "stop" && (
                  <FiMapPin size={20} />
                )}

                {point.type === "destination" && (
                  <FiFlag size={20} />
                )}
              </div>

              {index !== points.length - 1 && (
                <span className={styles.line} />
              )}
            </div>

            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={point.media[0].url}
                  alt={point.name}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3>{point.name}</h3>

                <p>{point.description}</p>

                <div className={styles.activities}>
                  {point.activities.map((activity) => (
                    <span key={activity}>
                      {activity}
                    </span>
                  ))}
                </div>

                <div className={styles.coords}>
                  {point.coordinates.latitude.toFixed(4)},
                  {" "}
                  {point.coordinates.longitude.toFixed(4)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}