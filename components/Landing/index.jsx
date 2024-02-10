'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  // if (typeof window !== 'undefined') {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);
  // }

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className={styles.landing}>
      <div className={styles.imageContain}>
        <p>I'm</p>
        <p>Ario Baskoro</p>
        <p className={`${styles.subTittle}`}>
          Here is some of my works, check it out!
        </p>
      </div>
      {/* <Image
        className={styles.image}
        src="/images/portfolio-intro.png"
        fill={true}
        alt="background"
      /> */}
      <Link
        href="#frontend"
        className={`${styles.scrolldownlink} ${styles.scrolldownarrow}`}
        data-iconfont="ETmodules"
        data-icon
      >
        <svg className={styles.arrow}>
          <path className={styles.a1} d="M0 0 L30 26 L60 0"></path>
        </svg>
      </Link>
      {/* <a
        href="#frontend"
        className={`${styles.scrolldownlink} ${styles.scrolldownarrow}`}
        data-iconfont="ETmodules"
        data-icon
      ></a> */}
    </div>
  );
}
{
  /* <div className={styles.landing}> */
}
{
  /* <motion.main
  variants={slideUp}
  initial="initial"
  animate="enter"
  className={styles.landing}
> */
}
{
  /* <Image src="/images/portfolio-intro.png" fill={true} alt="background" /> */
}
{
  /* <div className={styles.sliderContainer}>
  <div ref={slider} className={styles.slider}>
    <p ref={firstText}>Freelance Developer -</p>
    <p ref={secondText}>Freelance Developer -</p>
  </div>
</div>
<div data-scroll data-scroll-speed={0.1} className={styles.description}>
  <svg
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
      fill="white"
    />
  </svg>
  <p>Freelance</p>
  <p>Designer & Developer</p>
</div> */
}
{
  /* </motion.main> */
}
{
  /* </div> */
}
