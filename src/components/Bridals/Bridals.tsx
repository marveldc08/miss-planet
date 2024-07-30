"use client";
import React from "react";
// import styles from './Bridals.module.css'
import styles from "../../app/catalogue/catalogue.module.css";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

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
    const productDetails: Product = {
      name: name,
      price: price,
      img: img,
    };
          router.push({
            pathname: "/checkout",
            query: JSON.stringify(productDetails),
          });
      
  };

  const bridals = [
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal1.jpg",
      price: 50000,
      id: 1,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal2.jpg",
      price: 80000,
      id: 2,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal3.jpg",
      price: 79000,
      id: 3,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal4.jpg",
      price: 50000,
      id: 4,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal5.jpg",
      price: 79000,
      id: 5,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal6.jpg",
      price: 79000,
      id: 6,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal7.jpg",
      price: 65500,
      id: 7,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal8.jpg",
      price: 39000,
      id: 8,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal9.jpg",
      price: 81000,
      id: 9,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal10.jpg",
      price: 45000,
      id: 10,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal11.jpg",
      price: 60000,
      id: 11,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal12.jpg",
      price: 55000,
      id: 12,
    },
    {
      name: "Traditional Bridal Attire",
      img: "/img/bridal/bridal13.jpg",
      price: 83000,
      id: 13,
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
