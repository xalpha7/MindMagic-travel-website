import PageHeading from "../../components/PageHeading";
import styles from "./page.module.css";

const promises = [
    "Personalized Travel Planning",
    "Trusted Travel Partners",
    "Quality Service",
    "Transparent Pricing",
    "Memorable Experiences",
    "Customer Satisfaction",
];
export default function OurPromises() {

    return (
         <section className={"pageSection"}>
                <div className={styles.promise}>
                    <PageHeading title={"OUR PROMISE"} subtitle={"What You Can Expect"} />

                    <div className={"cardGrid"}>
                        {promises.map((item) => (
                            <div
                                key={item}
                                className={styles.promiseItem}
                            >
                                <span>✓</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}