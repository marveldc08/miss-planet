'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Import CSS module for styling
import { BsList } from "react-icons/bs";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   // Add a scroll event listener to the window
   useEffect(() => {
     const handleScroll = () => {
       // Check if the scroll position is greater than 50 pixels
       if (window.scrollY > 50) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };
    
     window.addEventListener("scroll", handleScroll);

     // Cleanup the event listener when the component unmounts
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);


  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolledHeader : ""}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/img/mp-logo.png"
              alt="Logo"
              width={160}
              height={110}
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${isScrolled ? styles.navLinkDark : styles.navLink} `}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`${isScrolled ? styles.navLinkDark : styles.navLink} `}
          >
            Products
          </Link>
          <Link
            href="/gallery"
            className={`${isScrolled ? styles.navLinkDark : styles.navLink} `}
          >
            Gallery
          </Link>

          <Link
            href="/about"
            className={`${isScrolled ? styles.navLinkDark : styles.navLink} `}
          >
            About Us
          </Link>
          <Link href="/contact" className={styles.contactUsButton}>
            Contact Us
          </Link>
        </nav>
        {/* Mobile Menu Toggle */}
        <div className={styles.mobileToggle}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={styles.menuButton}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isDropdownOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink}>
            Home
          </Link>
          <Link href="/products" className={styles.mobileLink}>
            Products
          </Link>
          <Link href="/gallery" className={styles.mobileLink}>
            Gallery
          </Link>
          <Link href="/about" className={styles.mobileLink}>
            About Us
          </Link>
          <Link href="/contact" className={styles.mobileLink}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
