import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
    return (
        <div className='error__container'>
            <h1 className='error__title'>404</h1>
            <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error__link'>Retouner sur la page d'accueil</Link>
        </div>
    )
}

export default Error