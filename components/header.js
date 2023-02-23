import { FaHamburger } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
        <a>Домой</a>
        <a>О нас</a>
        <a>Отзывы</a>
        <a>Бургеры</a>
      </nav>
    </header>
  )
}

export default Header;
