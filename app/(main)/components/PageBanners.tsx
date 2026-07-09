import Image from "next/image";
import styles from "./styles/PageBanner.module.css";
import { APP_NAME, PAGE_BANNER_IMG } from "@/constants";

interface PageBannerProps{
    pagetitle : string;
    img? : string;
}


const PageBanner: React.FC<PageBannerProps> = ({pagetitle, img =  PAGE_BANNER_IMG,}) => {
    const currentYear = new Date().getFullYear();

    return (
        <section className={styles.hero}>
            <Image
                src={img}
                alt={APP_NAME}
                fill
                priority
                className={styles.heroImage}
            />

            <div className={styles.overlay} />

            <div className={styles.heroContent}>
                <div className={styles.companyInfo}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=300&q=80"
                            alt={APP_NAME}
                            width={120}
                            height={120}
                            className={styles.companyLogo}
                        />
                    </div>

                    <div className={styles.companyText}>
                        <h1>{pagetitle}</h1>
                        <p>{APP_NAME}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;