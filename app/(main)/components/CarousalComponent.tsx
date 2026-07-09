"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./styles/CarousalComponent.module.css";
import { SliderData } from "./SliderData";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const AUTO_PLAY_DELAY = 5000;

const CarousalComponent = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

const router = useRouter();
  const length = SliderData.length;

  // Wrapped in useCallback to prevent stale closure bugs in Event Listeners
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Autoplay Effect
  useEffect(() => {
    if (paused || length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, [paused, length, nextSlide]);

  // Keyboard Navigation Effect with Input Field Guardrail
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return; // Don't trigger if user is typing
      }

      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!SliderData.length) return null;

  return (
    <section
      className={styles.hero}
      role="region"
      aria-label="Travel destinations slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SliderData.map((slide, index) => (
        <div
          key={slide.image}
          className={`${styles.slide} ${index === current ? styles.active : ""
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className={styles.image}
          />

          <div className={styles.overlay} />

          <div className={styles.content}>
            {/* Dynamic data from SliderData used everywhere */}
            {slide.badge && (
              <span className={styles.badge}>{slide.badge}</span>
            )}

            <h1 className={styles.title}>{slide.title}</h1>

            <p className={styles.subtitle}>{slide.subtitle}</p>

            <div className={styles.actions}>
              {slide.primaryBtnText && (
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => router.push(slide.link)}
                >
                  {slide.primaryBtnText}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <MdArrowBackIosNew />
      </button>

      <button
        type="button"
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <MdArrowForwardIos />
      </button>

      <div className={styles.dots}>
        {SliderData.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.dot} ${current === index ? styles.activeDot : ""
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CarousalComponent;