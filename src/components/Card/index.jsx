import '../../styles/Card.css'

function Card ({ title, cover }) {
    return (
        <div className='card__container'>
            <img src={cover} alt={title} className='card__cover'/>
            <h2 className='card__title'>{title}</h2>
        </div>
    )
}

export default Card