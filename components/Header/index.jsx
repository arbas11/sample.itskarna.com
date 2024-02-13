'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';
import { data } from '../../data/data';
import useWindowDimensions from '@/hooks/useWindowDimensions';

export default function index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  const { height, width } = useWindowDimensions();
  const breakpoint = 488;
  const smBreakpoint = 400;

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  // if (typeof window !== 'undefined') {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: 'power1.out' },
            setIsActive(false)
          );
        },
      },
    });
  }, []);
  // }
  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}></div>
        <div className={styles.nav}>
          {data.map((value, idx) => {
            if (width <= breakpoint) {
              if (value.name === 'others') {
                return null;
              }
            }
            if (width <= smBreakpoint) {
              if (value.name === 'others' || value.name === 'infrastructure') {
                return null;
              }
            }
            return (
              <Magnetic key={idx}>
                <div className={styles.el}>
                  <Link href={`#${value.name}`}>{value.title}</Link>
                  <div className={styles.indicator}></div>
                </div>
              </Magnetic>
            );
          })}
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
