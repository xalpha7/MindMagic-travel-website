"use client";

import AppButton from "../../components/AppButton";
import styles from "./page.module.css";


export default function ContactForm() {
    return (
        <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
            </div>

            <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
            </div>

            <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
            </div>

            <div className={styles.inputGroup}>
                <label>Destination</label>
                <input type="text" placeholder="Preferred destination" />
            </div>

            <div className={styles.inputGroupFull}>
                <label>Message</label>
                <textarea rows={5} placeholder="Tell us about your travel plans..." required />
            </div>
            <AppButton buttonText={"Enquire"} onClick={() => {
                alert("Form submitted");
            }} />


        </form>
    );
}