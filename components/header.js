import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
      <Link href='/'>Домой</Link>
      <Link href='/about'>О нас</Link>
      <Link href='/reviews'>Отзывы</Link>
      <Link href='/burgers'>Бургеры</Link>
      </nav>
    </header>
  )
}

export default Header;
