import Head from 'next/head';
const Reviews = ({ reviews }) => {

  return (
    <>
      <Head>
        <title>Отзывы клиентов</title>
        <meta name="title" content='Отзывы клиентов' />
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div className='reviews'>
          {!!reviews.length && reviews.map(res => {
            return (
              <div key={res.id} className='reviews'>
                {res.id}
                {` ${res.body.slice(0, 90)}...`}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20)
    }
  }
}

export default Reviews;
