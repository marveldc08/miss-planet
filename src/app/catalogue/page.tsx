'use client'
import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import styles from './catalogue.module.css'

import Bridals from '../../components/Bridals/Bridals';
import Fabrics from '../../components/Fabrics/Fabrics';
import Accessories from '../../components/Accessories/Accessories';
import Wigs from '../../components/Wigs/Wigs';

const Page = () => {

  const [isActive, setIsActive] = useState('');

  return (
    <div className={styles.container}>
      <section className={styles.jumbotron}>
        <div className={styles.content}>
          <h1 className={styles.title}>Product Catalogue</h1>
        </div>
      </section>
     {isActive === '' && <div className={styles.categoryContainer}>
        <h1 className={styles.heading}>Categories</h1>
        <p>find only the best in all our categories</p>
        <div className={styles.categories}>
          <div className={styles.categoryWrap}>
            <div
              className={styles.category}
              onClick={() => setIsActive("bridals")}
              style={{
                backgroundImage: `url('/img/gallery/galleryImg5.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2> Bridals</h2>
            </div>
            <div
              className={styles.category}
              onClick={() => setIsActive("accessories")}
              style={{
                backgroundImage: `url('/img/gallery/galleryImg9.jpeg')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Accessories</h2>
            </div>
          </div>
          <div className={styles.categoryWrap}>
            <div
              className={styles.category}
              onClick={() => setIsActive("fabrics")}
              style={{
                backgroundImage: `url('/img/gallery/galleryImg11.jpeg')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Fabrics</h2>
            </div>
            <div
              className={styles.category}
              onClick={() => setIsActive("wigs")}
              style={{
                backgroundImage: `url('/img/gallery/galleryImg13.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Wigs</h2>
            </div>
          </div>
        </div>
      </div>}
      {isActive === 'bridals' && <Bridals />}
      {isActive === 'accessories' && <Accessories />}
      {isActive === 'fabrics' && <Fabrics />}
      {isActive === 'wigs' && <Wigs />}
    </div>
  );
}

export default Page;
