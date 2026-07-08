import { APP_NAME } from "@/constants";
import styles from "./page.module.css";

export default function CtaComponent(){
    return (
        <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <h2>Let's Plan Your Next Adventure</h2>

                    <p>
                        Discover beautiful destinations, create unforgettable memories, and
                        travel with confidence alongside {APP_NAME}.
                    </p>

                    <button
                        type="button"
                        className={styles.ctaButton}
                    >
                        Contact Us
                    </button>
                </div>
            </section>
    );
}