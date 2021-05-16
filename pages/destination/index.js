import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Destination.module.css'
import { BiPaperPlane } from 'react-icons/bi'
import Media from 'react-media'
import { Fragment } from 'react';

export const getStaticProps = async () => {

    const res = await fetch('https://my-json-server.typicode.com/xalpha7/Mindmagic-blog-db/db/blogs');

    const data = await res.json();

    return {
        props: {
            blogs: data
        }
    }

}

const Destination = ({ blogs }) => {

    return (
        <>
            <Head>
                <title>MindMagic Travel Blogs | Destination</title>
            </Head>
            <h1 className={styles.mainhead}>Popular Destination</h1>
            <div className={styles.destinationcontainer}>
                {
                    blogs.map(blog => (
                        <div className={styles.linkbox}>
                            <div className={styles.imgbox}>
                                <img src={blog.img7} alt="" />
                            </div>
                            <div className={styles.linkboxclick}>
                                <Link href={'/destination/' + blog.id} key={blog.id} >
                                    <a>
                                        <h2>{blog.title}</h2>
                                        <BiPaperPlane className={styles.i}/>

                                    </a>
                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Destination;