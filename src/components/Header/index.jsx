import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

import '../../styles/Header.css'

function Header() {
    return (
        <header className='header'>
          <Link to="/">
              <img src={logo} alt="Kasa" className='logo--header'/>
          </Link>
          <nav className='nav'>
            <Link to="/" className='nav__link'>Accueil</Link>
            <Link to="/about" className='nav__link'>A propos</Link>
          </nav>
        </header>    
    )
}

export default Header