'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from '../../app/catalogue/catalogue.module.css'

  interface Product {
    name: string;
    price: number;
    img: string;
    vid?: string;
    id?: number;
  }
  
const Accessories = () => {

  const [isActive, setIsActive] = useState('')
  const router = useRouter()
  const handleOrderNow = ({name, price, img, id }) => {
     const productDetails:Product = {
         name: name,
         price: price,
         img: img,
         id: id,
      }
      if (typeof window !== "undefined"){localStorage.setItem("product", JSON.stringify(productDetails));}
        
  }

  const accessories= [
    { name: "Bead Accessory", img: "/img/accessories/accessories1.jpg", price: 8200, id: 1 },
    { name: "Bead Accessory", img: "/img/accessories/accessories2.jpg", price: 9000, id: 4 },
    { name: "Bead Accessory", img: "/img/accessories/accessories3.jpg", price: 12000, id: 2 },
    { name: "Bead Accessory", img: "/img/accessories/accessories4.jpg", price: 10000, id: 3 },
    { name: "Bead Accessory", img: "/img/accessories/accessories5.jpg", price: 5900, id: 5 },
    { name: "Bead Accessory", img: "/img/accessories/accessories6.jpg", price: 7000, id: 6 },
    { name: "Bead Accessory", img: "/img/accessories/accessories7.jpg", price: 10000, id: 7 },
    { name: "Bead Accessory", img: "/img/accessories/accessories8.jpg", price: 4000, id: 8 },
    { name: "Bead Accessory", img: "/img/accessories/accessories9.jpg", price: 14500, id: 9 },
    { name: "Bead Accessory", img: "/img/accessories/accessories10.jpg", price: 15000, id: 10 },
    { name: "Weaved Hand Fan", img: "/img/accessories/accessories11.jpg", price: 9000, id: 11 },
  ]; 

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Accessories</h1>
      <p>we offer only the best Accessories</p>
      <div className={styles.categoryContent}>
        <div className={styles.itemsInCategoryWrap}>
          {accessories.map((accessory) => (
            <div key={accessory.id} className={styles.itemInCategory}>
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
                <button
                  onClick={() => (
                    router.push("/checkout"),
                    handleOrderNow({
                      name: accessory.name,
                      price: accessory.price,
                      img: accessory.img,
                      // vid?: accessory.vid,
                      id: accessory.id,
                      
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
}

export default Accessories