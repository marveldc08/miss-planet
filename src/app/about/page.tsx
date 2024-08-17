// "use client";
import React from "react";
import Image from 'next/image'
import styles from "./about.module.css";
import TestimonialCarousel from "../../components/Testimonial/Testimonial";

const page = () => {

     const testimonials = [
       {
         quote:
           "Miss Planet, has really unvailed the beauty in me and put a lasting smile on the face of my dear Husband. My Traditional wedding was a bomb, as I showed up in my traditional bridal attire I got from Miss Planet, the whole place was a stand still, they could not help but stare as I steped in with elegance and grace. Thank you Miss planet for presenting me as the Queen I really am.",
         author: "Toyosi Andrew",
         avatar: "/img/blob.png",
       },
       {
         quote:
           "  Miss Planet collectables is my go-to for beauty, glamour and quality. I also appreciate how prices here are quite friendly and the quality of products and services i get at Miss Planet are topnoch.",
         author: "Alice",
         avatar: "/img/blob.png",
       },
       {
         quote:
           " I really love the service here. On my first order from Miss Planet Collectables I planned to buy a bone straight wig but browsing the net for a vendor was stressful as most of the ones I found were not meeting my taste until a friend told me of Miss Planet... OMG!... the platform was everything I was looking for, I got quality products, affordable prices and awesome delivery service. I sincerly recommend Miss planet.",
         author: " Mirabel Kandy",
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
                {`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, animi. Quia laboriosam vel dignissimos explicabo non. Libero ab provident incidunt odio saepe rerum? Ex qui est, nihil optio suscipit placeat?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut dolorum debitis, provident aliquid iusto est animi sint dolorem delectus laborum voluptate ipsa quibusdam harum repellendus eaque consequatur perferendis dolor?`}
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
          <div className="p-3">
            <h2 className={styles.subtitle}>WE ARE THE BEST IN</h2>
            <h4>Unparalleled Quality</h4>
            <p>
              At our store, we pride ourselves on offering only the finest
              quality products. Each piece, from our luxurious fabrics to our
              exquisite accessories, is meticulously crafted to ensure it meets
              our high standards of excellence. We source the best materials and
              work with skilled artisans to deliver products that are durable,
              beautiful, and timeless.
            </p>
            <h4>Unique and Custom Designs</h4>
            <p>
              {
                "Our range of fabrics, accessories, and bridal attire features unique designs that you won't find anywhere else. Whether you're looking for a traditional piece or something with a modern twist, our products are designed to stand out. We also offer custom design services to help you create the perfect outfit or accessory that truly reflects your individual style and vision."
              }
            </p>

            {/* <h4>Cultural Significance</h4>
              <p>
                Our products are not just fashion statements; they are imbued
                with cultural significance and meaning. Each item in our
                collection reflects the rich cultural heritage of Nigeria and
                tells a story of tradition, identity, and pride. By choosing our
                products, you are embracing and celebrating this heritage in
                your everyday life.
              </p> */}
            <h4>Customer Satisfaction</h4>
            <p>
              Your satisfaction is our top priority. We are dedicated to
              providing high-quality products and exceptional service to ensure
              you have the best shopping experience. We value your feedback and
              are always striving to improve and meet your expectations. When
              you choose us, you can shop with confidence, knowing that you are
              getting the best in quality and service.
            </p>
            <h3>Choose Us for Quality, Tradition, and Unmatched Style!</h3>
          </div>
        </div>
      </section>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default page;
