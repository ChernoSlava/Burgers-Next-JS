import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такой страницы не существует</h2>
      <p>Перейти на <Link href='/'>главную страницу</Link></p>
    </div>
  )
}

export default NotFoundPage;
