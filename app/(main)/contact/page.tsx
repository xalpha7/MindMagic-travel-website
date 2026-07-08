
import styles from "./page.module.css";
import PageBanner from "../components/PageBanners";
import PageHeading from "../components/PageHeading";
import ContactInfo from "./ContactInfo/page";
import ContactForm from "./ContactForm/page";



export default function Contact() {
    return (
        <main className={"appPage"}>
            <PageBanner pagetitle={"Contact us"} />
            <section className={"pageSection"}>
                 <PageHeading title={"GET IN TOUCH"} subtitle={"Let's Start Planning Your Journey"} />

                <div className={styles.contactGrid}>
                   <ContactInfo />
                   <ContactForm />
                </div>
            </section>
        </main>
    );
}