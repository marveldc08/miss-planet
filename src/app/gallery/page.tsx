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
        <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878344/Missplanet%20Collectibles/gallery/galleryImg12_f1h69y.jpg" width='200' height='200'  className={styles.image} alt="Image" />
        <video src='https://res.cloudinary.com/dc-cloud/video/upload/v1722878404/Missplanet%20Collectibles/gallery/galleryVid4_qm24li.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
         <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878337/Missplanet%20Collectibles/gallery/galleryImg7_bulygk.jpg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878340/Missplanet%20Collectibles/gallery/galleryImg9_fbuhld.jpg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878344/Missplanet%20Collectibles/gallery/galleryImg13_wha5sl.jpg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722877908/Missplanet%20Collectibles/gallery/galleryImg3_timh0n.jpg" width='200' height='200' className={styles.image} alt="Image" />
         <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878341/Missplanet%20Collectibles/gallery/galleryImg10_yf3fqq.jpg" width='200' height='200' className={styles.image} alt="Image" />
         <video src='https://res.cloudinary.com/dc-cloud/video/upload/v1722878378/Missplanet%20Collectibles/gallery/galleryVid3_xn2nmk.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
          <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878335/Missplanet%20Collectibles/gallery/galleryImg4_tlulez.jpg" width='200' height='200' className={styles.image} alt="Image" />
          <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878336/Missplanet%20Collectibles/gallery/galleryImg6_sninlv.jpg" width='200' height='200' className={styles.image} alt="Image" />
          <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878345/Missplanet%20Collectibles/gallery/galleryImg14_yxomaw.jpg" width='200' height='200' className={styles.image} alt="Image" />
         <video src='https://res.cloudinary.com/dc-cloud/video/upload/v1722878376/Missplanet%20Collectibles/gallery/galleryVid1_ksuo2e.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
          <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878341/Missplanet%20Collectibles/gallery/galleryImg11_pa9ach.jpg" width='200' height='200' className={styles.image} alt="Image" />
          <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878336/Missplanet%20Collectibles/gallery/galleryImg5_qt1u30.jpg" 
          width='200' height='200' className={styles.image} alt="Image" />
          <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722877907/Missplanet%20Collectibles/gallery/galleryImg2_kl7xbr.jpg"  width='200' height='200' className={styles.image} alt="Image" />

          <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878339/Missplanet%20Collectibles/gallery/galleryImg8_hduicu.jpg"  width='200' height='200' className={styles.image} alt="Image" />

           <video src='https://res.cloudinary.com/dc-cloud/video/upload/v1722878389/Missplanet%20Collectibles/gallery/galleryVid2_wnmarm.mp4'  width="320" height="240" autoPlay loop muted className={`${styles.image} ${styles.video}`}></video>
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878347/Missplanet%20Collectibles/gallery/galleryImg14_u7fl46.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878348/Missplanet%20Collectibles/gallery/galleryImg15_hmaovi.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878350/Missplanet%20Collectibles/gallery/galleryImg16_gmh06a.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878350/Missplanet%20Collectibles/gallery/galleryImg17_rhmxk1.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878353/Missplanet%20Collectibles/gallery/galleryImg18_otbwui.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878353/Missplanet%20Collectibles/gallery/galleryImg19_evhowa.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878357/Missplanet%20Collectibles/gallery/galleryImg20_xg5m0g.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878358/Missplanet%20Collectibles/gallery/galleryImg21_mtb5dv.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878359/Missplanet%20Collectibles/gallery/galleryImg22_ldtgo0.jpg"  width='200' height='200' className={styles.image} alt="Image" />
            <Image src="https://res.cloudinary.com/dc-cloud/image/upload/v1722878376/Missplanet%20Collectibles/gallery/galleryImg23_kmmxpu.jpg"  width='200' height='200' className={styles.image} alt="Image" />

      </div>
    </div>
    </div>
  );
}

export default page;