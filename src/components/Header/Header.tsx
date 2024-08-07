'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css"; // Import CSS module for styling
import { BsList } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Header = () => {
    const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeLink, setActiveLink] = useState('')

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

   const pathName = usePathname();


   useEffect(() => {
    setActiveLink(pathName)
   }, [pathName])


  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolledHeader : ""}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={`${styles.logo} ${!isScrolled && styles.logoBg}`}>
          <Link href="/">
            <Image
              src="/img/mp-logo.png"
              alt="Logo"
              width={110}
              height={60}
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${
              isScrolled ? styles.navLinkDark : styles.navLink
            }           
            ${activeLink === "/" ? styles.active : ""} `}
          >
            Home
          </Link>
          <Link
            href="/catalogue"
            id="productServicesId"
            className={`${isScrolled ? styles.navLinkDark : styles.navLink} ${
              activeLink === "/catalog" ? styles.active : ""
            } `}
          >
            Catalogue
          </Link>
          <Link
            href="/gallery"
            className={`${isScrolled ? styles.navLinkDark : styles.navLink} ${
              activeLink === "/gallery" ? styles.active : ""
            }  `}
          >
            Gallery
          </Link>

          <Link
            href="/about"
            className={`${isScrolled ? styles.navLinkDark : styles.navLink} ${
              activeLink === "/about" ? styles.active : ""
            } `}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={` ${styles.contactUsButton} ${
              activeLink === "/contact" ? styles.activeContact : ""
            }`}
          >
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
          <button
            className={styles.mobileLink}
            onClick={() => (setIsDropdownOpen(!isDropdownOpen), router.push("/"))}
          >
            Home
          </button>
          <button onClick={() => (setIsDropdownOpen(!isDropdownOpen), router.push("/catalogue"))} className={styles.mobileLink}>
            Catalogue
          </button>
          <button onClick={() => (setIsDropdownOpen(!isDropdownOpen), router.push("/gallery"))} className={styles.mobileLink}>
            Gallery
          </button>
          <button onClick={() => (setIsDropdownOpen(!isDropdownOpen), router.push("/about"))} className={styles.mobileLink}>
            About Us
          </button>
          <button onClick={() => (setIsDropdownOpen(!isDropdownOpen), router.push("/contact"))} className={styles.mobileLink}>
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
