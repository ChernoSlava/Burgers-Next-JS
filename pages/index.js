import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>I will be burgers app</h1>
      <Link href='/burgers'>Все бургеры</Link>
    </div>
  );
}