"use client";
import React from "react";
// import styles from "./Fabrics.module.css";
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
const Fabrics = () => {
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

  const fabrics = [
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942578/Missplanet%20Collectibles/fabric/avogan1_wj4ffk.jpg", price: 35000, id: 1 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942578/Missplanet%20Collectibles/fabric/avogan2_as3leb.jpg", price: 35000, id: 2 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942579/Missplanet%20Collectibles/fabric/avogan3_iq60ul.jpg", price: 35000, id: 3 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942580/Missplanet%20Collectibles/fabric/avogan4_syloz2.jpg", price: 35000, id: 4 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942581/Missplanet%20Collectibles/fabric/avogan5_yi8zre.jpg", price: 35000, id: 5 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942582/Missplanet%20Collectibles/fabric/avogan6_ihr2t7.jpg", price: 35000, id: 6 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942585/Missplanet%20Collectibles/fabric/avogan7_nhk97e.jpg", price: 35000, id: 7 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942586/Missplanet%20Collectibles/fabric/avogan8_kzbhhu.jpg", price: 35000, id: 8 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942588/Missplanet%20Collectibles/fabric/avogan9_j0d1eq.jpg", price: 35000, id: 9 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942590/Missplanet%20Collectibles/fabric/avogan10_hlnawl.jpg", price: 35000, id: 10 },
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942592/Missplanet%20Collectibles/fabric/avogan11_ceopii.jpg", price: 35000, id: 11},
    { name: "Avogan", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722942594/Missplanet%20Collectibles/fabric/avogan12_mohqjk.jpg", price: 35000, id: 12},
    { name: "Chiganvo Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943024/Missplanet%20Collectibles/fabric/chiganvo_wax1_pvzp5n.jpg", price: 25000, id: 14},
    { name: "Chiganvo Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943024/Missplanet%20Collectibles/fabric/chiganvo_wax2_n2ti4s.jpg", price: 25000, id: 15},
    { name: "Chiganvo Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943025/Missplanet%20Collectibles/fabric/chiganvo_wax3_hwbpxp.jpg", price: 25000, id: 16},
    { name: "Chiganvo Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943028/Missplanet%20Collectibles/fabric/chiganvo_wax4_xwrjzy.jpg", price: 25000, id: 17},
    { name: "GTP Ghana Print", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943029/Missplanet%20Collectibles/fabric/GTP_Ghana_print1_qbn7ag.jpg", price: 35000, id: 18},
    { name: "GTP Ghana Print", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943032/Missplanet%20Collectibles/fabric/GTP_Ghana_print2_obgrmp.jpg", price: 35000, id: 19},
    { name: "GTP Ghana Print", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943035/Missplanet%20Collectibles/fabric/GTP_Ghana_print3_ogqvaq.jpg", price: 35000, id: 20},
    { name: "GTP Ghana Print", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943036/Missplanet%20Collectibles/fabric/GTP_Ghana_print4_wl9iba.jpg", price: 35000, id: 21},
    { name: "GTP Ghana Print", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943039/Missplanet%20Collectibles/fabric/GTP_Ghana_print5_uftdvd.jpg", price: 35000, id: 22},
    { name: "GTP Ghana Print", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943041/Missplanet%20Collectibles/fabric/GTP_Ghana_print6_sqrdcm.jpg", price: 35000, id: 23},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943572/Missplanet%20Collectibles/fabric/guaranteed_wax1_k8ph9z.jpg", price: 15000, id: 24},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943573/Missplanet%20Collectibles/fabric/guaranteed_wax2_cuz7mf.jpg", price: 15000, id: 25},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943574/Missplanet%20Collectibles/fabric/guaranteed_wax3_drdyqc.jpg", price: 15000, id: 26},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943579/Missplanet%20Collectibles/fabric/guaranteed_wax4_hlbrqb.jpg", price: 15000, id: 27},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943676/Missplanet%20Collectibles/fabric/guaranteed_wax5_eh4oft.jpg", price: 15000, id: 28},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943677/Missplanet%20Collectibles/fabric/guaranteed_wax6_rgytae.jpg", price: 15000, id: 29},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943681/Missplanet%20Collectibles/fabric/guaranteed_wax7_t5w1j7.jpg", price: 15000, id: 30},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943683/Missplanet%20Collectibles/fabric/guaranteed_wax8_gnn20b.jpg", price: 15000, id: 31},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943686/Missplanet%20Collectibles/fabric/guaranteed_wax9_vgjyoh.jpg", price: 15000, id: 32},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943688/Missplanet%20Collectibles/fabric/guaranteed_wax10_uzxwoe.jpg", price: 15000, id:33},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943691/Missplanet%20Collectibles/fabric/guaranteed_wax11_upuu9g.jpg", price: 15000, id:34},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943693/Missplanet%20Collectibles/fabric/guaranteed_wax12_fs7au4.jpg", price: 15000, id: 35},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943696/Missplanet%20Collectibles/fabric/guaranteed_wax13_pl1wjb.jpg", price: 15000, id: 36},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943698/Missplanet%20Collectibles/fabric/guaranteed_wax14_gcrknt.jpg", price: 15000, id: 37},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943700/Missplanet%20Collectibles/fabric/guaranteed_wax15_iuyaqy.jpg", price: 15000, id: 38},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943704/Missplanet%20Collectibles/fabric/guaranteed_wax16_kim0sv.jpg", price: 15000, id: 39},
    { name: "Guaranteed Wax", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722943706/Missplanet%20Collectibles/fabric/guaranteed_wax17_tibix7.jpg", price: 15000, id: 40},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944527/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon1_g7jdmb.jpg", price: 20000, id: 41},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944528/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon2_izbzm5.jpg", price: 20000, id: 42},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944528/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon3_dk6pbo.jpg", price: 20000, id: 43},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944534/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon4_ik9qjw.jpg", price: 20000, id: 44},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944535/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon5_aomvyu.jpg", price: 20000, id: 45},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944538/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon6_c8zngb.jpg", price: 20000, id: 46},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944540/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon7_rdl0o3.jpg", price: 20000, id: 47},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944543/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon8_djyuq6.jpg", price: 20000, id: 48},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944545/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon9_xmzop0.jpg", price: 20000, id: 49},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944548/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon10_riupjs.jpg", price: 20000, id: 50},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944550/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon11_bmtxwz.jpg", price: 20000, id: 51},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944553/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon12_ttn5z8.jpg", price: 20000, id: 52},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944555/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon13_e1av0l.jpg", price: 20000, id: 53},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944558/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon14_qkm0cn.jpg", price: 20000, id: 54},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944560/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon15_izf3ra.jpg", price: 20000, id: 55},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944563/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon16_vq2t2g.jpg", price: 20000, id: 56},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944565/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon17_omkygo.jpg", price: 20000, id: 57},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944568/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon18_uiqkl2.jpg", price: 20000, id: 58},
    { name: "Super Hollandais (Golden Chameleon)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722944570/Missplanet%20Collectibles/fabric/Super_Hollandais_Golden_chameleon19_pakfw6.jpg", price: 20000, id: 59},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945545/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco1_pod3ly.jpg", price: 7000, id: 60},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945545/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco2_coiafd.jpg", price: 7000, id: 61},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945546/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco3_b7hswa.jpg", price: 7000, id: 62},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945551/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco4_gvlagu.jpg", price: 7000, id: 63},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945552/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco5_nqhubi.jpg", price: 7000, id: 64},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945556/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco6_o1hosg.jpg", price: 7000, id: 65},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945559/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco7_aunlrz.jpg", price: 7000, id: 66},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945560/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco8_ltaxbw.jpg", price: 7000, id: 67},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945564/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco9_ibuozk.jpg", price: 7000, id: 68},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945565/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco10_ybm6ri.jpg", price: 7000, id: 69},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945569/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco11_rs5jil.jpg", price: 7000, id: 70},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945572/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco12_eejukd.jpg", price: 7000, id: 71},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945573/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco13_j8wind.jpg", price: 7000, id: 72},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945578/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco14_r02xba.jpg", price: 7000, id: 73},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945578/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco15_mricfn.jpg", price: 7000, id: 74},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945579/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco16_ieweir.jpg", price: 7000, id: 75},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945585/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco17_ofkz0b.jpg", price: 7000, id: 76},
    { name: "Super Hollandais (Vilisco)", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945586/Missplanet%20Collectibles/fabric/Super_Hollandais_vilisco18_cfjmze.jpg", price: 7000, id: 77},
    { name: "Super Rhema", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945590/Missplanet%20Collectibles/fabric/super_rhema1_nlfvxi.jpg", price: 18000, id: 78},
    { name: "Super Rhema", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945593/Missplanet%20Collectibles/fabric/super_rhema2_svbkwn.jpg", price: 18000, id: 79},
    { name: "Super Rhema", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945595/Missplanet%20Collectibles/fabric/super_rhema3_iimvjv.jpg", price: 18000, id: 80},
    { name: "Super Rhema", img: "https://res.cloudinary.com/dc-cloud/image/upload/v1722945597/Missplanet%20Collectibles/fabric/super_rhema4_gzqtzz.jpg", price: 18000, id: 81},
    
    
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Fabrics</h1>
      <p>we offer only the best Fabrics, check out all the grand styles.</p>
      <div className={styles.categoryContent}>
        <div className={styles.itemsInCategoryWrap}>
          {fabrics.map((fabric) => (
            <div key={fabric.id} className={styles.itemInCategory}>
              <div>
                <Image
                  src={fabric.img}
                  width={200}
                  height={200}
                  alt="product image"
                />
              </div>
              <div className={styles.detail}>
                <h2>{fabric.name}</h2>
                <h4>₦ {fabric.price}</h4>
                <button
                  onClick={() => (
                    handleOrderNow({
                      name: fabric.name,
                      price: fabric.price,
                      img: fabric.img,
                      // vid: fabric.vid,
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

export default Fabrics;
