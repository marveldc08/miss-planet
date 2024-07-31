"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./CheckOut.module.css";
import Image from "next/image";
import Link from "next/link";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Swal from "sweetalert2";

interface Product {
  name?: string;
  price?: number;
  img?: string;
  vid?: string;
}

const CheckOut = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [productDetails, setProductDetails] = useState<Product>({
    name: "",
    price: 0,
    img: "",
    vid: "",
  });

 const searchParams = useSearchParams();
  // console.log(router.prefetch);
  useEffect(() => {
    const product: Product = {
      name: searchParams.get("name"),
      price: JSON.parse(searchParams.get("price")),
      img: searchParams.get("img"),
      vid: searchParams.get("vid"),
    };
    setProductDetails(product);
  }, [searchParams]);




  const customerDetails = {
    name: name,
    phone: phone,
    email: email,
    address: address,
  };
  const emailDetails = {
    customerDetails: customerDetails,
    productDetails: productDetails,
  };

  const config = {
    public_key: "FLWPUBK_TEST-2a3a4da93ed21d4e5d65c987e9a4de07-X",
    tx_ref: Date.now() + "",
    amount: productDetails.price,
    currency: "NGN",
    payment_options: "card, bank transfer,ussd",
    customer: {
      email: customerDetails.email,
      phone_number: customerDetails.phone,
      name: customerDetails.name,
    },
    customizations: {
      title: "Miss Planet ",
      description: "Payment for " + productDetails.name,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const callback = async (response) => {
    const emailResponse = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailDetails),
    });

    const result = await emailResponse.json();
    if (
      response.status === "successful" ||
      (response.status === "completed" && result.success)
    ) {
      Swal.fire({
        title: "Successful",
        text: " Your transaction was successful. Kindly check your mail to track your delivary.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Opps...",
        text: "Something went wrong. ",
        icon: "error",
      });
    }
    closePaymentModal(); // this will close the modal programmatically
  };
  const onClose = () => {
    // if (response.status === "successful" || "completed") {
    // } else {
    Swal.fire({
      title: "Are you sure?",
      text:
        "Hi " +
        customerDetails.name +
        ", are you sure you do not want to get the " +
        productDetails.name +
        " ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I am sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Alright",
          text: "Do check our other product.",
          icon: "success",
        });
      }
    });
    // }
  };

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
              <video
                src={productDetails.vid}
                width="400"
                height="400"
                autoPlay
                loop
                muted
              ></video>
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

              <button
                onClick={(event) => (
                  event.preventDefault(),
                  handleFlutterPayment({ callback, onClose })
                )}
                className={styles.button}
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
