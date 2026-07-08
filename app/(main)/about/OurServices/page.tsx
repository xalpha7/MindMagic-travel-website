import PageHeading from "../../components/PageHeading";
import styles from "./page.module.css";
const services = [
    {
        icon: "✈️",
        title: "Flight Booking",
    },
    {
        icon: "🏨",
        title: "Hotel Booking",
    },
    {
        icon: "🛂",
        title: "Visa Assistance",
    },
    {
        icon: "🚗",
        title: "Transportation",
    },
    {
        icon: "🏝️",
        title: "Holiday Packages",
    },
    {
        icon: "💑",
        title: "Honeymoon Tours",
    },
    {
        icon: "👨‍👩‍👧",
        title: "Family Vacations",
    },
    {
        icon: "🎒",
        title: "Group Tours",
    },
];

export default function OurServices() {
    return (
        <section className="pageSection">
            <PageHeading
                title="OUR SERVICES"
                subtitle="Everything You Need For Your Journey"
            />

            <div className={styles.serviceGrid}>
                {services.map((service) => (
                    <div key={service.title} className={styles.serviceChip}>
                        <span className={styles.serviceIcon}>{service.icon}</span>
                        <span>{service.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );

}