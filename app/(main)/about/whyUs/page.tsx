import PageHeading from "../../components/PageHeading";
import styles from "./page.module.css";


const whyChooseUs = [
    {
        icon: "🌍",
        title: "Trusted Travel Experts",
        description:
            "Our experienced travel consultants help you plan every trip with care and attention to detail.",
    },
    {
        icon: "✈️",
        title: "Complete Travel Solutions",
        description:
            "From flights and hotels to sightseeing and transportation, everything is managed in one place.",
    },
    {
        icon: "💰",
        title: "Transparent Pricing",
        description:
            "No hidden charges. We provide clear pricing and the best value for every journey.",
    },
    {
        icon: "🛡️",
        title: "Safe & Reliable",
        description:
            "We work with trusted partners to ensure your travel experience is comfortable and worry-free.",
    },
    {
        icon: "🗺️",
        title: "Customized Packages",
        description:
            "Every traveler is unique, so we create personalized itineraries that match your interests.",
    },
    {
        icon: "☎️",
        title: "Dedicated Support",
        description:
            "Our team is always ready to assist you before, during, and after your trip.",
    },
];

export default function WhyUs() {

    return (
        <section className={"pageSection"}>
            <PageHeading title={"WHY CHOOSE US"} subtitle={"Travel With Confidence"} />

            <div className={"cardGrid"}>
                {whyChooseUs.map((item) => (
                    <article
                        key={item.title}
                        className={"card"}
                    >
                        <div className={"appIcon"}>
                            {item.icon}
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}