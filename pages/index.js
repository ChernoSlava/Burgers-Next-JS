import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Классные бургеры</title>
        <meta name="title" content='Классные бургеры'/>
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Главная</h1>
        <div className={styles.mainImage}>
          <Image src='/fatburger.png' alt='Burger' width={400} height={300} priority/>
        </div>
        <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
        <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
        <Link href='/burgers' className={styles.btn}>Все бургеры</Link>
      </div>
    </>
  );
}