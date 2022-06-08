import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'

function Header() {
  const location = useLocation();
  const pathname = location.pathname

    return (
        <header className='header'>
          <Link to="/" className='logo'>
              <img src={logo} alt="Kasa" className='logo--img'/>
          </Link>
          <nav className='nav'>
            <Link to="/" className={ pathname === '/' ? 'nav__link nav__link--underlined' : 'nav__link nav__link--notUnderlined'}>Accueil</Link>
            <Link to="/about" className={ pathname === '/about' ? 'nav__link nav__link--underlined' : 'nav__link nav__link--notUnderlined'}>A propos</Link>
          </nav>
        </header>    
    )
}

export default Header