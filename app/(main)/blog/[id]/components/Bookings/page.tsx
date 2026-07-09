import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import {
  FiCalendar,
  FiCreditCard,
} from "react-icons/fi";

interface Props {
  blog: TravelExperience;
}

export default function Booking({ blog }: Props) {
  return (
    <section className={styles.booking}>

      <span>READY TO EXPLORE?</span>

      <h2>{blog.title}</h2>

      <p>
        Start planning your unforgettable journey
        today. Choose your preferred package and
        experience the best of {blog.city}.
      </p>

      <div className={styles.info}>

        <div>
          <FiCalendar size={20} />
          <span>{blog.booking.duration}</span>
        </div>

        <div>
          <FiCreditCard size={20} />
          <span>
            {blog.booking.estimatedBudget.currency}
            {" "}
            {blog.booking.estimatedBudget.amount}
          </span>
        </div>

      </div>

      <button>
        Book Your Trip
      </button>

    </section>
  );
}