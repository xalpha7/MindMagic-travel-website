import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";

interface QuickInfoProps {
  blog: TravelExperience;
}

export default function QuickInfo({ blog }: QuickInfoProps) {
  const averageRating =
    blog.reviews.length > 0
      ? (
          blog.reviews.reduce((sum, review) => sum + review.rating, 0) /
          blog.reviews.length
        ).toFixed(1)
      : "N/A";

  const cards = [
    {
      title: "Destination",
      value: blog.city,
      subtitle: blog.country,
      icon: "📍",
    },
    {
      title: "Duration",
      value: blog.booking.duration,
      subtitle: "Complete Trip",
      icon: "🗓️",
    },
    {
      title: "Budget",
      value: `${blog.booking.estimatedBudget.currency} ${blog.booking.estimatedBudget.amount}`,
      subtitle: "Estimated",
      icon: "💶",
    },
    {
      title: "Best Season",
      value: blog.booking.bestSeason,
      subtitle: "Recommended",
      icon: "🌤️",
    },
    {
      title: "Packages",
      value: blog.booking.availablePackages.length.toString(),
      subtitle: blog.booking.availablePackages.join(" • "),
      icon: "🎒",
    },
    {
      title: "Rating",
      value: averageRating,
      subtitle: `${blog.reviews.length} Review(s)`,
      icon: "⭐",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>

            <div>
              <span className={styles.label}>{card.title}</span>

              <h3 className={styles.value}>{card.value}</h3>

              <p className={styles.subtitle}>{card.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}