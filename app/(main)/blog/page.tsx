import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { BiPaperPlane } from "react-icons/bi";

import { blogs } from "./data/blogs";
import PageBanner from "../components/PageBanners";
import PageHeading from "../components/PageHeading";
type Blog = {
    id: number;
    title: string;
    img7: string;
    // add other fields from your JSON as needed
};



const BlogPage = () => {
    return (
        <main className={"appPage"}>
            <PageBanner pagetitle={"Blogs"} />
           
            <section className={"pageSection"}>
                <PageHeading
                    title="Travel Stories & Guides"
                    subtitle="Inspiration for every journey."
                />
                <div className={styles.destinationcontainer}>
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className={styles.linkbox}
                        >
                            <Link
                                href={`/blog/${blog.id}`}
                                className={styles.cardLink}
                            >
                                <div className={styles.imgbox}>
                                    <Image
                                        src={blog.thumbnail}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className={styles.linkboxclick}>
                                    <h2>{blog.title}</h2>

                                    <BiPaperPlane className={styles.i} />
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default BlogPage;