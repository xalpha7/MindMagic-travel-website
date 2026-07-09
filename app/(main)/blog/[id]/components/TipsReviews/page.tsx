import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import {
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

interface Props {
  blog: TravelExperience;
}

export default function TipsReviews({ blog }: Props) {
  return (
    <section className={styles.section}>
      {/* Tips */}

      <div className={styles.column}>
        <div className={styles.header}>
          <span>TRAVEL TIPS</span>
          <h2>Travel Smart</h2>
        </div>

        <div className={styles.tips}>
          {blog.tips.map((tip) => (
            <article
              key={tip.title}
              className={styles.tip}
            >
              <FiCheckCircle
                size={22}
                className={styles.icon}
              />

              <div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reviews */}

      <div className={styles.column}>
        <div className={styles.header}>
          <span>REVIEWS</span>
          <h2>Traveler Experiences</h2>
        </div>

        <div className={styles.reviews}>
          {blog.reviews.map((review, index) => (
            <article
              key={index}
              className={styles.review}
            >
              <div className={styles.reviewTop}>
                <h3>{review.userName}</h3>

                <div className={styles.rating}>
                  {Array.from({
                    length: review.rating,
                  }).map((_, i) => (
                    <FiStar
                      key={i}
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p>{review.comment}</p>

              <span>{review.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}