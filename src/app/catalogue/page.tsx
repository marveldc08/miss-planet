'use client'
import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import styles from './catalogue.module.css'
import { BsArrowLeft } from "react-icons/bs";
import Bridals from '../../components/Bridals/Bridals';
import Fabrics from '../../components/Fabrics/Fabrics';
import Accessories from '../../components/Accessories/Accessories';
import Wigs from '../../components/Wigs/Wigs';

const Page = () => {

  const [isActive, setIsActive] = useState('');

  return (
    <div>
      <section className={styles.jumbotron}>
        <div className={styles.content}>
          <h1 className={styles.title}>Product Catalogue</h1>
        </div>
      </section>
      {isActive === "" ? (
        <></>
      ) : (
        <button onClick={() => setIsActive("")} className={styles.backButton}>
          <BsArrowLeft style={{ width: "80%", height: "80%" }} />
        </button>
      )}
      {isActive === "" && (
        <div className={styles.categoryContainer}>
          <h1 className={styles.heading}>Categories</h1>
          <p>find only the best in all our categories</p>
          <div className={styles.categories}>
            <div className={styles.categoryWrap}>
              <div
                className={styles.category}
                onClick={() => setIsActive("bridals")}
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dc-cloud/image/upload/v1722878336/Missplanet%20Collectibles/gallery/galleryImg5_qt1u30.jpg')`,
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
                  backgroundImage: `url('https://res.cloudinary.com/dc-cloud/image/upload/v1722878340/Missplanet%20Collectibles/gallery/galleryImg9_fbuhld.jpg')`,
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
                  backgroundImage: `url('https://res.cloudinary.com/dc-cloud/image/upload/v1722878341/Missplanet%20Collectibles/gallery/galleryImg11_pa9ach.jpg')`,
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
                  backgroundImage: `url('https://res.cloudinary.com/dc-cloud/image/upload/v1722878344/Missplanet%20Collectibles/gallery/galleryImg13_wha5sl.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2>Hair</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      {isActive === "bridals" && <Bridals />}
      {isActive === "accessories" && <Accessories />}
      {isActive === "fabrics" && <Fabrics />}
      {isActive === "wigs" && <Wigs />}
    </div>
  );
}

export default Page;
