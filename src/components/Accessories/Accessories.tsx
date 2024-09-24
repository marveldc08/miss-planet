'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from "next/navigation";
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
     const productDetails = {
         name: name,
         price: price,
         img: img,
         id: id,
      }
    const queryString = new URLSearchParams(productDetails).toString();
    router.push(`/checkout?${queryString}`);
      // if (typeof window !== "undefined"){localStorage.setItem("product", JSON.stringify(productDetails));}
        
  }

  const accessories= [
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880104/Missplanet%20Collectibles/accessories/accessories1_bcmazi.jpg", price: 65000, id: 1 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880105/Missplanet%20Collectibles/accessories/accessories2_bfchrp.jpg", price: 70000, id: 4 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880105/Missplanet%20Collectibles/accessories/accessories3_p3keuf.jpg", price: 45000, id: 2 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880105/Missplanet%20Collectibles/accessories/accessories4_rkgswo.jpg", price: 55000, id: 3 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880106/Missplanet%20Collectibles/accessories/accessories5_y7cjsc.jpg", price: 65000, id: 5 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880109/Missplanet%20Collectibles/accessories/accessories6_zaa93e.jpg", price: 90000, id: 6 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880109/Missplanet%20Collectibles/accessories/accessories7_ykhk7s.jpg", price: 70000, id: 7 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880110/Missplanet%20Collectibles/accessories/accessories8_by3pkk.jpg", price: 75000, id: 8 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880111/Missplanet%20Collectibles/accessories/accessories9_cebynd.jpg", price: 60000, id: 9 },
    { name: "Bead Accessory", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722880112/Missplanet%20Collectibles/accessories/accessories10_thkacs.jpg", price: 45000, id: 10 },
    
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