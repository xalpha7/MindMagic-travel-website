import styles from "./styles/PageHeading.module.css";

interface PageHeadingProps{
    title : String;
    subtitle: String;
}


export default function PageHeading({ title, subtitle }: PageHeadingProps) {
    return (
        <div className={styles.pageHeading}>
            <span>{title}</span>
            {/* <span>WHO WE ARE</span> */}
            <h2>{subtitle}</h2>
            {/* <h2>Your Trusted Travel Partner</h2> */}
        </div>
    );
}