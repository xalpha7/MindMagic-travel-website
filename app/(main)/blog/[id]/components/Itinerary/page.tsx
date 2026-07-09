import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import {
  FiSunrise,
  FiSun,
  FiMoon,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

interface Props {
  blog: TravelExperience;
}

const sections = [
  {
    key: "morning",
    title: "Morning",
    icon: FiSunrise,
  },
  {
    key: "afternoon",
    title: "Afternoon",
    icon: FiSun,
  },
  {
    key: "evening",
    title: "Evening",
    icon: FiMoon,
  },
] as const;

export default function Itinerary({ blog }: Props) {
  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <span>ITINERARY</span>

        <h2>Daily Travel Plan</h2>

        <p>
          Follow the complete day-by-day schedule
          to make the most of your journey.
        </p>
      </div>

      <div className={styles.timeline}>

        {blog.itinerary.map((day) => (
          <article
            key={day.day}
            className={styles.day}
          >
            <div className={styles.dayNumber}>
              {String(day.day).padStart(2, "0")}
            </div>

            <div className={styles.content}>

              <h3>{day.title}</h3>

              {sections.map((section) => {
                const activities =
                  day.activities[section.key];

                if (!activities.length) return null;

                const Icon = section.icon;

                return (
                  <div
                    key={section.key}
                    className={styles.period}
                  >
                    <div className={styles.periodTitle}>
                      <Icon size={20} />

                      <h4>{section.title}</h4>
                    </div>

                    {activities.map((activity, index) => (
                      <div
                        key={index}
                        className={styles.activity}
                      >
                        <div className={styles.time}>
                          <FiClock size={15} />

                          <span>{activity.time}</span>
                        </div>

                        <h5>{activity.title}</h5>

                        <p>{activity.description}</p>

                        {activity.location && (
                          <div className={styles.location}>
                            <FiMapPin size={15} />

                            <span>
                              {activity.location}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </article>
        ))}

      </div>

    </section>
  );
}