import styles from '../../styles/Destination.module.css'
import Link from 'next/link'
import { BiFullscreen } from 'react-icons/bi'



export const getStaticPaths = async () => {
    const res = await fetch('https://my-json-server.typicode.com/xalpha7/Mindmagic-blog-db/blogs');
    console.log(res)
    const data = await res.json();

    const paths = data.map(blog => {
        return {
            params: { id: blog.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {

    const id = context.params.id;

    const res = await fetch('https://my-json-server.typicode.com/xalpha7/Mindmagic-blog-db/blogs' + id);

    const data = await res.json();

    return {
        props: {
            blogdetails: data
        }
    }

}


const Details = ({ blogdetails }) => {
    const img1 = {
        
        background: 'url(' + blogdetails.img1 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover'

    }
    const img2 = {
        background: 'url(' + blogdetails.img2 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover'

    }
    const img3 = {
        background: 'url(' + blogdetails.img3 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover',
        backgroundPositionY: "-55px"

    }
    const img4 = {
        background: 'url(' + blogdetails.img4 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover'

    }
    const img5 = {
        background: 'url(' + blogdetails.img5 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover'

    }
    const img6 = {
        background: 'url(' + blogdetails.img6 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover'

    }
    const img7 = {
        background: 'url(' + blogdetails.img7 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover',
        backgroundPositionY: "-55px"

    }
    const img8 = {
        background: 'url(' + blogdetails.img8 + ')',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center/cover'

    }
    return (
        <>
            <div className={styles.destinationdetails}>
                <h1>{blogdetails.title}</h1>
                <section className={styles.destination}>
                    <div className={styles.imgcont}>
                        <Link href={blogdetails.img1}>
                            <a style={img1} target="_blank" className={styles.img1}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                        <Link href={blogdetails.img2}>
                            <a style={img2} target="_blank" className={styles.img2}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                        <Link href={blogdetails.img3}>
                            <a style={img3} target="_blank" className={styles.img3}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                        <Link href={blogdetails.img4}>
                            <a style={img4} target="_blank" className={styles.img4}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                        <Link href={blogdetails.img5}>
                            <a style={img5} target="_blank" className={styles.img5}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                        <Link href={blogdetails.img6}>
                            <a style={img6} target="_blank" className={styles.img6}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                        <Link href={blogdetails.img7}>
                            <a style={img7} target="_blank" className={styles.img7}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                        <Link href={blogdetails.img8}>
                            <a style={img8} target="_blank" className={styles.img8}>
                                <i> <BiFullscreen /> </i>
                            </a>
                        </Link>
                    </div>
                </section>
                <p>{blogdetails.body}</p>
            </div>
        </>
    );
}

export default Details;