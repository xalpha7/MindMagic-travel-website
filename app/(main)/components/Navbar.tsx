"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MdMenu,
  MdClose,
  MdHome,
  MdTravelExplore,
  MdInfo,
  MdMail,
  MdChevronRight,
} from "react-icons/md";

import styles from "./styles/Navbar.module.css";
import { APP_NAME } from "@/constants";

interface NavigationItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
    icon: <MdHome />,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <MdTravelExplore />,
  },
  {
    href: "/about",
    label: "About",
    icon: <MdInfo />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <MdMail />,
  },
];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, [closeMenu]);

  return (
    <>
      <header className={styles.header}>
        <nav
          className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""
            }`}
          aria-label="Primary navigation"
        
        >
          <Link
            href="/"
            className={styles.logo}
            onClick={closeMenu}
          >
            <Image
              src="/tent.png"
              alt={APP_NAME}
              width={46}
              height={46}
              priority
            />

            <span
              className={`${styles.logoText} ${isScrolled ? styles.logoTextScrolled : ""
                }`}
            >
              {APP_NAME}
            </span>
          </Link>

          <div className={styles.desktopNavigation}>
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navigationLink} ${isScrolled ? styles.navigationLinkScrolled : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className={`${styles.menuButton} ${isScrolled ? styles.menuButtonScrolled : ""
              }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </nav>
      </header>

      {/* Backdrop */}

      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""
          }`}
        onClick={closeMenu}
      />

      {/* Bottom Sheet */}

      <aside
        className={`${styles.bottomSheet} ${isOpen ? styles.bottomSheetOpen : ""
          }`}
      >
        <div className={styles.dragHandle} />

        <div className={styles.mobileNavigation}>
          {NAVIGATION_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={styles.mobileLink}
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              <div className={styles.mobileLeft}>
                <span className={styles.mobileIcon}>
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </div>

              <MdChevronRight />
            </Link>
          ))}
        </div>

        <Link
          href="/destination"
          className={styles.ctaButton}
          onClick={closeMenu}
        >
          Explore Destinations
        </Link>
      </aside>
    </>
  );
}