"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { TravelExperience } from "../../../types/travel";
import { FiImage, FiPlayCircle } from "react-icons/fi";

import { useState } from "react";
interface Props {
  blog: TravelExperience;
}


function getYoutubeId(url: string) {
  const regExp =
    /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

  const match = url.match(regExp);

  return match && match[1].length === 11 ? match[1] : "";
}
export default function Gallery({ blog }: Props) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <span>TRAVEL GALLERY</span>

        <h2>Journey Through Every Day</h2>

        <p>
          Every destination tells a different story.
          Explore the memorable moments captured
          throughout the journey.
        </p>
      </div>

      {blog.gallery.map((day) => (
        <article
          key={day.day}
          className={styles.day}
        >
          <div className={styles.dayHeader}>

            <div className={styles.dayBadge}>
              Day {String(day.day).padStart(2, "0")}
            </div>

            <div>

              <h3>{day.title}</h3>

              <p>{day.description}</p>

            </div>

          </div>

          <div className={styles.grid}>

            {day.media.map((item, index) => (
              <div
                key={index}
                className={styles.card}
              >
                {
                  item.type === "image" ? (
                    <>
                      <Image
                        src={item.url}
                        alt={item.caption || ""}
                        fill
                        className={styles.image}
                      />

                      <div className={styles.overlay}>
                        <FiImage size={18} />
                        <span>{item.caption}</span>
                      </div>
                    </>
                  ) : (
                    playingVideo === item.url ? (
                      <iframe
                        className={styles.video}
                        src={`https://www.youtube.com/embed/${getYoutubeId(item.url)}?autoplay=1`}
                        title={item.caption}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className={styles.videoCard}
                        onClick={() => setPlayingVideo(item.url)}
                      >
                        <FiPlayCircle size={48} />
                        <span>{item.caption}</span>
                        <small>Click to play</small>
                      </div>
                    )
                  )
                }
              </div>
            ))}

          </div>

        </article>
      ))}

    </section>
  );
}