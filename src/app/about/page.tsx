// "use client";
import React from "react";
import Image from 'next/image'
import styles from "./about.module.css";
import TestimonialCarousel from "../../components/Testimonial/Testimonial";

const page = () => {

     const testimonials = [
       {
         quote: "Amazing testimonial 1",
         author: "John Doe",
         avatar: "/img/blob.png",
       },
       {
         quote: "Fantastic testimonial 2",
         author: "Jane Doe",
         avatar: "/img/blob.png",
       },
       {
         quote: "Amazing Miss Planet 1",
         author: "James Ken",
         avatar: "/img/blob.png",
       },
       // Add more testimonials as needed
     ];
  return (
    <div>
      <section className={styles.jumbotron}>
        <div className={styles.content}>
          <h1 className={styles.title}>About Us</h1>
        </div>
      </section>
      <div className={styles.container}>
        <section className={styles.aboutWrap}>
          <h2>About Miss Planet</h2>
          <div className={styles.aboutCard}>
            <div className={styles.ImgWrap}>
              <Image
                src="/img/about.jpeg"
                width={200}
                height={200}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <p>
                {`  IFZINA brings global expertise and local insight to Nigeria's
            thriving oil and gas industry. With our comprehensive EPC services,
            we support projects across the upstream, midstream, and downstream
            sectors, contributing to the exploration, production,
            transportation, refining, and distribution of Nigeria's abundant oil
            and gas resources.`}
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.staticSection}>
        <div className={styles.staticContentWrap}>
          <div className="p-2 border border-r-2 border-white">
            <h1 className={styles.title}>Why Choose Us?</h1>
          </div>
          <div className="p-2">
            <h2 className={styles.subtitle}>WE ARE THE BEST</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis nam officia illo accusamus fugit eum dignissimos
              similique voluptas natus quia. Sequi sunt hic iste nisi officiis
              consectetur neque tenetur ipsum.
            </p>
          </div>
        </div>
      </section>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default page;
