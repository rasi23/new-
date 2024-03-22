import { useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Define y values for different columns
  // Assuming y, y2, y3, y4 are calculated elsewhere

  return (
    <main className={styles.main}>
      <Spline scene="https://prod.spline.design/iFhGVgpUtCh28Gum/scene.splinecode" />
      <div ref={gallery} className={styles.gallery}>
        {/* Placeholder for Column components */}
      </div>
    </main>
  );
}
