import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'

function Header() {

    return (
        <header className='header'>
          <Link to="/" className='logo'>
              <img src={logo} alt="Kasa" className='logo--img'/>
          </Link>
          <nav className='nav'>
            <NavLink to="/" className={({ isActive }) => "nav__link nav__link" + (isActive ? "--active" : "--notActive")}>Accueil</NavLink>
            <NavLink to="/about" className={({ isActive }) => "nav__link nav__link" + (isActive ? "--active" : "--notActive")}>A propos</NavLink>
          </nav>
        </header>    
    )
}

export default Header