'use client'
import React from 'react'
import styles from './contact.module.css'
import ContactUs from '../../components/ContactUs/ContactUs';

const page = () => {
  return (
    <div>
      <section className={styles.jumbotron}>
        <div className={styles.content}>
          <h1 className={styles.title}>Contact Us</h1>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}

export default page