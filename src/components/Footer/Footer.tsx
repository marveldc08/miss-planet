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
          <p>123 Street Name, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={styles.column}>
          <div >
            <h4 className={styles.heading}>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nec metus et turpis luctus congue.
            </p>
          </div>
          <h4 className={styles.heading}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <Link href={"/"}>
              <IoLogoWhatsapp
                className={styles.icon}
                style={{ color: "#128c7e" }}
              />
            </Link>
            <Link href={"/"}>
              <FaFacebook
                className={styles.icon}
                style={{ color: "#1877f2" }}
              />
            </Link>
            <Link href={"/"}>
              <AiFillInstagram
                className={styles.icon}
                style={{ color: "#c13584" }}
              />
            </Link>
            <Link href={"/"}>
              <BiLogoGmail
                className={styles.icon}
                style={{ color: "#f32323" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
