import React, {useState, useEffect} from "react";
import styles from "./CheckOut.module.css";
import Image from "next/image";
import Link from "next/link";

  interface Product {
    name: string;
    price: number;
    img: string;
    vid?: string;
  }

const ContactUs = () => {


     const [name, setName] = useState("");
     const [phone, setPhone] = useState("");
     const [email, setEmail] = useState("");
     const [address, setAddress] = useState("");
     const [comment, setComment] = useState("");
     const [productDetails, setProductDetails] = useState<Product>({name: '',price: 0,img: '',vid: '',});

     useEffect(() => {
      return () => {
        const retrivedProductDetailsString = localStorage.getItem("product");
        const retrivedProductDetails = JSON.parse(retrivedProductDetailsString);
        setProductDetails(retrivedProductDetails);
      };
     })
  return (
    <div className={styles.checkoutSection}>
      <div className={styles.cont}>
        <div className={styles.checkoutHead}>
          <h2>Check Out</h2>
        </div>
        <div className={styles.checkoutBody}>
          <div className={styles.productDetails}>
            {productDetails.img && (
              <Image
                src={productDetails.img}
                width={400}
                height={400}
                alt="blob"
              />
            )}
            {productDetails.vid && (
               <video src={productDetails.vid} width="400"height="400"autoPlay loop muted></video>
            )}
            <div>
              <h5>PRODUCT:</h5>
              <h6>{productDetails.name}</h6>
            </div>
            <div>
              <h5>PRICE:</h5>
              <h6>₦ {productDetails.price}</h6>
            </div>
          </div>
          <div className={styles.checkoutForm}>
            <form //   onSubmit={handleSubmit}
              className={styles.form}
            >
              <h2 className={styles.title}>Checkout Form</h2>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="090*****"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="address" className={styles.label}>
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your Address"
                  className={styles.input}
                  required
                />
              </div>

              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
