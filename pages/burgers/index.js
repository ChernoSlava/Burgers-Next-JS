export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data }
  }
}
const Burgers = (props) => {
  return (
    <div>
      <h1>Наши бургеры</h1>
    </div>
  )
}

export default Burgers;