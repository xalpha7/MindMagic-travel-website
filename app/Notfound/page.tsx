"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiArrowLeft,
  FiCompass,
  FiHome,
} from "react-icons/fi";

import styles from "./page.module.css";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className={styles.page}>
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />

      <span className={styles.background404}>404</span>

      <section className={styles.card}>
        <div className={styles.icon}>
          <FiCompass />
        </div>

        <span className={styles.badge}>
          Lost your way?
        </span>

        <h1>Page Not Found</h1>

        <p>
          The page you're looking for may have been moved,
          deleted or the address may be incorrect.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            <FiHome />
            Back Home
          </Link>

          <button
            onClick={() => router.back()}
            className={styles.secondary}
          >
            <FiArrowLeft />
            Previous Page
          </button>
        </div>

        <small>
          Redirecting automatically in 5 seconds...
        </small>
      </section>
    </main>
  );
}