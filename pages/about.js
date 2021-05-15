import Head from 'next/head'
const About = () => {
    return ( 
        <>
        <Head>
            <title>Mindmagic Travel blogs | About</title>
        </Head>
        <div className="about">
            <span className="about-items">Website Created by</span>  
            <span className="about-items">Anurag Pattnayak</span>  
            <span className="about-items">created in NEXT.JS</span> 
        </div>
        </>
     );
}
 
export default About;