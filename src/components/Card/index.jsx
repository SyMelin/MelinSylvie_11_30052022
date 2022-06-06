import { Link } from 'react-router-dom'
import '../../styles/Card.css'

function Card ({ id, title, cover }) {
    //console.log("accomodationID", {id})
    return (
        <Link to={`/accomodation/${id}`} className='card__container'>
            <img src={cover} alt={title} className='card__cover'/>
            <span className='card__filter'></span>
            <h2 className='card__title'>{title}</h2>
        </Link>
    )
}

export default Card