"use client";
import React from "react";
// import styles from './Bridals.module.css'
import styles from "../../app/catalogue/catalogue.module.css";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

  interface Product {
    name: string;
    price: number;
    img: string;
    vid?: string;
    id?: number;
  }

const Bridals = () => {
  const [isActive, setIsActive] = useState("");

  const router = useRouter();

  const handleOrderNow = ({ name, price, img }) => {
    const productDetails = {
      name: name,
      price: price,
      img: img,
    };

    const queryString = new URLSearchParams(productDetails).toString();
    router.push(`/checkout?${queryString}`);
      
  };

  const bridals = [
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883463/Missplanet%20Collectibles/bridal/bridal1_mm0ccs.jpg",
      price: 50000,
      id: 1,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883464/Missplanet%20Collectibles/bridal/bridal2_wodfcq.jpg",
      price: 80000,
      id: 2,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883464/Missplanet%20Collectibles/bridal/bridal3_xt9yhr.jpg",
      price: 79000,
      id: 3,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883466/Missplanet%20Collectibles/bridal/bridal4_etioyk.jpg",
      price: 50000,
      id: 4,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883468/Missplanet%20Collectibles/bridal/bridal5_ahtlra.jpg",
      price: 79000,
      id: 5,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883470/Missplanet%20Collectibles/bridal/bridal6_u18tnm.jpg",
      price: 79000,
      id: 6,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883472/Missplanet%20Collectibles/bridal/bridal7_cvwx8v.jpg",
      price: 65500,
      id: 7,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883474/Missplanet%20Collectibles/bridal/bridal8_kdy7qt.jpg",
      price: 39000,
      id: 8,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883475/Missplanet%20Collectibles/bridal/bridal9_eoaijn.jpg",
      price: 81000,
      id: 9,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883478/Missplanet%20Collectibles/bridal/bridal10_elbeqz.jpg",
      price: 45000,
      id: 10,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883480/Missplanet%20Collectibles/bridal/bridal11_fx0hvs.jpg",
      price: 60000,
      id: 11,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883482/Missplanet%20Collectibles/bridal/bridal12_wlbmar.jpg",
      price: 55000,
      id: 12,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883484/Missplanet%20Collectibles/bridal/bridal13_vk6oyz.jpg",
      price: 83000,
      id: 13,
    },
    {
      name: "Traditional Bridal Attire",
      img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722883513/Missplanet%20Collectibles/bridal/bridal14_cocjzn.jpg",
      price: 90000,
      id: 14,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Bridals</h1>
      <p>we offer only the best Traditional Bridal Attire</p>
      <div className={styles.categoryContent}>
        <div className={styles.itemsInCategoryWrap}>
          {bridals.map((bridal) => (
            <div key={bridal.id} className={styles.itemInCategory}>
              <div>
                <Image
                  src={bridal.img}
                  width={200}
                  height={200}
                  alt="product image"
                />
              </div>
              <div className={styles.detail}>
                <h2>{bridal.name}</h2>
                <h4>₦ {bridal.price}</h4>
                <button
                  onClick={() => (
                    handleOrderNow({
                      name: bridal.name,
                      price: bridal.price,
                      img: bridal.img,
                      // vid: bridal.vid,
                    })
                  )}
                  className={styles.orderBtn}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bridals;
