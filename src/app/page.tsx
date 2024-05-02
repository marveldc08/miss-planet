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
        { quote: "Amazing testimonial 1", author: "John Doe", avatar: '/img/blob.png' },
        { quote: "Fantastic testimonial 2", author: "Jane Doe", avatar: '/img/blob.png' },
        { quote: "Amazing Miss Planet 1", author: "James Ken",avatar: '/img/blob.png' },
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
                  src="/img/bridal.jpeg"
                  width={500}
                  height={400}
                  alt="African Bride"
                />
              </div>
              <div className={styles.cardText}>
                <h2 className={"text-center"}>Bridals</h2>
                <p className="text-accent-dark text-center ">
                  Miss Planet brings out the Queen in You with our Bridal
                  collections Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolor optio fugit soluta tenetur perspiciatis laborum
                  cupiditate voluptatum consequatur sunt mollitia, tempore fuga
                  modi eligendi hic eaque eveniet ullam, quae sed?
                </p>
                <Link href="/products" className={styles.learnMoreBtn}>
                  Learn More &rarr;
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
                  Miss Planet brings out the Queen in You with our Bridal
                  collections Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolor optio fugit soluta tenetur perspiciatis laborum
                  cupiditate voluptatum consequatur sunt mollitia, tempore fuga
                  modi eligendi hic eaque eveniet ullam, quae sed?
                </p>
                <Link href="/products" className={styles.learnMoreBtn}>
                  Learn More &rarr;
                </Link>
              </div>
              <div className={styles.cardImageContainer}>
                <Image
                  src="/img/fabric.jpeg"
                  width={500}
                  height={400}
                  alt="fabric"
                />
              </div>
            </div>
            <div className={styles.offerCard}>
              <div className={`${styles.cardImageContainer} ${"w-[40%]"}`}>
                <Image
                  src="/img/accessory.jpeg"
                  width={500}
                  height={400}
                  alt="Accessories"
                />
              </div>
              <div className={styles.cardText}>
                <h2 className={"text-center"}>Accessories</h2>
                <p className="text-accent-dark text-center ">
                  Miss Planet brings out the Queen in You with our Bridal
                  collections Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolor optio fugit soluta tenetur perspiciatis laborum
                  cupiditate voluptatum consequatur sunt mollitia, tempore fuga
                  modi eligendi hic eaque eveniet ullam, quae sed?
                </p>
                <Link href="/products" className={styles.learnMoreBtn}>
                  Learn More &rarr;
                </Link>
              </div>
            </div>
            <div
              className={`${isMobile && styles.offerCardReverse} ${
                styles.offerCard
              }`}
            >
              <div className={styles.cardText}>
                <h2 className={"text-center"}>Wigs</h2>
                <p className="text-accent-dark text-center">
                  Miss Planet brings out the Queen in You with our Bridal
                  collections Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolor optio fugit soluta tenetur perspiciatis laborum
                  cupiditate voluptatum consequatur sunt mollitia, tempore fuga
                  modi eligendi hic eaque eveniet ullam, quae sed?
                </p>
                <Link href="/products" className={styles.learnMoreBtn}>
                  Learn More &rarr;
                </Link>
              </div>
              <div className={styles.cardImageContainer}>
                <Image src="/img/wig.jpeg" width={500} height={400} alt="wig" />
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
          <Testimonial testimonials={testimonials} />

          <ContactUs />
   
      </section>
      
    </div>
  );
}

export default Home