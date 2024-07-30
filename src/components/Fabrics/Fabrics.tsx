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
      const productDetails: Product = {
        name: name,
        price: price,
        img: img,
      };
      if (typeof window !== "undefined"){localStorage.setItem("product", JSON.stringify(productDetails));}
        
    };

  const fabrics = [
    { name: "Avogan", img: "/img/fabric/avogan1.jpg", price: 25000, id: 1 },
    { name: "Avogan", img: "/img/fabric/avogan2.jpg", price: 25000, id: 2 },
    { name: "Avogan", img: "/img/fabric/avogan3.jpg", price: 25000, id: 3 },
    { name: "Avogan", img: "/img/fabric/avogan4.jpg", price: 25000, id: 4 },
    { name: "Avogan", img: "/img/fabric/avogan5.jpg", price: 25000, id: 5 },
    { name: "Avogan", img: "/img/fabric/avogan6.jpg", price: 25000, id: 6 },
    { name: "Avogan", img: "/img/fabric/avogan7.jpg", price: 25000, id: 7 },
    { name: "Avogan", img: "/img/fabric/avogan8.jpg", price: 25000, id: 8 },
    { name: "Avogan", img: "/img/fabric/avogan9.jpg", price: 25000, id: 9 },
    { name: "Avogan", img: "/img/fabric/avogan10.jpg", price: 25000, id: 10 },
    { name: "Avogan", img: "/img/fabric/avogan11.jpg", price: 25000, id: 11},
    { name: "Avogan", img: "/img/fabric/avogan12.jpg", price: 25000, id: 12},
    { name: "Chiganvo Wax", img: "/img/fabric/chiganvo wax1.jpg", price: 19800, id: 14},
    { name: "Chiganvo Wax", img: "/img/fabric/chiganvo wax2.jpg", price: 19800, id: 15},
    { name: "Chiganvo Wax", img: "/img/fabric/chiganvo wax3.jpg", price: 19800, id: 16},
    { name: "Chiganvo Wax", img: "/img/fabric/chiganvo wax4.jpg", price: 19800, id: 17},
    { name: "GTP Ghana Print", img: "/img/fabric/GTP Ghana print1.jpg", price: 28000, id: 18},
    { name: "GTP Ghana Print", img: "/img/fabric/GTP Ghana print2.jpg", price: 28000, id: 19},
    { name: "GTP Ghana Print", img: "/img/fabric/GTP Ghana print3.jpg", price: 28000, id: 20},
    { name: "GTP Ghana Print", img: "/img/fabric/GTP Ghana print4.jpg", price: 28000, id: 21},
    { name: "GTP Ghana Print", img: "/img/fabric/GTP Ghana print5.jpg", price: 28000, id: 22},
    { name: "GTP Ghana Print", img: "/img/fabric/GTP Ghana print6.jpg", price: 28000, id: 23},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax1.jpg", price: 11000, id: 24},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax2.jpg", price: 11000, id: 25},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax3.jpg", price: 11000, id: 26},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax4.jpg", price: 11000, id: 27},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax5.jpg", price: 11000, id: 28},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax6.jpg", price: 11000, id: 29},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax7.jpg", price: 11000, id: 30},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax8.jpg", price: 11000, id: 31},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax9.jpg", price: 11000, id: 32},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax10.jpg", price: 11000, id:33},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax11.jpg", price: 11000, id:34},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax12.jpg", price: 11000, id: 35},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax13.jpg", price: 11000, id: 36},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax14.jpg", price: 11000, id: 37},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax15.jpg", price: 11000, id: 38},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax16.jpg", price: 11000, id: 39},
    { name: "Guaranteed Wax", img: "/img/fabric/guaranteed wax17.jpg", price: 11000, id: 40},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon1.jpg", price: 18500, id: 41},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon2.jpg", price: 18500, id: 42},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon3.jpg", price: 18500, id: 43},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon4.jpg", price: 18500, id: 44},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon5.jpg", price: 18500, id: 45},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon6.jpg", price: 18500, id: 46},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon7.jpg", price: 18500, id: 47},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon8.jpg", price: 18500, id: 48},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon9.jpg", price: 18500, id: 49},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon10.jpg", price: 18500, id: 50},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon11.jpg", price: 18500, id: 51},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon12.jpg", price: 18500, id: 52},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon13.jpg", price: 18500, id: 53},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon14.jpg", price: 18500, id: 54},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon15.jpg", price: 18500, id: 55},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon16.jpg", price: 18500, id: 56},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon17.jpg", price: 18500, id: 57},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon18.jpg", price: 18500, id: 58},
    { name: "Super Hollandais (Golden Chameleon)", img: "/img/fabric/Super Hollandais Golden chameleon19.jpg", price: 18500, id: 59},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco1.jpg", price: 22000, id: 60},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco2.jpg", price: 22000, id: 61},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco3.jpg", price: 22000, id: 62},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco4.jpg", price: 22000, id: 63},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco5.jpg", price: 22000, id: 64},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco6.jpg", price: 22000, id: 65},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco7.jpg", price: 22000, id: 66},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco9.jpg", price: 22000, id: 67},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco10.jpg", price: 22000, id: 68},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco11.jpg", price: 22000, id: 69},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco12.jpg", price: 22000, id: 70},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco13.jpg", price: 22000, id: 71},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco14.jpg", price: 22000, id: 72},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco15.jpg", price: 22000, id: 73},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco16.jpg", price: 22000, id: 74},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco17.jpg", price: 22000, id: 75},
    { name: "Super Hollandais (Vilisco)", img: "/img/fabric/Super Hollandais vilisco18.jpg", price: 22000, id: 76},
    { name: "Super Rhema", img: "/img/fabric/super rhema1.jpg", price: 16800, id: 77},
    { name: "Super Rhema", img: "/img/fabric/super rhema2.jpg", price: 16800, id: 77},
    { name: "Super Rhema", img: "/img/fabric/super rhema3.jpg", price: 16800, id: 77},
    { name: "Super Rhema", img: "/img/fabric/super rhema4.jpg", price: 16800, id: 77},
    
    
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
                    router.push("/checkout"),
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
