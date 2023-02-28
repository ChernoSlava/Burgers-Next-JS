import Image from 'next/image';

import styles from '../../styles/Burgers.module.css';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  const paths = data.map(burger => {
    return {
      params: { id: burger.id }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return {
    props: { burger: data }
  }
}

const Details = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{ burger.name }</h1>
      <div>
        <Image
          src={`${burger.image}`}
          alt={`${burger.name}`}
          width='200'
          height='200'
          style={{
            Layout: 'responsive',
            objectFit: "cover",

          }}
        />
      </div>
      <div>
        <p>{ burger.desc }</p>
        <p>Цена: {burger.price} рублей</p>
      </div>

    </div>
  )
}

export default Details;