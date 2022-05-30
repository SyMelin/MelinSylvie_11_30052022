import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header>
          <Link to="/">
              <img src={logo} />
          </Link>
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
          </nav>
        </header>    
    )
}

export default Header