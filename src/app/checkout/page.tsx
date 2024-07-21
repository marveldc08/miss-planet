"use client";
import React from "react";
import styles from "../contact/contact.module.css";
import CheckOut from "../../components/CheckOut/CheckOut";

const page = () => {
  return (
    <div>
      <section className={styles.jumbotron}>
        <div className={styles.content}>
          <h1 className={styles.title}>Check Out</h1>
        </div>
      </section>
      <section>
        <CheckOut />
      </section>
    </div>
  );
};

export default page;
