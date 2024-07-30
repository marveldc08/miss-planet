// components/Footer.js

import React from "react";
import styles from "./Footer.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

     const emailAddress = "mpcollectible2022@gmail.com";
     const subject = "Enquiry";
     const body = "Hello Miss Planet, I would like to make enquiries on...";

     const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
       subject
     )}&body=${encodeURIComponent(body)}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Image
            src={"/img/mp-logo-lit.jpeg"}
            style={{ borderRadius: "17px" }}
            width={300}
            height={200}
            alt="logo"
          />
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Contact Info</h4>
          <p>
            <b>Address:</b> No, 4 saliu close off odebiyi Street, Haruna, Ogba.
          </p>
          <p>
            <b>Email:</b> mpcollectible2022@gmail.com
          </p>
          <p>
            <b>Whatsapp:</b> 08135705904
          </p>
        </div>
        <div className={styles.column}>
          <div>
            <h4 className={styles.heading}>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nec metus et turpis luctus congue.
            </p>
          </div>
          <h4 className={styles.heading}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <Link href={"https://wa.me/2348135705904"}>
              <IoLogoWhatsapp
                className={styles.icon}
                style={{ color: "#128c7e" }}
              />
              08135705904
            </Link>
            <Link
              href={
                "https://www.facebook.com/missplanetconcepts?mibextid=ZbWKwL"
              }
            >
              <FaFacebook
                className={styles.icon}
                style={{ color: "#1877f2" }}
              />
              @Miss Planet Concept
            </Link>
            <Link
              href={
                "https://www.instagram.com/missplanetconcepts?igsh=MXN3azJ4MWNydGhwMg=="
              }
            >
              <AiFillInstagram
                className={styles.icon}
                style={{ color: "#c13584" }}
              />
              @missplanetconcepts
            </Link>
            <Link href={mailtoLink}>
              <BiLogoGmail
                className={styles.icon}
                style={{ color: "#f32323" }}
              />
              mpcollectible2022@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
