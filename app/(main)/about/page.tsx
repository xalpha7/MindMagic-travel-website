// page.tsx

import PageBanner from "../components/PageBanners";
import WhyUs from "./whyUs/page";
import OurServices from "./OurServices/page";
import OurMission from "./OurMission/page";
import OurPromises from "./OurPromises/page";
import AboutGrid from "./AboutGrid/page";
import CtaComponent from "./CtaComponent/page";





export default function AboutPage() {
    return (
        <main className={"appPage"}>
            <PageBanner pagetitle={"About us"} />
            <AboutGrid />
            <WhyUs />
            <OurServices />
            <OurMission />
            <OurPromises />
            <CtaComponent />
        </main>
    );
}