import styles from "./page.module.css";


const contactInfo = [
    { icon: "📍", title: "Office Address", value: "Bhubaneswar, Odisha, India" },
    { icon: "📞", title: "Phone", value: "+91 98765 43210" },
    { icon: "✉️", title: "Email", value: "info@mindmagictravels.com" },
    { icon: "🕒", title: "Working Hours", value: "Mon - Sat | 9:00 AM - 7:00 PM" },
];


export default function ContactInfo() {
    return (
        <div className={styles.infoSection}>
            {contactInfo.map((item) => (
                <article key={item.title} className={styles.infoCard}>
                    <div className={"appIcon"}>{item.icon}</div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.value}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}