
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <h1>I will be burgers app</h1>
      <Link href='/burgers'>Все бургеры</Link>
      <Footer />
    </div>
  );
}