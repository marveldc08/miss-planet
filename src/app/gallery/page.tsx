import React from 'react'
import styles from './gallery.module.css'

const page = () => {
  return (
    <div>
      <section className={styles.jumbotron}>
        <div className={styles.content}>
          <h1 className={styles.title}>Gallery</h1>
        </div>
      </section>
      <div className={styles.galleyHead}>
        <h2>View our awesome gallery</h2>
        <p>Get to see what we are up to in clear pictures</p>
      </div>
    <div className={styles.container} >
      <div className={styles.gallery}>
        <img src="/img/gallery/galleryImg12.jpeg" className={styles.image} alt="Avatar" />
        <video src='/img/gallery/galleryVid4.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
         <img src="/img/gallery/galleryImg7.jpeg" className={styles.image} alt="Avatar" />
         <img src="/img/gallery/galleryImg9.jpeg" className={styles.image} alt="Avatar" />
         <img src="/img/gallery/galleryImg13.jpeg" className={styles.image} alt="Avatar" />
         <img src="/img/gallery/galleryImg3.jpeg" className={styles.image} alt="Avatar" />
         <img src="/img/gallery/galleryImg10.jpeg" className={styles.image} alt="Avatar" />
         <video src='/img/gallery/galleryVid3.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
          <img src="/img/gallery/galleryImg4.jpeg" className={styles.image} alt="Avatar" />
          <img src="/img/gallery/galleryImg6.jpeg" className={styles.image} alt="Avatar" />
          <img src="/img/gallery/galleryImg14.jpeg" className={styles.image} alt="Avatar" />
         <video src='/img/gallery/galleryVid1.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
          <img src="/img/gallery/galleryImg11.jpeg" className={styles.image} alt="Avatar" />
          <img src="/img/gallery/galleryImg5.jpeg" className={styles.image} alt="Avatar" />
          <img src="/img/gallery/galleryImg2.jpeg" className={styles.image} alt="Avatar" />
          <img src="/img/gallery/galleryImg8.jpeg" className={styles.image} alt="Avatar" />
           <video src='/img/gallery/galleryVid2.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
      </div>
    </div>
    </div>
  );
}

export default page;