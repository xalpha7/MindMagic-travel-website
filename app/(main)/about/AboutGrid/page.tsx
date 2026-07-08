import PageHeading from "../../components/PageHeading";
import Image from "next/image";
import styles from "./page.module.css";
import { APP_NAME } from "@/constants";



export default function AboutGrid() {
    return (
        <section className={"pageSection"}>
            <PageHeading title={"WHO WE ARE"} subtitle={"Your Trusted Travel Partner"} />

            <div className={styles.aboutGrid}>
                <div className={styles.aboutImage}>
                    <Image
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
                        alt="Travelers exploring a destination"
                        fill
                    />
                </div>

                <div className={styles.aboutContent}>
                    <h3>Welcome to {APP_NAME}</h3>

                    <p>
                        At {APP_NAME}, we believe every journey is an opportunity
                        to create unforgettable memories. Whether you dream of relaxing
                        beaches, majestic mountains, cultural experiences, or exciting
                        adventures, our team is dedicated to planning seamless travel
                        experiences tailored to your needs.
                    </p>

                    <p>
                        From the moment you decide to travel until you return home, we
                        take care of every detail, allowing you to focus on enjoying your
                        journey with confidence and peace of mind.
                    </p>
                </div>
            </div>
        </section>
    );
}