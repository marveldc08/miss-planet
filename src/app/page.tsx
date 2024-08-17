'use client'
import { useState,useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import styles from './Home.module.css'
import Testimonial from "../components/Testimonial/Testimonial";
import ContactUs from "../components/ContactUs/ContactUs";
import Counter from '../components/Counter/Counter'
import Footer from "../components/Footer/Footer";


const Home = () => {
  const [isMobile, setIsMobile] = useState(false)
      useEffect(() => {
      if (window.screen.width <= 768) {
        setIsMobile(true)
      } else{
        setIsMobile(false);
      }
      }, [])

     const testimonials = [
       {
         quote:
           "Miss Planet, has really unvailed the beauty in me and put a lasting smile on the face of my dear Husband. My Traditional wedding was a bomb, as I showed up in my traditional bridal attire I got from Miss Planet, the whole place was a stand still, they could not help but stare as I steped in with elegance and grace. Thank you Miss Planet Collectables for presenting me as the Queen I really am.",
         author: "Toyosi Andrew",
         avatar: "/img/blob.png",
       },
       {
         quote:
           "  Miss Planet collectables is my go-to for beauty, glamour and quality. I also appreciate how prices here are quite friendly and the quality of products ans services i get at Miss Planet aer topnoch.",
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
    <div className={styles.container}>
      <section className={styles.jumbotron}>
        <div className={styles.content}>
          <h1 className={styles.title}>Miss Planet Collectables</h1>
          <p className={styles.subtitle}>
            Your one-stop solution for everything gorgeous
          </p>
          <Link href="/" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>
      </section>
      <section className={styles.subContent}>
        <div className={styles.whatWeOffer}>
          <h2 className={`${"text-center"} ${styles.subTitle}`}>
            What We Offer?
          </h2>
          <div className={styles.offerCardWrap}>
            <div className={styles.offerCard}>
              <div className={styles.cardImageContainer}>
                <Image
                  src="https://res.cloudinary.com/dc-cloud/image/upload/v1722876670/Missplanet%20Collectibles/bridal_pz8x3i.jpg"
                  width={500}
                  height={400}
                  alt="African Bride"
                />
              </div>
              <div className={styles.cardText}>
                <h2 className={"text-center"}>Bridals</h2>
                <p className="text-accent-dark text-center ">
                  Your wedding day is a celebration of love, culture, and
                  heritage. Let us help you honor your roots and create
                  unforgettable memories with our stunning Nigerian traditional
                  bridal attire. View our catalogue to find the perfect ensemble
                  that resonates with your personal style and cultural
                  background. Step into your new life wrapped in grace and
                  elegance.
                </p>
                <Link href="/catalogue" className={styles.learnMoreBtn}>
                  View Categories &rarr;
                </Link>
              </div>
            </div>
            <div
              className={`${isMobile && styles.offerCardReverse} ${
                styles.offerCard
              }`}
            >
              <div className={styles.cardText}>
                <h2 className={"text-center"}>Fabrics</h2>
                <p className="text-accent-dark text-center">
                  Step into a world of color, texture, and tradition with our
                  stunning collection of Nigerian fabrics. Perfect for weddings,
                  special events, and everyday elegance, our fabrics are
                  designed to bring out and celebrate the beauty and royalty in
                  You. Whether you&apos;re looking for luxurious Aso oke,
                  vibrant Ankara, or intricate lace, Miss Planet Collectables has
                  the perfect fabric to elevate your style.
                </p>
                <Link href="/catalogue" className={styles.learnMoreBtn}>
                  View Categories &rarr;
                </Link>
              </div>
              <div className={styles.cardImageContainer}>
                <Image
                  src="https://res.cloudinary.com/dc-cloud/image/upload/v1722876761/Missplanet%20Collectibles/fabric_jomf14.jpg"
                  width={500}
                  height={400}
                  alt="fabric"
                />
              </div>
            </div>
            <div className={styles.offerCard}>
              <div className={`${styles.cardImageContainer} ${"w-[40%]"}`}>
                <Image
                  src="https://res.cloudinary.com/dc-cloud/image/upload/v1722876229/Missplanet%20Collectibles/accessories_xd7oei.jpg"
                  width={500}
                  height={400}
                  alt="Accessories"
                />
              </div>
              <div className={styles.cardText}>
                <h2 className={"text-center"}>Accessories</h2>
                <p className="text-accent-dark text-center ">
                  Miss Planet Collectables offers only the best and quality
                  accessories ranging from intricate bead necklaces to elegant
                  wrist beads and statement earrings. Our accessories are
                  designed to complement your style and celebrate your heritage.
                  Perfect for weddings, special events, and everyday elegance,
                  our accessories add the perfect finishing touch to any outfit.
                </p>
                <Link href="/catalogue" className={styles.learnMoreBtn}>
                  View Categories &rarr;
                </Link>
              </div>
            </div>
            <div
              className={`${isMobile && styles.offerCardReverse} ${
                styles.offerCard
              }`}
            >
              <div className={styles.cardText}>
                <h2 className={"text-center"}>Hair</h2>
                <p className="text-accent-dark text-center">
                  At Miss Planet Collectables, our premium collection of wigs and
                  hair-do offers unparalleled versatility and convenience,
                  allowing you to switch up your look with ease. Whether you
                  desire a completely different style or simply want to add
                  volume and length, we have the perfect solution for You.
                </p>
                <Link href="/catalogue" className={styles.learnMoreBtn}>
                  View Categories &rarr;
                </Link>
              </div>
              <div className={styles.cardImageContainer}>
                <Image
                  src="https://res.cloudinary.com/dc-cloud/image/upload/v1722876833/Missplanet%20Collectibles/wig_tuqkqe.jpg"
                  width={500}
                  height={400}
                  alt="wig"
                />
              </div>
            </div>
          </div>
        </div>
        <section className={styles.staticSection}>
          <div className={styles.staticContentWrap}>
            <div className="p-2 border border-r-2 border-white">
              <h1 className={styles.title}>Why Choose Us?</h1>
            </div>
            <div className="p-2">
              <h2 className={styles.subtitle}>WE ARE THE BEST IN </h2>
              <h4>Unparalleled Quality</h4>
              <p>
                At our store, we pride ourselves on offering only the finest
                quality products. Each piece, from our luxurious fabrics to our
                exquisite accessories, is meticulously crafted to ensure it
                meets our high standards of excellence. We source the best
                materials and work with skilled artisans to deliver products
                that are durable, beautiful, and timeless.
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
                providing high-quality products and exceptional service to
                ensure you have the best shopping experience. We value your
                feedback and are always striving to improve and meet your
                expectations. When you choose us, you can shop with confidence,
                knowing that you are getting the best in quality and service.
              </p>
              <h3>Choose Us for Quality, Tradition, and Unmatched Style!</h3>
            </div>
          </div>
        </section>
        <Testimonial testimonials={testimonials} />
        <ContactUs />
      </section>
    </div>
  );
}

export default Home