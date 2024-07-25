import React from 'react'
import Image from 'next/image';

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
        <Image src="/img/gallery/galleryImg12.jpeg" width='200' height='200'  className={styles.image} alt="Image" />
        <video src='/img/gallery/galleryVid4.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
         <Image src="/img/gallery/galleryImg7.jpeg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="/img/gallery/galleryImg9.jpeg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="/img/gallery/galleryImg13.jpeg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="/img/gallery/galleryImg3.jpeg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="/img/gallery/galleryImg10.jpeg" width='200' height='200' className={styles.image} alt="Image" />
         <video src='/img/gallery/galleryVid3.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
          <Image src="/img/gallery/galleryImg4.jpeg" width='200' height='200' className={styles.image} alt="Image" />
          <Image src="/img/gallery/galleryImg6.jpeg" width='200' height='200' className={styles.image} alt="Image" />
          <Image src="/img/gallery/galleryImg14.jpeg" width='200' height='200' className={styles.image} alt="Image" />
         <video src='/img/gallery/galleryVid1.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
          <Image src="/img/gallery/galleryImg11.jpeg" width='200' height='200' className={styles.image} alt="Image" />
          <Image src="/img/gallery/galleryImg5.jpeg" 
          width='200' height='200' className={styles.image} alt="Image" />
          <Image src="/img/gallery/galleryImg2.jpeg"  width='200' height='200' className={styles.image} alt="Image" />

          <Image src="/img/gallery/galleryImg8.jpeg"  width='200' height='200' className={styles.image} alt="Image" />

           <video src='/img/gallery/galleryVid2.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
            <Image src="/img/gallery/galleryImg14.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg15.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg16.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg17.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg18.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg19.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg20.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg21.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg22.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="/img/gallery/galleryImg23.jpg"  width='200' height='200' className={styles.image} alt="Image" />

      </div>
    </div>
    </div>
  );
}

export default page;