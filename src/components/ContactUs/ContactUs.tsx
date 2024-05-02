import React from 'react'
import styles from './ContactUs.module.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';
import ReviewForm from '../ReviewForm/ReviewForm';

const ContactUs = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactHead}>
          <h2>Contact Us</h2>
          <p>
            Reach out to us to place special orders, make enquires and also a
            leave your comments , suggestions or feedbacks. Here at Miss Planet
            Collectables, we are at your service always.
          </p>
        </div>
        <div className={styles.contactBody}>
          <div className={styles.contactSocials}>
            <Image src={"/img/blob2.png"} width={450} height={250} alt="blob" />
            <h2>Reach Us on Our Social Platforms</h2>
            <h6>We are just a click away</h6>
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
          <div className={styles.contactForm}>
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs