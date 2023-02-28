import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такой страницы не существует</h2>
      <p>Перехожу на <Link href='/'>главную страницу</Link> через 4 секунды...</p>
    </div>
  )
}

export default NotFoundPage;
