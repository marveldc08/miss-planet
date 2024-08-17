"use client";
import React from "react";
// import styles from "./Wigs.module.css";
import styles from  '../../app/catalogue/catalogue.module.css';
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

const Wigs = () => {
  const [isActive, setIsActive] = useState("");

  const router = useRouter();
  const handleOrderNow = ({ name, price, img, vid }) => {
    const productDetails = {
      name: name,
      price: price,
      img: img,
      vid: vid
    };
    const queryString = new URLSearchParams(productDetails).toString();
    router.push(`/checkout?${queryString}`);
      
  };

  const wigs = [
    { name: "12inch SDD Bone Straight", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722884097/Missplanet%20Collectibles/hair/12inch_SDD_bone_straight_uwkykb.jpg", price: 20000, id: 1 },
    { name: "613 omotola jessy", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722884099/Missplanet%20Collectibles/hair/613_omotola_jessy_trmwc4.jpg", price: 15000, id: 2 },
    { name: "African Thread Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722884100/Missplanet%20Collectibles/hair/african_thread_wig_h789hd.jpg", price: 8500, id: 3},
    { name: " Deep Wave Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722884102/Missplanet%20Collectibles/hair/deep_wave_wig_h8wc5s.jpg", price: 10000, id: 4},
    { name: "Fulani Hair Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722884105/Missplanet%20Collectibles/hair/fulani_hair_wig_jd7wws.jpg", price: 25000, id: 5 },
    { name: "Fulani Hair Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722884106/Missplanet%20Collectibles/hair/fulani_hair_wig2_pptdgg.jpg", price: 25000, id: 6 },
    { name: "Black Bone Straight", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885027/Missplanet%20Collectibles/hair/hair1_aymrou.jpg", price: 30000, id: 7 },
    { name: "Brownish Gold and Black Bone Straight", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885030/Missplanet%20Collectibles/hair/hair2_nl3gz8.jpg", price: 38000, id: 8 },
    { name: "Deep Red Curly Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885033/Missplanet%20Collectibles/hair/hair3_qvovmr.jpg", price: 19000, id: 9 },
    { name: "Human Hair (full lenght)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885039/Missplanet%20Collectibles/hair/hair4_vbfntd.jpg", price: 35000, id: 10 },
    { name: "Full Wave Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885040/Missplanet%20Collectibles/hair/hair5_uv11ji.jpg", price: 19000, id: 11 },
    { name: "Human Hair", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885038/Missplanet%20Collectibles/hair/hair6_dzzpyh.jpg", price: 38000, id: 12 },
    { name: " Hair Frontal", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885049/Missplanet%20Collectibles/hair/hair7_xbbbj9.jpg", price: 17000, id: 13 },
    { name: "Curly Wig (Black)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885044/Missplanet%20Collectibles/hair/hair8_aplbgy.jpg", price: 23000, id: 14 },
    { name: "Gold Bone Straight", vid: "https://res.cloudinary.com/dc-cloud/video/upload/v1722885064/Missplanet%20Collectibles/hair/hair9_ku1lzv.mp4", price: 38000, id: 15 },
    { name: "Full Wave Wig (Brown)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885048/Missplanet%20Collectibles/hair/hair10_vlyxro.jpg", price: 17000, id: 16 },
    { name: "Black Bob ", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885114/Missplanet%20Collectibles/hair/hair11_xjrf7b.jpg", price: 24000, id: 17 },
    { name: "Braided Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885118/Missplanet%20Collectibles/hair/hair12_ww5rgx.jpg", price: 26000, id: 18 },
    { name: "Braided Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885127/Missplanet%20Collectibles/hair/hair13_cmlgen.jpg", price: 30000, id: 19},
    { name: "Braided Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885125/Missplanet%20Collectibles/hair/hair14_pkq6hc.jpg", price: 38000, id: 20 },
    { name: "Braided Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885129/Missplanet%20Collectibles/hair/hair15_ogrb29.jpg", price: 32000, id: 21 },
    { name: "Braided Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885134/Missplanet%20Collectibles/hair/hair16_zuptrz.jpg", price: 30000, id: 22 },
    { name: "Braided Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885133/Missplanet%20Collectibles/hair/hair17_fgapol.jpg", price: 27000, id: 23 },
    { name: "Braided Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885136/Missplanet%20Collectibles/hair/hair18_kjm1e5.jpg", price: 27000, id: 24 },
    { name: "Corn Rolls Wig", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885136/Missplanet%20Collectibles/hair/hair19_yxvsj9.jpg", price: 27000, id: 25 },
    { name: "200g Pixy with closure (14inh)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885142/Missplanet%20Collectibles/hair/hair20_hyjwcs.jpg", price: 63000, id: 26 },
    { name: "200g Pixy with closure (16inh)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885142/Missplanet%20Collectibles/hair/hair20_hyjwcs.jpg", price: 73000, id: 27 },
    { name: "200g Pixy with closure (18inh)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722885142/Missplanet%20Collectibles/hair/hair20_hyjwcs.jpg", price: 79000, id: 28 },
    { name: "100% Human hair (Full closure, SDD bounce, Cajun birthmark gold)", vid: "/img/hair/hahttps://res.cloudinary.com/dc-cloud/video/upload/v1722885217/Missplanet%20Collectibles/hair/hair21_wai4yb.mp4r21.mp4", price: 186000, id: 29 },
    { name: "NATURAL COLOUR BOB (SDD full frontal bleached) 10inh", vid: "https://res.cloudinary.com/dc-cloud/video/upload/v1722885348/missplanet%20collectibles/hair/hair22_t7kewa.mp4", price: 64000, id: 30 },
    { name: "NATURAL COLOUR BOB (SDD full frontal bleached) 12inh", vid: "https://res.cloudinary.com/dc-cloud/video/upload/v1722885348/missplanet%20collectibles/hair/hair22_t7kewa.mp4", price: 76000, id: 31 },
    { name: "NATURAL COLOUR BOB (SDD full frontal bleached) 14inh", vid: "https://res.cloudinary.com/dc-cloud/video/upload/v1722885348/missplanet%20collectibles/hair/hair22_t7kewa.mp4", price: 85000, id: 32 },
    { name: "Water hair fringe curls 38", vid: "https://res.cloudinary.com/dc-cloud/video/upload/v1722885221/Missplanet%20Collectibles/hair/Water_hair_fringe_curls_38_qokcsc.mp4", price: 18000, id: 33 },

    
  
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
