"use client";
import React from "react";
// import styles from "./Wigs.module.css";
import styles from  '../../app/catalogue/catalogue.module.css';
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

const Wigs = () => {
  const [isActive, setIsActive] = useState("");

  const router = useRouter();
  const handleOrderNow = ({ name, price, img, vid }) => {
    const productDetails: Product = {
      name: name,
      price: price,
      img: img,
      vid: vid
    };
          router.push({
            pathname: "/checkout",
            query: JSON.stringify(productDetails),
          });
      
  };

  const wigs = [
    { name: "12inch SDD Bone Straight", img: "/img/hair/12inch SDD bone straight.jpg", price: 20000, id: 1 },
    { name: "613 omotola jessy", img: "/img/hair/613 omotola jessy.jpg", price: 15000, id: 2 },
    { name: "African Thread Wig", img: "/img/hair/african thread wig.jpeg", price: 8500, id: 3},
    { name: " Deep Wave Wig", img: "/img/hair/deep wave wig.jpg", price: 10000, id: 4},
    { name: "Fulani Hair Wig", img: "/img/hair/fulani hair wig.jpg", price: 25000, id: 5 },
    { name: "Fulani Hair Wig", img: "/img/hair/fulani hair wig2.jpg", price: 25000, id: 6 },
    { name: "Black Bone Straight", img: "/img/hair/hair1.jpg", price: 30000, id: 7 },
    { name: "Brownish Gold and Black Bone Straight", img: "/img/hair/hair2.jpg", price: 38000, id: 8 },
    { name: "Deep Red Curly Wig", img: "/img/hair/hair3.jpg", price: 19000, id: 9 },
    { name: "Human Hair (full lenght)", img: "/img/hair/hair4.jpg", price: 35000, id: 10 },
    { name: "Full Wave Wig", img: "/img/hair/hair5.jpg", price: 19000, id: 11 },
    { name: "Human Hair", img: "/img/hair/hair6.jpg", price: 38000, id: 12 },
    { name: " Hair Frontal", img: "/img/hair/hair7.jpg", price: 17000, id: 13 },
    { name: "Curly Wig (Black)", img: "/img/hair/hair8.jpg", price: 23000, id: 14 },
    { name: "Gold Bone Straight", vid: "/img/hair/hair9.mp4", price: 38000, id: 15 },
    { name: "Full Wave Wig (Brown)", img: "/img/hair/hair10.jpg", price: 17000, id: 16 },
    { name: "Black Bob ", img: "/img/hair/hair11.jpg", price: 24000, id: 17 },
    { name: "Braided Wig", img: "/img/hair/hair12.jpg", price: 26000, id: 18 },
    { name: "Braided Wig", img: "/img/hair/hair13.jpg", price: 30000, id: 19},
    { name: "Braided Wig", img: "/img/hair/hair14.jpg", price: 38000, id: 20 },
    { name: "Braided Wig", img: "/img/hair/hair15.jpg", price: 32000, id: 21 },
    { name: "Braided Wig", img: "/img/hair/hair16.jpg", price: 30000, id: 22 },
    { name: "Braided Wig", img: "/img/hair/hair17.jpg", price: 27000, id: 23 },
    { name: "Braided Wig", img: "/img/hair/hair18.jpg", price: 27000, id: 24 },
    { name: "Corn Rolls Wig", img: "/img/hair/hair19.jpg", price: 27000, id: 25 },
    { name: "200g Pixy with closure (14inh)", img: "/img/hair/hair20.jpg", price: 63000, id: 26 },
    { name: "200g Pixy with closure (16inh)", img: "/img/hair/hair20.jpg", price: 73000, id: 27 },
    { name: "200g Pixy with closure (18inh)", img: "/img/hair/hair20.jpg", price: 79000, id: 28 },
    { name: "100% Human hair (Full closure, SDD bounce, Cajun birthmark gold)", vid: "/img/hair/hair21.mp4", price: 186000, id: 29 },
    { name: "NATURAL COLOUR BOB (SDD full frontal bleached) 10inh", vid: "/img/hair/hair22.mp4", price: 64000, id: 30 },
    { name: "NATURAL COLOUR BOB (SDD full frontal bleached) 12inh", vid: "/img/hair/hair22.mp4", price: 76000, id: 31 },
    { name: "NATURAL COLOUR BOB (SDD full frontal bleached) 14inh", vid: "/img/hair/hair22.mp4", price: 85000, id: 32 },
    { name: "Water hair fringe curls 38", vid: "/img/hair/Water hair fringe curls 38.mp4", price: 18000, id: 33 },

    
  
    ,
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Accessories</h1>
      <p>we offer only the best Accessories</p>
      <div className={styles.categoryContent}>
        <div className={styles.itemsInCategoryWrap}>
          {wigs.map((wig) => (
            <div key={wig.id} className={styles.itemInCategory}>
              <div>
                {wig.img && (
                  <Image
                    src={wig.img}
                    width={200}
                    height={200}
                    alt="product image"
                  />
                )}
                {wig.vid && (
                  <video
                    src={wig.vid}
                    width="320"
                    height="240"
                    autoPlay
                    loop
                    muted
                  ></video>
                )}
              </div>
              <div className={styles.detail}>
                <h2>{wig.name}</h2>
                <h4>₦ {wig.price}</h4>
                <button
                  onClick={() => (
                    handleOrderNow({
                      name: wig.name,
                      price: wig.price,
                      img: wig.img,
                      vid: wig.vid,
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

export default Wigs;
