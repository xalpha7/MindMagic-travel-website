import Image from "next/image";
import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import { FaHotel } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FiStar, FiCheck } from "react-icons/fi";
interface Props {
    blog: TravelExperience;
}

export default function HotelsFood({ blog }: Props) {
    return (
        <section className={styles.section}>

            <div className={styles.header}>

                <span>STAY & DINE</span>

                <h2>
                    Accommodation & Local Cuisine
                </h2>

            </div>

            <div className={styles.grid}>

                {/* Hotels */}

                <div className={styles.column}>

                    <div className={styles.title}>
                        <FaHotel size={22} />
                        <h3>Recommended Hotels</h3>
                    </div>

                    {blog.hotels.map((hotel) => (

                        <article
                            key={hotel.name}
                            className={styles.card}
                        >

                            <div className={styles.imageWrapper}>
                                <Image
                                    src={hotel.image}
                                    alt={hotel.name}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.body}>

                                <h4>{hotel.name}</h4>

                                <div className={styles.row}>

                                    <span>{hotel.category}</span>

                                    <span>
                                        <FiStar
                                            size={15}
                                            fill="currentColor"
                                        />
                                        {hotel.rating}
                                    </span>

                                </div>

                                <p>{hotel.priceRange}</p>

                            </div>

                        </article>

                    ))}

                </div>

                {/* Food */}

                <div className={styles.column}>

                    <div className={styles.title}>
                        <MdRestaurant size={22} />
                        <h3>Must Try Food</h3>
                    </div>

                    {blog.food.map((food) => (

                        <article
                            key={food.name}
                            className={styles.card}
                        >

                            <div className={styles.imageWrapper}>
                                <Image
                                    src={food.image}
                                    alt={food.name}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.body}>

                                <h4>{food.name}</h4>

                                <p>{food.description}</p>

                                <div className={styles.list}>

                                    {food.mustTry.map((item) => (

                                        <div
                                            key={item}
                                            className={styles.foodItem}
                                        >

                                            <FiCheck size={16} />

                                            <span>{item}</span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}