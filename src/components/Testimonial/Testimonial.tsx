// components/TestimonialCarousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonial.module.css";
import Image from "next/image";

const TestimonialCarousel = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.testimonialSection}>
      <div className={styles.testimonialHead}>
        <h2>Testimonials</h2>
        <h4>See what our happy Clients have to say</h4>
      </div>
      <div className={styles.carouselContainer }>
        <div className={styles.testimonialCard}>
          <Image src="/img/blob.png" width='200' height='200' className={styles.avatar} alt="Avatar" />
          <div>
            <p
              className={`${styles.quote}`}
            >
              IFZINA exceeded our expectations with their professionalism and
              attention to detail. Their dedication to delivering on time and
              within budget is truly commendable.
            </p>
            <h2
              className={styles.author }
            >
              John Doe
            </h2>
          </div>
        </div>
        <div className={styles.testimonialCard}>
          <img src="/img/blob.png" className={styles.avatar} alt="Avatar" />
          <div>
            <p
              className={`${styles.quote}`}
            >
              IFZINA exceeded our expectations with their professionalism and
              attention to detail. Their dedication to delivering on time and
              within budget is truly commendable.
            </p>
            <h2
              className={styles.author }
            >
              John Doe
            </h2>
          </div>
        </div>
        <div className={styles.testimonialCard}>
          <Image src="/img/blob.png" width='200' height='200' className={styles.avatar} alt="Avatar" />
          <div>
            <p
              className={styles.quote}
            >
              IFZINA exceeded our expectations with their professionalism and
              attention to detail. Their dedication to delivering on time and
              within budget is truly commendable.
            </p>
            <h2
              className={styles.author}
            >
              John Doe
            </h2>
          </div>
        </div>
      </div>

      {/* <Slider {...settings} className={styles.slider}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.content}>
                <div className={styles.avatar}>
                  <Image
                    src={testimonial.avatar}
                    width={100}
                    height={100}
                    alt="Avatar"
                  />
                </div>
                <p className={styles.quote}>{testimonial.quote}</p>
                <p className={styles.author}>- {testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider> */}
    </div>
  );
};

export default TestimonialCarousel;
