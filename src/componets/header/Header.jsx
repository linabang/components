import './Header.css'
import logo from '../../assets/icons8-github 2.svg'
const Header = () => {
  return (
    
    <header className="header">
      <div className="container header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="логотип" />
        </div>
        <nav className="header__nav">
          <ol className="header__nav__item">
            <li className="header__nav__link">Главная</li>
            <li className="header__nav__link">О нас</li>
            <li className="header__nav__link">Корзина</li>
            <li className="header__nav__link">Магазин</li>
          </ol>
        </nav>
        <button className="header__btn">Войти</button>
      </div>
    </header>
  )
}

export default Header