"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from "@/components/common/Button/Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navClassNames =
    `${styles.nav} ${isScrolled ? styles.scrolled : ""}`.trim();
  const linksClassNames =
    `${styles.links} ${isMenuOpen ? styles.linksActive : ""}`.trim();
  const hamburgerClassNames =
    `${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`.trim();

  return (
    <nav
      className={navClassNames}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className={styles.logo}
        aria-label="AndThen Travels — Home"
      >
        <Image
          src="/Assets/logo/logo.png"
          alt="ANDTHEN"
          width={120}
          height={23}
          priority
          className={styles.logoImage}
        />
        <span className={styles.logoSub}>travels</span>
      </Link>

      <div className={linksClassNames}>
        <Link href="/#destinations" onClick={closeMenu}>
          Destinations
        </Link>
        <Link href="/#itineraries" onClick={closeMenu}>
          Itineraries
        </Link>
        <Link href="/#hotels" onClick={closeMenu}>
          Places to stay
        </Link>
        <Link href="/#wellness" onClick={closeMenu}>
          Wellness
        </Link>
        <Link href="/#journal" onClick={closeMenu}>
          Journal
        </Link>
        <Link href="/#About" onClick={closeMenu}>
          About
        </Link>
      </div>

      <div className={styles.rightActions}>
        <a href="tel:+18000000000" className={styles.phoneLink}>
          +1 800 000 0000
        </a>
        <Button
          href="/contact/"
          variant="outline"
          onClick={closeMenu}
          className={styles.desktopCta}
        >
          Plan a journey
        </Button>
        <button
          className={hamburgerClassNames}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
