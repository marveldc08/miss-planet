// components/ReviewForm.js

import React, { useState } from "react";
import styles from './ReviewForm.module.css'

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name, comment });
//     setName("");
//     setComment("");
//   };

  return (
    <form
      //   onSubmit={handleSubmit}
      className={styles.form}
    >
      <h2 className={styles.title}>Write a Review</h2>
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
        <label htmlFor="comment" className={styles.label}>
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          className={`${styles.input} ${styles.textarea}`}
          required
        ></textarea>
      </div>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
