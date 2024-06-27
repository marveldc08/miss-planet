'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Accessories.module.css'

const Accessories = () => {

  const [isActive, setIsActive] = useState('')
  const accessories = [
    { name: "Bead Necklace", img: "/img/accessories.jpeg", price: 5000, id: 1 },
    { name: "Bead Necklace", img: "/img/accessories.jpeg", price: 8000, id: 2 },
    { name: "Bead Ear-rings",img: "/img/accessories.jpeg", price: 7090, id: 3 },
    { name: "Bead Necklace",img: "/img/accessories.jpeg", price: 5000, id: 4 },
    { name: "Wrist Bead",img: "/img/accessories.jpeg", price: 1700, id: 5 },
    { name: "Bead Necklace",img: "/img/accessories.jpeg", price: 5000, id: 6 },
    { name: "Wrist Bead",img: "/img/accessories.jpeg", price: 3400, id: 7 },
    { name: "Bead Necklace",img: "/img/accessories.jpeg", price: 6800, id: 8 },
    ,
  ];

  return (
    <div className={styles.accessoriesContainer}>
      <h1 className={styles.heading}>Accessories</h1>
      <p>we offer only the best Accessories</p>
      <div className={styles.container}>
        <div className={styles.accessories}>
          {accessories.map((accessory) => (
            <div key={accessory.id} className={styles.accessory}>
              <div>
                <Image
                  src={accessory.img}
                  width={200}
                  height={200}
                  alt="product image"
                />
              </div>
              <div className={styles.detail}>
                <h2>{accessory.name}</h2>
                <h4>₦ {accessory.price}</h4>
                <Link href="/checkout" className={styles.orderBtn}>
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accessories